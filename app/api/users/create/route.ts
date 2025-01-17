import { NextResponse } from 'next/server';
import { PrismaClient, User } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { sendWelcomeEmail } from '@/lib/email';
import { removePassword } from '@/app/utils/user';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone } = body;

    console.log('Received request body:', body);

    // Validate input
    if (!email || !firstName || !lastName || !phone) {
      console.log('Missing required fields:', { email, firstName, lastName, phone });
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      console.log('User already exists:', email);
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 400 }
      );
    }

    // Send welcome email with credentials
    console.log('Attempting to send welcome email to:', email);
    const emailResult = await sendWelcomeEmail({
      firstName,
      lastName,
      email,
    });

    if (!emailResult.success || !emailResult.password) {
      console.error('Failed to send welcome email:', emailResult.error);
      return NextResponse.json(
        { message: 'Failed to send welcome email' },
        { status: 500 }
      );
    }

    // Hash the generated password
    const hashedPassword = await bcrypt.hash(emailResult.password, 10);

    // Create user
    console.log('Creating user in database:', email);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        phone,
      },
    });

    // Remove password from response
    const userWithoutPassword = removePassword(user);
    console.log('User created successfully:', email);

    return NextResponse.json(userWithoutPassword, { status: 201 });
  } catch (error) {
    console.error('User creation error:', error);
    return NextResponse.json(
      { message: 'Error creating user', error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
} 
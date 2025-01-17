import sgMail from '@sendgrid/mail';
import { generateRandomPassword } from './auth';

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

interface EmailData {
  firstName: string;
  lastName: string;
  email: string;
}

export async function sendWelcomeEmail(data: EmailData) {
  const password = await generateRandomPassword();
  
  const msg = {
    to: data.email,
    from: process.env.EMAIL_FROM || 'noreply@weatherizenc.com', // Verified sender email
    subject: 'Welcome to Weatherize NC - Your Account Details',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #166534;">Welcome to Weatherize NC!</h2>
        
        <p>Dear ${data.firstName} ${data.lastName},</p>
        
        <p>Thank you for completing your pre-qualification application for the NC Weatherization Assistance Program. 
        We have created an account for you to access your application status and complete the full application if you are pre-qualified.</p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #166534; margin-top: 0;">Your Login Credentials</h3>
          <p><strong>Username:</strong> ${data.email}</p>
          <p><strong>Temporary Password:</strong> ${password}</p>
        </div>
        
        <p><strong>Important:</strong> For security reasons, please change your password after your first login.</p>
        
        <p>You can log in to your account at: <a href="${process.env.NEXTAUTH_URL}/login" style="color: #166534;">${process.env.NEXTAUTH_URL}/login</a></p>
        
        <p>If you have any questions or need assistance, please don't hesitate to contact our support team.</p>
        
        <p>Best regards,<br>The Weatherize NC Team</p>
      </div>
    `,
  };

  try {
    await sgMail.send(msg);
    return { success: true, password };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
} 
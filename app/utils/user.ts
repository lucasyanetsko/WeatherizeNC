import { User } from '@prisma/client';

export type UserWithoutPassword = Omit<User, 'password'>;

export function removePassword(user: User): UserWithoutPassword {
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
} 
import { User } from '@prisma/client';

export type UserWithoutPassword = Omit<User, 'password'>;

export function removePassword(user: User): UserWithoutPassword {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
} 
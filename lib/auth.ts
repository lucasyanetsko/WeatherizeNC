import crypto from 'crypto';

export async function generateRandomPassword(): Promise<string> {
  // Generate a random string of 12 characters
  // Including uppercase, lowercase, numbers, and special characters
  const length = 12;
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
  
  return new Promise((resolve, reject) => {
    crypto.randomBytes(length, (err, buf) => {
      if (err) reject(err);
      
      const password = Array.from(buf)
        .map(byte => charset[byte % charset.length])
        .join('');
      
      resolve(password);
    });
  });
} 
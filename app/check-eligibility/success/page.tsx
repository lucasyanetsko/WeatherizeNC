// Success page for eligibility check
'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useFormContext } from '../../context/FormContext';

export default function SuccessPage() {
  const router = useRouter();
  const { formData } = useFormContext();
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function createUser() {
      if (isCreatingUser || !formData.contact.email) return;
      
      setIsCreatingUser(true);
      try {
        const response = await fetch('/api/users/create', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: formData.contact.email,
            firstName: formData.contact.firstName,
            lastName: formData.contact.lastName,
            phone: formData.contact.phone,
          }),
        });

        if (!response.ok) {
          const data = await response.json();
          setError(data.message || 'Failed to create account');
        }
      } catch (_error) {
        setError('Failed to create account. Please try again later.');
      } finally {
        setIsCreatingUser(false);
      }
    }

    createUser();
  }, [formData, isCreatingUser]);

  if (!formData.contact.email) {
    router.push('/check-eligibility');
    return null;
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-800 text-white rounded-full flex items-center justify-center font-medium">✓</div>
                <div className="ml-2 text-green-800 font-medium">Contact</div>
              </div>
              <div className="flex-1 h-1 mx-4 bg-green-800"></div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-800 text-white rounded-full flex items-center justify-center font-medium">✓</div>
                <div className="ml-2 text-green-800 font-medium">Address</div>
              </div>
              <div className="flex-1 h-1 mx-4 bg-green-800"></div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-800 text-white rounded-full flex items-center justify-center font-medium">✓</div>
                <div className="ml-2 text-green-800 font-medium">Income</div>
              </div>
            </div>
          </div>

          {/* Success Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-medium text-gray-800 mb-4">Application Submitted!</h1>
              <p className="text-gray-600">Thank you for submitting your pre-qualification application. Here&apos;s what happens next:</p>
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
                {error}
              </div>
            )}

            {/* Next Steps */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-800 font-medium">1</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Check Your Email</h3>
                  <p className="text-gray-600">We&apos;ve sent your login credentials to {formData.contact.email}. Please check your inbox (and spam folder).</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-800 font-medium">2</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Review Process</h3>
                  <p className="text-gray-600">Our team will review your information within 2-3 business days.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-800 font-medium">3</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Next Steps</h3>
                  <p className="text-gray-600">If pre-qualified, you&apos;ll be able to complete the full application after logging in.</p>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-medium text-gray-800 mb-4">Application Summary</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-600">Contact Information</h3>
                  <p className="text-gray-800">{formData.contact.firstName} {formData.contact.lastName}</p>
                  <p className="text-gray-800">{formData.contact.email}</p>
                  <p className="text-gray-800">{formData.contact.phone}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-600">Address</h3>
                  <p className="text-gray-800">{formData.address.street}</p>
                  <p className="text-gray-800">{formData.address.city}, {formData.address.state} {formData.address.zipCode}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Link
                href="/"
                className="bg-green-800 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 
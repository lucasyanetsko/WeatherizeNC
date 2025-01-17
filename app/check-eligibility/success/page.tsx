'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useFormContext } from '../../context/FormContext'

export default function SuccessPage() {
  const router = useRouter()
  const { formData } = useFormContext()
  const [referenceNumber, setReferenceNumber] = useState('')
  
  useEffect(() => {
    // Generate reference number on client side only
    setReferenceNumber(Math.random().toString(36).substring(2, 10).toUpperCase())
    
    // Check form data
    if (!formData || (!formData.contact && !formData.address && !formData.income)) {
      router.push('/check-eligibility')
    }
  }, [formData, router])

  // Show loading state while checking form data
  if (!formData || (!formData.contact && !formData.address && !formData.income)) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-3xl font-medium text-gray-900 mb-4">
            Application Submitted Successfully!
          </h1>
          
          <p className="text-lg text-gray-600 mb-6">
            Thank you for applying to the NC Weatherization Assistance Program.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-500 mb-2">Your Application Reference Number</p>
            <p className="text-xl font-medium text-gray-900">{referenceNumber || 'Generating...'}</p>
          </div>
          
          <p className="text-gray-600 mb-8">
            We will review your application and contact you soon with next steps.
          </p>
          
          <Link 
            href="/"
            className="inline-block bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
} 
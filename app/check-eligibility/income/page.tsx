'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useFormContext } from '../../context/FormContext'

export default function IncomeStep() {
  const router = useRouter()
  const { formData, updateFormData } = useFormContext()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const formElements = e.target as HTMLFormElement
    const fileInput = formElements['file-upload'] as HTMLInputElement
    
    const data = {
      annualIncome: Number(formElements.annualIncome.value),
      householdMembers: Number(formElements.householdMembers.value),
      verificationFile: fileInput.files?.[0] || null
    }
    
    updateFormData('income', data)
    
    // Force a hard navigation to the success page
    document.location.pathname = '/check-eligibility/success'
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
                <div className="w-8 h-8 bg-green-800 text-white rounded-full flex items-center justify-center font-medium">3</div>
                <div className="ml-2 text-green-800 font-medium">Income</div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-medium text-gray-800 mb-6">Income Information</h1>
            <form action="/check-eligibility/success" method="get" className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="annualIncome" className="block text-sm font-medium text-gray-700 mb-1">Annual Household Income</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    id="annualIncome"
                    name="annualIncome"
                    required
                    min="0"
                    step="1000"
                    defaultValue={formData.income.annualIncome}
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent text-black"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="householdMembers" className="block text-sm font-medium text-gray-700 mb-1">Number of Household Members</label>
                <input
                  type="number"
                  id="householdMembers"
                  name="householdMembers"
                  required
                  min="1"
                  defaultValue={formData.income.householdMembers}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent text-black"
                />
              </div>
              <div>
                <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700 mb-1">Income Verification Document</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-green-800 transition-colors">
                  <div className="space-y-1 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-green-800 hover:text-green-700 focus-within:outline-none">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" accept=".pdf,.jpg,.jpeg,.png" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PDF, PNG, JPG up to 10MB (optional)</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between pt-4">
                <Link
                  href="/check-eligibility/address"
                  className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-gray-700"
                >
                  Previous Step
                </Link>
                <button
                  type="submit"
                  className="bg-green-800 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
} 
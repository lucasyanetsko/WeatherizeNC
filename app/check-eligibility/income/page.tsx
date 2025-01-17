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
    const data = {
      annualIncome: Number(formElements.annualIncome.value),
      householdSize: Number(formElements.householdSize.value)
    }
    
    updateFormData('income', data)
    router.push('/check-eligibility/success')
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
            <form className="space-y-6" onSubmit={handleSubmit}>
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
                <label htmlFor="householdSize" className="block text-sm font-medium text-gray-700 mb-1">Number of Household Members</label>
                <input
                  type="number"
                  id="householdSize"
                  name="householdSize"
                  required
                  min="1"
                  defaultValue={formData.income.householdSize}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent text-black"
                />
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
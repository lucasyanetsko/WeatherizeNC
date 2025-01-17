'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { NC_COUNTIES } from '../../constants/counties'
import { useFormContext } from '../../context/FormContext'

export default function AddressStep() {
  const router = useRouter()
  const { formData, updateFormData } = useFormContext()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formElements = e.target as HTMLFormElement
    const data = {
      street: formElements.streetAddress.value,
      county: formElements.county.value,
      zipCode: formElements.zipCode.value,
    }
    updateFormData('address', data)
    router.push('/check-eligibility/income')
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
                <div className="w-8 h-8 bg-green-800 text-white rounded-full flex items-center justify-center font-medium">2</div>
                <div className="ml-2 text-green-800 font-medium">Address</div>
              </div>
              <div className="flex-1 h-1 mx-4 bg-gray-200"></div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center font-medium">3</div>
                <div className="ml-2 text-gray-600">Income</div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-medium text-gray-800 mb-6">Address Information</h1>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                <input
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                  required
                  defaultValue={formData.address.street}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent text-black"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="county" className="block text-sm font-medium text-gray-700 mb-1">County</label>
                  <select
                    id="county"
                    name="county"
                    required
                    defaultValue={formData.address.county}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent text-black"
                  >
                    <option value="">Select County</option>
                    {NC_COUNTIES.map((county) => (
                      <option key={county} value={county.toLowerCase()}>{county}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    required
                    pattern="[0-9]{5}"
                    defaultValue={formData.address.zipCode}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent text-black"
                  />
                </div>
              </div>
              <div className="flex justify-between pt-4">
                <Link
                  href="/check-eligibility"
                  className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-gray-700"
                >
                  Previous Step
                </Link>
                <button
                  type="submit"
                  className="bg-green-800 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Next Step
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
} 
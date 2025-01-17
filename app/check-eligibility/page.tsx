'use client'

import { useRouter } from 'next/navigation'
import { useFormContext } from '../context/FormContext'

export default function CheckEligibility() {
  const router = useRouter()
  const { formData, updateFormData } = useFormContext()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const formElements = e.target as HTMLFormElement
    const data = {
      firstName: formElements.firstName.value,
      lastName: formElements.lastName.value,
      email: formElements.email.value,
      phone: formElements.phone.value
    }
    
    updateFormData('contact', data)
    router.push('/check-eligibility/address')
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-800 text-white rounded-full flex items-center justify-center font-medium">1</div>
                <div className="ml-2 text-green-800 font-medium">Contact</div>
              </div>
              <div className="flex-1 h-1 mx-4 bg-gray-200">
                <div className="h-full bg-green-800 w-0"></div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center font-medium">2</div>
                <div className="ml-2 text-gray-600">Address</div>
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
            <h1 className="text-3xl font-medium text-gray-800 mb-6">Contact Information</h1>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    defaultValue={formData.contact.firstName}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent text-black"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    defaultValue={formData.contact.lastName}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent text-black"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  defaultValue={formData.contact.email}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent text-black"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  defaultValue={formData.contact.phone}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent text-black"
                />
              </div>
              <div className="flex justify-end pt-4">
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
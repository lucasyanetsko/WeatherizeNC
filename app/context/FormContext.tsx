'use client'

import React, { createContext, useContext, useState } from 'react'

interface FormData {
  contact: {
    firstName: string
    lastName: string
    email: string
    phone: string
  }
  address: {
    street: string
    city: string
    state: string
    zipCode: string
  }
  income: {
    householdSize: number
    annualIncome: number
  }
}

interface FormContextType {
  formData: FormData
  updateFormData: (section: keyof FormData, data: Record<string, string>) => void
  resetFormData: () => void
}

const initialFormData: FormData = {
  contact: {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  },
  address: {
    street: '',
    city: '',
    state: '',
    zipCode: ''
  },
  income: {
    householdSize: 0,
    annualIncome: 0
  }
}

const FormContext = createContext<FormContextType | undefined>(undefined)

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<FormData>(initialFormData)

  const updateFormData = (section: keyof FormData, data: Record<string, string>) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...data
      }
    }))
  }

  const resetFormData = () => {
    setFormData(initialFormData)
  }

  return (
    <FormContext.Provider value={{ formData, updateFormData, resetFormData }}>
      {children}
    </FormContext.Provider>
  )
}

export function useFormContext() {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider')
  }
  return context
} 
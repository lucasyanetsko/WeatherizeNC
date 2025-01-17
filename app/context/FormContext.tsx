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
    county: string
    zipCode: string
  }
  income: {
    annualIncome: number
    householdMembers: number
    verificationFile?: File
  }
}

interface FormContextType {
  formData: FormData
  updateFormData: (step: keyof FormData, data: any) => void
  resetForm: () => void
}

const initialFormData: FormData = {
  contact: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  },
  address: {
    street: '',
    county: '',
    zipCode: '',
  },
  income: {
    annualIncome: 0,
    householdMembers: 1,
    verificationFile: undefined,
  },
}

const FormContext = createContext<FormContextType | undefined>(undefined)

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<FormData>(initialFormData)

  const updateFormData = (step: keyof FormData, data: any) => {
    setFormData(prev => ({
      ...prev,
      [step]: {
        ...prev[step],
        ...data,
      },
    }))
  }

  const resetForm = () => {
    setFormData(initialFormData)
  }

  return (
    <FormContext.Provider value={{ formData, updateFormData, resetForm }}>
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
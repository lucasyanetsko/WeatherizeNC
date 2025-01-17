import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { FormProvider } from './context/FormContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Weatherize NC',
  description: 'North Carolina Weatherization Assistance Program',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FormProvider>
          {children}
        </FormProvider>
      </body>
    </html>
  )
}
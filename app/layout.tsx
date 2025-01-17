import { Roboto, Montserrat } from 'next/font/google'
import './globals.css'
import './weather-animations.css'
import { FormProvider } from './context/FormContext'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata = {
  title: 'Weatherize NC',
  description: 'Save on energy bills with NC Weatherization Assistance Program',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.className} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>☁️</text></svg>" />
      </head>
      <body>
        <FormProvider>
          {children}
        </FormProvider>
      </body>
    </html>
  )
}
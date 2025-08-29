import './globals.css'
import React from 'react'
import Header from '../components/Header'

export const metadata = {
  title: 'eho99 — Portfolio',
  description: 'Technical project portfolio'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container py-8">{children}</main>
      </body>
    </html>
  )
}

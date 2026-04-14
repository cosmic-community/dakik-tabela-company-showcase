import type { ReactNode } from 'react'

export const metadata = {
  title: 'Dakik Tabela',
  description: 'Modern, premium LED ve dijital signage çözümleri.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-white text-[#191c1e]">{children}</body>
    </html>
  )
}
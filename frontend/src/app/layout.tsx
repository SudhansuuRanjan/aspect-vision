import './globals.css'
import { Prompt } from 'next/font/google'
const ubuntu = Prompt({ subsets: ["thai", "vietnamese", "latin", "latin-ext"], weight: ["100","200","300","400","500","600", "700","800","900"] });

export const metadata = {
  title: 'Aspect Vision',
  description: 'Simplifying your Counselling Experience.',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  )
}

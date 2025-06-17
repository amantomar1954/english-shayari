import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import Header from "@/components/header/Header";
import Footerpage from "@/components/footer/Footerpage";
const sans = GeistSans
const mono = GeistMono

export const metadata = {
  title: 'EnglishShayari | 110+ Best English Shayari | Love Shayari In English',
  description: 'Find the most romantic EnglishShayari collection with 110+ love poems, emotional verses, and heartfelt quotes to express your deepest feelings perfectly.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <Header/>
        {children}
        <Footerpage/>
        </body>
    </html>
  )
}
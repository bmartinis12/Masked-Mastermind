import Footer from './components/Footer'
import NavBar from './components/NavBar'
import './globals.css'
import { Work_Sans } from 'next/font/google'

const workSans = Work_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Masked Mastermind',
  description: 'The offical site of Masked Mastermind',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={workSans.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

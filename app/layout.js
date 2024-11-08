import Navbar from './components/Navbar'
import './globals.css'
import Providers from './providers'

export const metadata = {
  title: 'Next.js Tutorial',
  description: 'Build awesome stuff with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`antialiased`}>
        <Navbar />
        <main className='px-8 py-20 max-w-6xl mx-auto'>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  )
}

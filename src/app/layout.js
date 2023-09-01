import Footer from './footer';
import './globals.css';
import Header from './header';

export const metadata = {
  title: 'Rui',
  description: '开发者, 创新者，写手',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='dark'>
      <body className='antialiased w-full h-full max-w-full m-0 p-0'>
        <main className='mx-auto max-w-2xl flex flex-col'>
          <Header />
          <div className='my-8'>
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  )
}

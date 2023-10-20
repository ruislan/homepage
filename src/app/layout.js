import Header from './header';
import Footer from './footer';
import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Rui',
  description: '开发者, 创新者，分享者，乐天派',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='dark'>
      <body className='antialiased w-full h-full max-w-full m-0 p-0'>
        <main className='mx-auto max-w-2xl flex flex-col pl-4 pr-4 md:p-0'>
          <Header />
          <div className='my-8'>
            {children}
          </div>
          <Footer />
        </main>
        <Script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2509141528965621' crossOrigin='anonymous' />
      </body>
    </html>
  )
}

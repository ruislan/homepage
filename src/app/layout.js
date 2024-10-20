import Header from './header';
import Footer from './footer';
import './globals.css';

export const metadata = {
  title: 'Rui',
  description: '开发者, 创新者，分享者，乐天派',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='dark'>
      <body className='antialiased w-full h-full max-w-full m-0 p-0'>
        <main className='mx-auto max-w-2xl flex flex-col pl-4 pr-4 md:px-0.5'>
          <Header />
          <div className='my-4'>
            {children}
          </div>
          <Footer />
        </main>
        {
          process.env.GOOGLE_ADS_CLIENT &&
          <script
            async
            crossOrigin='anonymous'
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.GOOGLE_ADS_CLIENT}`}
          />
        }
        {
          process.env.UMAMI_WEBSITE_ID &&
          <script
            async
            crossOrigin='anonymous'
            src='https://analytics.eu.umami.is/script.js'
            data-website-id={process.env.UMAMI_WEBSITE_ID}
          />
        }
      </body>
    </html>
  )
}

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  )
}

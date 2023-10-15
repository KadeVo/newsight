import { AppProps } from 'next/app'
import { CountryProvider } from '@/app/components/CountryContext'
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <CountryProvider>
      <Component {...pageProps} />
    </CountryProvider>
  )
}

export default MyApp

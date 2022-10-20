import 'windi.css'
import { ConfigProvider } from 'antd'
import 'antd/dist/antd.variable.min.css'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import '@/styles/icons.css'
import '@/styles/custom.css'
import 'antd/dist/antd.css'
import { colors } from '@/constants/colors'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  ConfigProvider.config({
    theme: {
      primaryColor: colors.primary,
    },
  })
  return (
    <ConfigProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ConfigProvider>
  )
}

export default MyApp

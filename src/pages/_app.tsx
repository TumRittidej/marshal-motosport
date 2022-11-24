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
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import ScreenProvider from '@/contexts/ScreenProvider'
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    if (router.pathname === '/_error') {
      router.push('/')
    }
  }, [router])

  ConfigProvider.config({
    theme: {
      primaryColor: colors.primary,
    },
  })
  return (
    <ScreenProvider>
      <ConfigProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ConfigProvider>
    </ScreenProvider>
  )
}

export default appWithTranslation(MyApp)

import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Container from '@/components/container'
import User from '@/components/account/User'
import Address from '@/components/account/Address'
import Order from '@/components/account/Order'
import {
  MS_ACCOUNT_ADDRESS,
  MS_ACCOUNT_ORDER,
  MS_ACCOUNT_USER,
} from '@/constants/url'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'

const Account: FC = () => {
  const router = useRouter()
  const { params } = router.query

  const menusAccount = [
    {
      href: MS_ACCOUNT_USER,
      text: 'ข้อมูลส่วนตัว',
    },
    {
      href: MS_ACCOUNT_ADDRESS,
      text: 'ที่อยู่การจัดส่ง',
    },
    {
      href: MS_ACCOUNT_ORDER,
      text: 'รายการสั่งซื้อ',
    },
  ]

  return (
    <section className="xl:pt-44 md:pt-36 pt-15 bg-black">
      <div className="bg-2--position-y-5 xl:pt-20 pt-15 xl:pb-30 pb-25">
        <Container>
          <h1 className="xl:text-4xl md:text-3xl text-2xl text-center md:text-left text-primary font-semibold mb-8">
            บัญชีผู้ใช้
          </h1>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div className="w-full md:w-1/3">
              <div className="border border-white opacity-20 mb-8 w-3/4 hidden md:block" />
              <ul className="flex flex-row md:flex-col justify-center md:justify-start">
                {menusAccount.map((menu, index) => {
                  return (
                    <li key={index} className="mb-4 last:mb-4">
                      <Link href={menu.href}>
                        <a
                          className={`text-base hover:text-primary ${
                            router.asPath === menu.href
                              ? 'text-primary'
                              : 'text-white'
                          }`}
                        >
                          <span className="hidden md:block">- {menu.text}</span>
                          <div className="flex block md:hidden">
                            <span className="pl-2">{menu.text}</span>
                            <span className="ml-2 text-white">/</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="w-full md:w-2/3">
              {params === 'user' && <User />}
              {params === 'address' && <Address />}
              {params === 'order' && <Order />}
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['account', 'common'])),
    },
  }
}

export default Account

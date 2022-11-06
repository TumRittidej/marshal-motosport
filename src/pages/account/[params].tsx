import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { MinusOutlined } from '@ant-design/icons'

import Container from '@/components/container'
import User from '@/components/account/User'
import Address from '@/components/account/Address'
import Order from '@/components/account/Order'
import {
  MS_ACCOUNT_ADDRESS,
  MS_ACCOUNT_ORDER,
  MS_ACCOUNT_USER,
} from '@/constants/url'

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
    <section className="xl:pt-44 pt-36 bg-black">
      <div className="bg-2--position-y-5 xl:pt-20 pt-15 xl:pb-30 pb-25">
        <Container>
          <h1 className="xl:text-4xl text-3xl text-primary font-semibold mb-8">
            บัญชีผู้ใช้
          </h1>
          <div className="flex gap-12">
            <div className="w-1/3">
              <div className="border border-white opacity-20 mb-8 w-3/4" />
              <ul>
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
                          - {menu.text}
                        </a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="w-2/3">
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

export default Account

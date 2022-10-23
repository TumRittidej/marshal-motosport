import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { MinusOutlined } from '@ant-design/icons'

import Container from '@/components/container'
import User from '@/components/account/User'
import Address from '@/components/account/Address'
import Order from '@/components/account/Order'

const Account: FC = () => {
  const router = useRouter()
  const { params } = router.query

  const menusAccount = [
    {
      href: '/account/user',
      text: 'ข้อมูลส่วนตัว',
    },
    {
      href: '/account/address',
      text: 'ที่อยู่การจัดส่ง',
    },
    {
      href: '/account/order',
      text: 'รายการสั่งซื้อ',
    },
  ]

  return (
    <section className="pt-44 bg-black">
      <div className="bg-2--position-y-5 py-20">
        <Container>
          <h1 className="text-4xl text-primary font-semibold mb-8">
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
                          className={`text-base flex items-center gap-2 hover:text-primary ${
                            router.asPath === menu.href
                              ? 'text-primary'
                              : 'text-white'
                          }`}
                        >
                          <MinusOutlined style={{ fontSize: '10px' }} />
                          {menu.text}
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

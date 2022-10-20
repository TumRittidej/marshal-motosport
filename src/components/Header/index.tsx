import React, { FC, useState } from 'react'
import { Badge, Button, Form, Input } from 'antd'
import Search from 'antd/lib/input/Search'
import { useRouter } from 'next/router'

import Link from 'next/link'
import Image from 'next/image'

import LogoImage from '@/assets/logo.png'
import Container from '../container'

const Header: FC = () => {
  const [isOpenModal, setIsOpenModel] = useState(false)
  const onOpenModal = () => {
    setIsOpenModel(!isOpenModal)
  }
  const router = useRouter()

  const menus = [
    {
      href: '/',
      text: 'หน้าแรก',
    },
    {
      href: '/product',
      text: 'สินค้า',
    },
    {
      href: '#',
      text: 'สั่งซื้อและชำระเงิน',
    },
    {
      href: '/service',
      text: 'บริการ',
    },
    {
      href: '/news',
      text: 'ข่าวสารและกิจกรรม',
    },
    {
      href: '/knows-us',
      text: 'รู้จักเรา',
    },
    {
      href: '/#section-contact',
      text: 'ติดต่อ',
    },
  ]

  return (
    <div className="fixed inset-x-0 z-100">
      <div className="bg-primary">
        <Container>
          <div className="flex items-center justify-between h-14">
            <div className="flex gap-5">
              <div className="relative">
                <div
                  className="flex items-center gap-2 group cursor-pointer"
                  onClick={onOpenModal}
                >
                  <i className="icon-user text-xl" />
                  <h3 className="group-hover:underline">เข้าสู่ระบบ</h3>
                </div>
                <div
                  className={`absolute top-[42px] rounded bg-white w-70 z-101 p-4 transition duration-200 ${
                    isOpenModal
                      ? 'transform scale-100'
                      : 'transform scale-0 -translate-y-45 -translate-x-20'
                  }`}
                >
                  <h2 className="text-lg text-center">เข้าสู่ระบบ</h2>
                  <Form layout="vertical">
                    <Form.Item label="อีเมล">
                      <Input type="text" />
                    </Form.Item>
                    <Form.Item label="รหัสผ่าน">
                      <Input.Password type="text" />
                      <Link href="#">
                        <a target="_blank" className="underline text-gray-500">
                          <div className="text-right text-xs pt-2">
                            ลืมรหัสผ่าน?
                          </div>
                        </a>
                      </Link>
                    </Form.Item>
                    <Form.Item className="text-center pt-4">
                      <Button
                        htmlType="submit"
                        className="hover:text-primary bg-primary hover:bg-transparent duration-200 border border-primary w-full"
                      >
                        เข้าสู่ระบบ
                      </Button>
                    </Form.Item>
                  </Form>
                  <div className="relative py-4">
                    <div className="border" />
                    <div className="text-gray-500 absolute top-0 left-2/4 bg-white transform -translate-x-2/4 border p-1 w-8 rounded-full">
                      หรือ
                    </div>
                  </div>
                  <div className="py-2">
                    <Button
                      htmlType="submit"
                      className="text-white bg-blue-600 opacity-100 hover:opacity-90 duration-200 border border-blue-600 w-full"
                    >
                      เข้าสู่ระบบด้วย Facebook
                    </Button>
                  </div>
                  <div>
                    <Button
                      htmlType="submit"
                      className="text-white bg-red-500 opacity-100 hover:opacity-90 hover:bg- duration-200 border border-red-500 w-full"
                    >
                      เข้าสู่ระบบด้วย Google
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 text-center pt-3">
                    คุณไม่ได้เป็นสมาชิก?{' '}
                    <Link href="/register">
                      <a target="_blank" className="underline text-gray-700">
                        สมัครสมาชิก
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
              <Link href="/register">
                <a className="flex items-center gap-2 group">
                  <i className="icon-register text-black text-xl" />
                  <h3 className="group-hover:underline">สมัครสมาชิก</h3>
                </a>
              </Link>
            </div>
            <div className="flex gap-2">
              <Button
                type="text"
                className="flex items-center gap-2 button--focus"
              >
                <Badge count={0} showZero>
                  <i className="icon-cart text-xl text-black" />
                </Badge>
                <h3>ตระกร้าสินค้า</h3>
              </Button>
              <Link href="#">
                <a target="_blank" rel="noreferrer">
                  <i className="icon-facebook text-2xl text-black" />
                </a>
              </Link>
              <Link href="#">
                <a target="_blank" rel="noreferrer">
                  <i className="icon-instagram text-2xl text-black" />
                </a>
              </Link>
              <Link href="#">
                <a target="_blank" rel="noreferrer">
                  <i className="icon-youtube text-2xl text-black" />
                </a>
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-black py-4">
        <Container>
          <div className="flex justify-between items-center h-22">
            <Link href="/">
              <a className="w-1/5">
                <Image
                  src={LogoImage}
                  alt="Marshal motosport"
                  layout="responsive"
                />
              </a>
            </Link>
            <div className="flex gap-4">
              <ul className="flex items-center gap-4">
                {menus.map((menu, index) => {
                  return (
                    <li key={index}>
                      <Link href={menu.href}>
                        <a
                          className={`hover:text-primary ${
                            router.pathname === menu.href
                              ? 'text-primary'
                              : 'text-white'
                          }`}
                        >
                          {menu.text}
                        </a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
              <Search
                placeholder="Search..."
                enterButton
                bordered={false}
                className="max-w-50 search-input--text !border !border-solid !border-primary !bg-black !caret-white !rounded"
              />
              <Button
                type="text"
                className="text-white hover:text-primary !p-0"
              >
                TH
              </Button>
              <div className="text-white flex items-center">|</div>
              <Button
                type="text"
                className="text-white hover:text-primary !p-0"
              >
                EN
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Header

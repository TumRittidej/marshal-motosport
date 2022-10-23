import React, { FC, MouseEvent, useState } from 'react'
import { Badge, Button, Dropdown, Form, Input, Menu, Space } from 'antd'
import Search from 'antd/lib/input/Search'
import { CaretDownOutlined } from '@ant-design/icons'

import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import LogoImage from '@/assets/logo.png'
import Container from '../container'
import LoginModal from './component/LoginModal'
import DropdownHeader from './component/DropdownHeader'

const Header: FC = () => {
  const menusHeader = [
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
  const router = useRouter()
  const [isOpenModal, setIsOpenModel] = useState(false)
  const [rotate, setRotate] = useState(false)
  const [loginPass, setLoginPass] = useState(false)

  const onOpenModal = () => {
    setIsOpenModel(!isOpenModal)
  }

  const handleClickLogin = () => {
    setRotate(false)
    setLoginPass(true)
    setIsOpenModel(false)
  }

  // const menu = (
  //   <Menu
  //     className="pt-2 px-2 w-50 rounded dropdown--header dropdown--list"
  //     items={[
  //       {
  //         label: (
  //           <div onClick={() => setRotate(false)}>
  //             <Link href="/user">
  //               <a className="block text-base text-black hover:text-primary">
  //                 ข้อมูลส่วนตัว
  //               </a>
  //             </Link>
  //           </div>
  //         ),
  //         key: '0',
  //       },
  //       {
  //         label: (
  //           <div onClick={() => setRotate(false)}>
  //             <Link href="/">
  //               <a className="block text-base text-black hover:text-primary">
  //                 รายการสั่งซื้อ
  //               </a>
  //             </Link>
  //           </div>
  //         ),
  //         key: '1',
  //       },
  //       {
  //         type: 'divider',
  //       },
  //       {
  //         label: (
  //           <div
  //             className="flex items-center gap-2 text-black hover:text-primary transition duration-300"
  //             onClick={() => setLoginPass(false)}
  //           >
  //             <i className="icon-logout text-xl" />
  //             <p className="text-base">ออกจากระบบ</p>
  //           </div>
  //         ),
  //         key: '3',
  //       },
  //     ]}
  //   />
  // )

  const checkActiveMenu = (href: string) => {
    return router.asPath === href
  }
  return (
    <div className="fixed inset-x-0 z-100">
      <div
        className={`fixed inset-0 z-101 ${isOpenModal ? 'block' : 'hidden'}`}
        onClick={() => setIsOpenModel(false)}
      />
      <div className="bg-primary">
        <Container>
          <div className="flex items-center justify-between h-14">
            <div className="flex gap-5">
              <div className="relative">
                <div
                  className={`flex items-center gap-2 group cursor-pointer ${
                    loginPass ? 'hidden' : 'block'
                  }`}
                  onClick={onOpenModal}
                >
                  <i className="icon-user text-xl" />
                  <h3>เข้าสู่ระบบ</h3>
                </div>
                <DropdownHeader
                  className={`${!loginPass ? 'hidden' : 'block'}`}
                  handleClickLogout={() => setLoginPass(false)}
                  rotate={rotate}
                  setRotate={setRotate}
                />
                {/* <Dropdown
                  className={`${!loginPass ? 'hidden' : 'block'}`}
                  overlay={menu}
                  trigger={['click']}
                  onOpenChange={(open) => setRotate(open)}
                >
                  <a onClick={() => setRotate(!rotate)}>
                    <Space className="text-black">
                      <i className="icon-user text-xl" />
                      Developer
                      <CaretDownOutlined
                        className={`transform transition duration-300 ${
                          rotate ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    </Space>
                  </a>
                </Dropdown> */}
                <LoginModal
                  className={`absolute top-[42px] rounded bg-white w-70 z-102 p-4 transition duration-200 ${
                    isOpenModal
                      ? 'transform scale-100'
                      : 'transform scale-0 -translate-y-45 -translate-x-20'
                  }`}
                  onClick={handleClickLogin}
                />
              </div>
              <div className={`${loginPass ? 'hidden' : 'block'} `}>
                <Link href="/register">
                  <a className="flex items-center gap-2 group">
                    <i className="icon-register text-black text-xl" />
                    <h3 className="group-hover:underline">สมัครสมาชิก</h3>
                  </a>
                </Link>
              </div>
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
              <ul className="flex items-center gap-8">
                {menusHeader.map((menu, index) => {
                  return (
                    <li key={index}>
                      <Link href={menu.href}>
                        <a
                          className={`text-semibold text-lg hover:text-primary ${
                            checkActiveMenu(menu.href)
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

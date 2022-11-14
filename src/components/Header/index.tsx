import { FC, useEffect, useRef, useState } from 'react'
import { Badge, Button, Form } from 'antd'
import Search from 'antd/lib/input/Search'

import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import LogoImage from '@/assets/logo.png'
import Container from '../container'
import LoginModal from './component/LoginModal'
import DropdownHeader from './component/DropdownHeader'
import {
  MS_CART,
  MS_CONTACT,
  MS_FACRBOOK,
  MS_KNOWS_US,
  MS_NEWS,
  MS_PRODUCT,
  MS_PURCHASE,
  MS_REGISTER,
  MS_SERVICE,
} from '@/constants/url'

import { ILoginRequest } from '@/interface/login'
import Drawer from './component/Drawer'
import {
  MenuOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from '@ant-design/icons'

const Header: FC = () => {
  const menusHeader = [
    {
      href: '/',
      text: 'หน้าแรก',
    },
    {
      href: MS_PRODUCT,
      text: 'สินค้า',
    },
    {
      href: MS_PURCHASE,
      text: 'สั่งซื้อและชำระเงิน',
    },
    {
      href: MS_SERVICE,
      text: 'บริการ',
    },
    {
      href: MS_NEWS,
      text: 'ข่าวสารและกิจกรรม',
    },
    {
      href: MS_KNOWS_US,
      text: 'รู้จักเรา',
    },
    {
      href: MS_CONTACT,
      text: 'ติดต่อ',
    },
  ]
  const router = useRouter()
  const [isOpenModal, setIsOpenModel] = useState(false)
  const [rotate, setRotate] = useState(false)
  const [loginPass, setLoginPass] = useState(false)

  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)

  const [form] = Form.useForm<ILoginRequest>()

  const selectActiveMenu = (href: string) => {
    const { pathname } = router
    if (pathname === `${href}/[productId]`) {
      return true
    } else if (pathname === `${href}/[newsId]`) {
      return true
    } else if (pathname === href) {
      return true
    }
  }

  const onOpenModal = () => {
    setIsOpenModel(!isOpenModal)
    setIsOpenDrawer(false)
  }

  const handleSubmit = (value: ILoginRequest) => {
    setRotate(false)
    setLoginPass(true)
    setIsOpenModel(false)
    // console.log(value)
  }

  const handleOpenDrawer = () => {
    setIsOpenDrawer(true)
  }

  const handleShowSearch = () => {
    setShowSearch(true)
  }

  useEffect(() => {
    if (showSearch) {
      if (searchRef.current) {
        searchRef.current?.focus()
      }
    }
  }, [showSearch])

  return (
    <>
      <div className="fixed inset-x-0 z-100 md:block hidden">
        <div
          className={`fixed inset-0 z-101 ${isOpenModal ? 'block' : 'hidden'}`}
          onClick={() => setIsOpenModel(false)}
        />
        <div className="bg-primary">
          <Container paddingClassName="xl:px-0 px-0">
            <div className="flex items-center justify-between h-14">
              <div className="flex gap-5">
                <div className="relative">
                  <div
                    className={`flex items-center gap-2 group cursor-pointer group ${
                      loginPass ? 'hidden' : 'block'
                    }`}
                    onClick={onOpenModal}
                  >
                    <i className="icon-user text-xl" />
                    <h3 className="text-sm font-semibold group-hover:underline">
                      เข้าสู่ระบบ
                    </h3>
                  </div>
                  <DropdownHeader
                    className={`${!loginPass ? 'hidden' : 'block'}`}
                    handleClickLogout={() => setLoginPass(false)}
                    rotate={rotate}
                    setRotate={setRotate}
                  />
                  <LoginModal
                    isOpenModal={isOpenModal}
                    form={form}
                    handleSubmit={(value) => handleSubmit(value)}
                  />
                </div>
                <div className={`${loginPass ? 'hidden' : 'block'} `}>
                  <Link href={MS_REGISTER}>
                    <a className="flex items-center gap-2 group">
                      <i className="icon-register text-black text-xl" />
                      <h3 className="text-sm font-semibold group-hover:underline">
                        สมัครสมาชิก
                      </h3>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="flex gap-4">
                <Link href={MS_CART}>
                  <a className="flex items-center gap-2 pr-4">
                    <Badge count={0} showZero>
                      <ShoppingCartOutlined style={{ fontSize: '24px' }} />
                    </Badge>
                    <h3 className="text-sm font-semibold">ตระกร้าสินค้า</h3>
                  </a>
                </Link>
                <Link href={MS_FACRBOOK}>
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
        <div className="bg-black xl:py-4">
          <Container paddingClassName="xl:px-0 px-0">
            <div className="flex justify-between items-center h-22">
              <Link href="/">
                <a className="xl:w-1/5 w-1/6">
                  <Image
                    src={LogoImage}
                    alt="Marshal motosport"
                    layout="responsive"
                  />
                </a>
              </Link>
              <div className="flex xl:gap-4 gap-2">
                <ul className="flex items-center xl:gap-8 lg:gap-6 gap-4">
                  {menusHeader.map((menu, index) => {
                    return (
                      <li key={index}>
                        <Link href={menu.href}>
                          <a
                            className={`text-semibold xl:text-lg lg:text-base text-sm hover:text-primary ${
                              selectActiveMenu(menu.href)
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
                  className="xl:max-w-46 max-w-40 ml-1 h-[34px] search-input--text !border !border-solid !border-primary !bg-black !rounded"
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
      <div className="block md:hidden fixed bg-primary inset-x-0 z-120">
        <Container>
          <div className="flex items-center justify-between h-15 relative">
            <div className="flex gap-2">
              <button className="flex items-center" onClick={handleOpenDrawer}>
                <MenuOutlined style={{ fontSize: '26px' }} />
              </button>
              <div
                className={`w-[138px] absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 ${
                  showSearch ? 'hidden' : 'block'
                }`}
              >
                <Link href="/">
                  <a>
                    <Image
                      src={LogoImage}
                      alt="Marshal Motosport"
                      loading="lazy"
                      layout="responsive"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <SearchOutlined
                  style={{ fontSize: '20px' }}
                  onClick={handleShowSearch}
                />
                <input
                  ref={searchRef}
                  type="search"
                  className={`outline-none rounded-md transition-all duration-200 h-7 ${
                    showSearch ? 'w-50' : 'w-0'
                  }`}
                  onBlur={() => setShowSearch(false)}
                />
              </div>
              <Link href={MS_CART}>
                <a className="flex items-center gap-2 pr-4">
                  <Badge count={0} showZero>
                    <ShoppingCartOutlined style={{ fontSize: '26px' }} />
                  </Badge>
                </a>
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <Drawer
        setIsOpenDrawer={setIsOpenDrawer}
        isOpenDrawer={isOpenDrawer}
        onOpenModal={onOpenModal}
        loginPass={loginPass}
        handleClickLogout={() => setLoginPass(false)}
      />
      <LoginModal
        className={`md:hidden fixed w-screen h-screen bg-black z-200 sm:p-15 p-8 ${
          isOpenModal ? 'block' : 'hidden'
        }`}
        isOpenModal={isOpenModal}
        form={form}
        handleSubmit={(value) => handleSubmit(value)}
        handleCloseModal={() => setIsOpenModel(false)}
      />
    </>
  )
}

export default Header

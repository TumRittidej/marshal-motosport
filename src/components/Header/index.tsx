import { FC, useEffect, useRef, useState } from 'react'
import { Badge, Form } from 'antd'
import Search from 'antd/lib/input/Search'

import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import LogoImage from '@/assets/logo.png'
import Container from '@/components/container'
import LoginModal from '@/components/Header/component/LoginModal'
import DropdownHeader from '@/components/Header/component/DropdownHeader'
import Drawer from '@/components/Drawer'

import {
  MS_ACCOUNT_USER,
  MS_CART,
  MS_CONTACT,
  MS_FACRBOOK,
  MS_INSTAGRAM,
  MS_KNOWS_US,
  MS_LINE,
  MS_NEWS,
  MS_PRODUCT,
  MS_PURCHASE,
  MS_REGISTER,
  MS_SERVICE,
  MS_YOUTUBE,
} from '@/constants/url'

import { ILoginRequest } from '@/interface/login'
import {
  MenuOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import { Language } from '@/constants/language'

const Header: FC = () => {
  const { t } = useTranslation('common')
  // const menusHeader = [
  //   {
  //     href: '/',
  //     text: t('HOME'),
  //   },
  //   {
  //     href: MS_PRODUCT,
  //     text: t('PRODUCT'),
  //   },
  //   {
  //     href: MS_PURCHASE,
  //     text: t('PURCHASE'),
  //   },
  //   {
  //     href: MS_SERVICE,
  //     text: t('SERIVCE'),
  //   },
  //   {
  //     href: MS_NEWS,
  //     text: t('NEWS'),
  //   },
  //   {
  //     href: MS_KNOWS_US,
  //     text: t('KNOWN_US'),
  //   },
  //   {
  //     href: MS_CONTACT,
  //     text: t('CONTACT'),
  //   },
  // ]
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
  const { pathname, locale, asPath } = useRouter()

  const [isOpenModal, setIsOpenModel] = useState(false)
  const [rotate, setRotate] = useState(false)
  const [loginPass, setLoginPass] = useState(false)

  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)

  const [form] = Form.useForm<ILoginRequest>()

  const selectActiveMenu = (href: string) => {
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
                      {/* {t('LOGIN')} */}
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
                        {/* {t('REGISTER')} */}
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
                    <h3 className="text-sm font-semibold">
                      {/* {t('CART')} */}
                      ตระกร้าสินค้า
                    </h3>
                  </a>
                </Link>
                <Link href={MS_FACRBOOK}>
                  <a target="_blank" rel="noreferrer">
                    <i className="icon-facebook text-2xl text-black" />
                  </a>
                </Link>
                <Link href={MS_INSTAGRAM}>
                  <a target="_blank" rel="noreferrer">
                    <i className="icon-instagram text-2xl text-black" />
                  </a>
                </Link>
                <Link href={MS_YOUTUBE}>
                  <a target="_blank" rel="noreferrer">
                    <i className="icon-youtube text-2xl text-black" />
                  </a>
                </Link>
                <Link href={MS_LINE}>
                  <a target="_blank" rel="noreferrer">
                    <i className="icon-line text-2xl text-black" />
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
                    loading="lazy"
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
                <Link locale="th" href={asPath}>
                  <a
                    className={`hover:text-primary my-auto ${
                      locale === Language.TH ? 'text-primary' : 'text-white'
                    }`}
                  >
                    TH
                  </a>
                </Link>
                <div className="text-white flex items-center">|</div>
                <Link locale="en" href={asPath}>
                  <a
                    className={`hover:text-primary my-auto ${
                      locale === Language.EN ? 'text-primary' : 'text-white'
                    }`}
                  >
                    EN
                  </a>
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div className="block md:hidden fixed bg-primary inset-x-0 z-120">
        <Container>
          <div className="flex items-center justify-between h-15 relative">
            <div className="flex gap-2">
              <button
                className="flex items-center"
                onClick={(e) => {
                  setIsOpenDrawer(true), e.stopPropagation()
                }}
              >
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
      <Drawer setIsOpenDrawer={setIsOpenDrawer} isOpenDrawer={isOpenDrawer}>
        <ul className="flex flex-col gap-4 pt-10">
          {menusHeader.map((menu, index) => {
            return (
              <li key={index} onClick={() => setIsOpenDrawer(false)}>
                <Link href={menu.href}>
                  <a
                    className={`text-semibold text-lg hover:text-primary block ${
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
        <div className="border border-gray-500 opacity-80 my-6" />
        {loginPass ? (
          <>
            <Link href={MS_ACCOUNT_USER}>
              <a>
                <div
                  onClick={() => setIsOpenDrawer(false)}
                  className={`inline-flex items-center gap-4 group cursor-pointer group`}
                >
                  <i className="icon-user text-2xl text-white group-hover:text-primary transition duration-300" />
                  <h3 className="text-base font-semibold text-white group-hover:text-primary group-hover:underline transition duration-300">
                    Developer
                  </h3>
                </div>
              </a>
            </Link>
            <div className={`pt-2`} onClick={() => setLoginPass(false)}>
              <a className="inline-flex items-center gap-4 group">
                <i className="icon-logout text-white group-hover:text-primary text-2xl transition duration-300" />
                <h3 className="text-base font-semibold text-white group-hover:text-primary group-hover:underline transition duration-300">
                  ออกจากระบบ
                </h3>
              </a>
            </div>
          </>
        ) : (
          <>
            <div
              className={`inline-flex items-center gap-4 group cursor-pointer group`}
              onClick={onOpenModal}
            >
              <i className="icon-user text-2xl text-white group-hover:text-primary transition duration-300" />
              <h3 className="text-base font-semibold text-white group-hover:text-primary group-hover:underline transition duration-300">
                {/* {t('LOGIN')} */}
                เข้าสู่ระบบ
              </h3>
            </div>
            <div className={`pt-2`} onClick={() => setIsOpenDrawer(false)}>
              <Link href={MS_REGISTER}>
                <a className="inline-flex items-center gap-4 group">
                  <i className="icon-register text-white group-hover:text-primary text-2xl transition duration-300" />
                  <h3 className="text-base font-semibold text-white group-hover:text-primary group-hover:underline transition duration-300">
                    {/* {t('REGISTER')} */}
                    สมัครสมาชิก
                  </h3>
                </a>
              </Link>
            </div>
          </>
        )}
        <div className="text-white text-base flex gap-4 pt-4">
          <Link locale="th" href={asPath}>
            <a
              className={`text-white hover:text-primary transition duration-300 ${
                locale === Language.TH ? 'text-primary' : 'text-white'
              }`}
            >
              TH
            </a>
          </Link>
          |
          <Link locale="en" href={asPath}>
            <a
              className={`text-white hover:text-primary transition duration-300 ${
                locale === Language.EN ? 'text-primary' : 'text-white'
              }`}
            >
              EN
            </a>
          </Link>
        </div>
        <div className="border border-gray-500 opacity-80 my-6" />
        <Link href={MS_FACRBOOK}>
          <a target="_blank">
            <i className="icon-facebook text-white text-3xl" />
          </a>
        </Link>
        <Link href={MS_INSTAGRAM}>
          <a target="_blank" className="pl-4">
            <i className="icon-instagram text-white text-3xl" />
          </a>
        </Link>
        <Link href={MS_YOUTUBE}>
          <a target="_blank" className="pl-4">
            <i className="icon-youtube text-white text-3xl" />
          </a>
        </Link>
        <Link href={MS_LINE}>
          <a target="_blank" className="pl-4">
            <i className="icon-line text-white text-3xl" />
          </a>
        </Link>
      </Drawer>
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

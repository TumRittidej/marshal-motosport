import Image from 'next/image'
import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
} from 'react'
import LogoImage from '@/assets/logo.png'
import {
  MS_ACCOUNT_USER,
  MS_CONTACT,
  MS_FACRBOOK,
  MS_KNOWS_US,
  MS_NEWS,
  MS_PRODUCT,
  MS_PURCHASE,
  MS_REGISTER,
  MS_SERVICE,
} from '@/constants/url'
import Link from 'next/link'

interface IDrawerProps {
  children?: ReactNode
  isOpenDrawer: boolean
  setIsOpenDrawer: Dispatch<SetStateAction<boolean>>
  position?: `${Position}`
  onOpenModal?: () => void
  loginPass?: boolean
  handleClickLogout?: () => void
}

enum Position {
  TOP = 'top',
  BOTTOM = 'bottom',
  LEFT = 'left',
  RIGHT = 'right',
}

const Drawer: FC<IDrawerProps> = ({
  position = 'left',
  isOpenDrawer,
  setIsOpenDrawer,
  onOpenModal,
  loginPass,
  handleClickLogout,
}) => {
  const drawerRef = useRef<HTMLDivElement>(null)

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

  const renderDrawer = () => {
    if (!isOpenDrawer) {
      const positionDrawer = {
        [Position.TOP]: `left-0 right-0 -top-100 h-0`,
        [Position.BOTTOM]: `left-0 right-0 -bottom-100 h-0`,
        [Position.LEFT]: `-left-100 top-0 bottom-0 w-0`,
        [Position.RIGHT]: `-right-100 top-0 bottom-0 w-0`,
      }
      return positionDrawer[position]
    } else {
      const positionDrawer = {
        [Position.TOP]: `left-0 right-0 top-0 sm:h-100 h-full`,
        [Position.BOTTOM]: `left-0 right-0 bottom-0 sm:h-100 h-full`,
        [Position.LEFT]: `left-0 top-0 bottom-0 sm:w-100 w-full`,
        [Position.RIGHT]: `right-0 top-0 bottom-0 sm:w-100 w-full`,
      }
      return positionDrawer[position]
    }
  }

  useEffect(() => {
    const bodyEl = document.getElementsByTagName('body')[0]
    if (isOpenDrawer) {
      bodyEl.style.overflow = 'hidden'
    } else {
      bodyEl.style.overflow = 'auto'
    }
  }, [isOpenDrawer])

  return (
    <>
      <div
        className={`fixed bg-white opacity-10 z-1000 ${
          isOpenDrawer ? 'inset-0' : ''
        }`}
        onClick={() => setIsOpenDrawer(false)}
      />
      <div
        ref={drawerRef}
        className={`fixed bg-black z-10000 transition-all duration-300 ${renderDrawer()} p-8`}
      >
        <div className="flex items-center justify-between gap-2">
          <div className="w-1/2">
            <Image
              src={LogoImage}
              alt="Marshal Motosport"
              layout="responsive"
              loading="lazy"
            />
          </div>
          <button onClick={() => setIsOpenDrawer(false)}>
            <i className="icon-cross text-white text-xl" />
          </button>
        </div>
        <ul className="flex flex-col gap-4 pt-10">
          {menusHeader.map((menu, index) => {
            return (
              <li key={index} onClick={() => setIsOpenDrawer(false)}>
                <Link href={menu.href}>
                  <a
                    className={`text-semibold text-lg hover:text-primary text-white`}
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
                  className={`inline-flex items-center gap-4 group cursor-pointer group`}
                >
                  <i className="icon-user text-2xl text-white group-hover:text-primary transition duration-300" />
                  <h3 className="text-base font-semibold text-white group-hover:text-primary group-hover:underline transition duration-300">
                    Developer
                  </h3>
                </div>
              </a>
            </Link>
            <div className={`pt-2`} onClick={handleClickLogout}>
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
                เข้าสู่ระบบ
              </h3>
            </div>
            <div className={`pt-2`} onClick={() => setIsOpenDrawer(false)}>
              <Link href={MS_REGISTER}>
                <a className="inline-flex items-center gap-4 group">
                  <i className="icon-register text-white group-hover:text-primary text-2xl transition duration-300" />
                  <h3 className="text-base font-semibold text-white group-hover:text-primary group-hover:underline transition duration-300">
                    สมัครสมาชิก
                  </h3>
                </a>
              </Link>
            </div>
          </>
        )}
        <div className="text-white text-base flex gap-4 pt-4">
          <button className="hover:text-primary transition duration-300">
            TH
          </button>
          |
          <button className="hover:text-primary transition duration-300">
            EN
          </button>
        </div>
        <div className="border border-gray-500 opacity-80 my-6" />
        <Link href={MS_FACRBOOK}>
          <a target="_blank">
            <i className="icon-facebook text-white text-3xl" />
          </a>
        </Link>
        <Link href="#">
          <a target="_blank" className="pl-4">
            <i className="icon-instagram text-white text-3xl" />
          </a>
        </Link>
        <Link href="#">
          <a target="_blank" className="pl-4">
            <i className="icon-youtube text-white text-3xl" />
          </a>
        </Link>
      </div>
    </>
  )
}

export default Drawer

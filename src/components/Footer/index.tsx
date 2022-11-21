import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Container from '../container'
import LogoImage from '@/assets/logo.png'
import QrCodeImage from '@/assets/QR-Code.png'
import {
  MS_CONTACT,
  MS_KNOWS_US,
  MS_NEWS,
  MS_PRODUCT,
  MS_PURCHASE,
  MS_SERVICE,
} from '@/constants/url'

const Footer: FC = () => {
  const menusFooter = [
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
  return (
    <div className="bg-black pt-4">
      <Container paddingClassName="xl:px-0 px-0">
        <div className="md:flex flex-cols text-center md:text-left items-center justify-between border-b pb-4">
          <div className="xl:w-1/5 md:w-1/6 w-1/4 mx-auto md:mx-0 pb-4 md:pb-0">
            <Image
              src={LogoImage}
              layout="responsive"
              alt="Marshal Motosport"
              loading="lazy"
            />
          </div>
          <ul className="md:flex flex-cols xl:gap-16 lg:gap-12 gap-8 xl:text-lg text-base md:font-semibold font-regular">
            {menusFooter.map((menu, index) => {
              return (
                <li key={index} className="pb-4 md:pb-0">
                  <Link href={menu.href}>
                    <a className="text-white hover:text-primary">{menu.text}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="flex-cols md:flex items-center pt-6 md:pt-0">
          <ul className="text-white md:w-3/4 text-center md:text-left w-full">
            <li className="pb-6 flex-cols md:flex gap-5">
              <i className="icon-mark xl:text-3xl text-2xl" />
              <div>
                <p className="xl:text-xl md:text-lg text-base font-medium">
                  MARSHAL MOTOSPORT CO., LTD.
                </p>
                <p className="xl:text-lg md:text-base text-sm pt-1">
                  ที่อยู่: เลขที่ 65/3-4 ริมถนน ระหว่าง ซอยเอกชัย 82 และ 80/2
                  ถนนเอกชัย-บางบอน กรุงเทพฯ 10150
                </p>
              </div>
            </li>
            <li className="pb-6 flex-cols md:flex items-center gap-4">
              <i className="icon-telephone xl:text-2xl text-xl" />
              <p className="xl:text-xl md:text-lg text-base ">098 568 9828</p>
            </li>
            <li className="flex-cols md:flex items-center gap-4">
              <i className="icon-envelope xl:text-2xl text-xl" />
              <p className="xl:text-xl md:text-lg text-base ">
                chai@marshal-motosport.page
              </p>
            </li>
          </ul>
          <div className="md:w-1/4 md:py-12 md:pl-12 mx-auto w-52 p-6">
            <Image
              src={QrCodeImage}
              alt="Qr Code"
              layout="responsive"
              loading="lazy"
            />
          </div>
        </div>
        <p className="md:text-xs text-[10px] text-white font-light text-center pb-4">
          Copyright © 2022 | MARSHAL MOTOSPORT CO., LTD. All rights reserved.
          Designed by Belong-to
        </p>
      </Container>
    </div>
  )
}

export default Footer

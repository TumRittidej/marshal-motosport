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
    <div className="bg-black">
      <Container className="xl:px-0">
        <div className="flex items-center justify-between border-b">
          <div className="w-1/6">
            <Image
              src={LogoImage}
              layout="responsive"
              alt="Marshal Motosport"
            />
          </div>
          <ul className="flex gap-16 text-lg font-semibold">
            {menusFooter.map((menu, index) => {
              return (
                <li key={index}>
                  <Link href={menu.href}>
                    <a className="text-white hover:text-primary">{menu.text}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="flex items-center">
          <ul className="text-white w-3/4">
            <li className="pb-6 flex gap-5">
              <i className="icon-mark text-3xl" />
              <div>
                <p className="text-xl font-medium">
                  MARSHAL MOTOSPORT CO., LTD.
                </p>
                <p className="text-lg pt-1">
                  ที่อยู่: เลขที่ 65/3-4 ริมถนน ระหว่าง ซอยเอกชัย 82 และ 80/2
                  ถนนเอกชัย-บางบอน กรุงเทพฯ 10150
                </p>
              </div>
            </li>
            <li className="pb-6 flex items-center gap-4">
              <i className="icon-telephone text-2xl" />
              <p className="text-xl">098 568 9828</p>
            </li>
            <li className="flex items-center gap-4">
              <i className="icon-envelope text-2xl" />
              <p className="text-xl text-xl">chai@marshal-motosport.page</p>
            </li>
          </ul>
          <div className="w-1/4 py-12 pl-12">
            <Image src={QrCodeImage} alt="Qr Code" layout="responsive" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer

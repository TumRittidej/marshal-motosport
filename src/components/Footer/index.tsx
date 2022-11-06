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
        <div className="flex items-center justify-between border-b pb-4">
          <div className="xl:w-1/5 w-1/6">
            <Image
              src={LogoImage}
              layout="responsive"
              alt="Marshal Motosport"
            />
          </div>
          <ul className="flex xl:gap-16 gap-12 xl:text-lg text-base font-semibold">
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
              <i className="icon-mark xl:text-3xl text-2xl" />
              <div>
                <p className="xl:text-xl text-lg font-medium">
                  MARSHAL MOTOSPORT CO., LTD.
                </p>
                <p className="xl:text-lg text-base pt-1">
                  ที่อยู่: เลขที่ 65/3-4 ริมถนน ระหว่าง ซอยเอกชัย 82 และ 80/2
                  ถนนเอกชัย-บางบอน กรุงเทพฯ 10150
                </p>
              </div>
            </li>
            <li className="pb-6 flex items-center gap-4">
              <i className="icon-telephone xl:text-2xl text-xl" />
              <p className="xl:text-xl text-lg">098 568 9828</p>
            </li>
            <li className="flex items-center gap-4">
              <i className="icon-envelope xl:text-2xl text-xl" />
              <p className="xl:text-xl text-lg">chai@marshal-motosport.page</p>
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

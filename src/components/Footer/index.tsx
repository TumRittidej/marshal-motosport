import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Container from '../container'
import LogoImage from '@/assets/logo.png'
import QrCodeImage from '@/assets/QR-Code.png'

const Footer: FC = () => {
  return (
    <div className="bg-black">
      <Container>
        <div className="flex items-center justify-between border-b">
          <div className="w-1/6">
            <Image
              src={LogoImage}
              layout="responsive"
              alt="Marshal Motosport"
            />
          </div>
          <ul className="flex gap-16 text-lg font-semibold">
            <li>
              <Link href="/">
                <a className="text-white hover:text-primary">หน้าแรก</a>
              </Link>
            </li>
            <li>
              <Link href="/product">
                <a className="text-white hover:text-primary">สินค้า</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="text-white hover:text-primary">
                  สั่งซื้อและชำระเงิน
                </a>
              </Link>
            </li>
            <li>
              <Link href="/service">
                <a className="text-white hover:text-primary">บริการ</a>
              </Link>
            </li>
            <li>
              <Link href="/news">
                <a className="text-white hover:text-primary">
                  ข่าวสารและกิจกรรม
                </a>
              </Link>
            </li>
            <li>
              <Link href="/knows-us">
                <a className="text-white hover:text-primary">รู้จักเรา</a>
              </Link>
            </li>
            <li>
              <Link href="/#section-contact">
                <a className="text-white hover:text-primary">ติดต่อ</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <ul className="text-white w-3/4">
            <li className="pb-2 flex gap-2">
              <div className="pt-1">
                <i className="icon-mark text-xl" />
              </div>
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
            <li className="pb-2 flex items-center gap-2">
              <div>
                <i className="icon-telephone text-xl" />
              </div>
              <p className="text-xl">098 568 9828</p>
            </li>
            <li className="flex items-center gap-2">
              <div>
                <i className="icon-envelope text-xl" />
              </div>
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

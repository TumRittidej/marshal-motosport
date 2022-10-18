import React, { FC } from 'react'
import { Badge, Button } from 'antd'
import Search from 'antd/lib/input/Search'

import Link from 'next/link'
import Image from 'next/image'
import Container from '../container'
import LogoImage from '@/assets/logo.png'

const Header: FC = () => {
  return (
    <div className="fixed inset-x-0 z-100">
      <div className="bg-primary">
        <Container>
          <div className="flex items-center justify-between h-14">
            <div className="flex gap-5">
              <div className="flex items-center gap-2">
                <i className="icon-user text-xl" />
                <h3>เข้าสู่ระบบ</h3>
              </div>
              <div className="flex items-center gap-2">
                <i className="icon-register text-xl" />
                <h3>สมัครสมาชิก</h3>
              </div>
            </div>
            <div className="flex gap-2">
              <Button type="text" className="flex items-center gap-2">
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
              <a className="w-1/4">
                <Image
                  src={LogoImage}
                  alt="Marshal motosport"
                  layout="responsive"
                />
              </a>
            </Link>
            <div className="flex gap-4">
              <ul className="flex items-center gap-4">
                <li>
                  <Link href="/">
                    <a className="text-white hover:text-primary">หน้าแรก</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
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
                  <Link href="#">
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
                  <Link href="/know-us">
                    <a className="text-white hover:text-primary">รู้จักเรา</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#section-contact">
                    <a className="text-white hover:text-primary">ติดต่อ</a>
                  </Link>
                </li>
              </ul>
              <Search
                placeholder="Search..."
                enterButton
                bordered={false}
                className="max-w-50  !border !border-solid !border-primary !bg-black !caret-white !rounded"
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

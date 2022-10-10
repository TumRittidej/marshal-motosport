import React, { FC } from 'react'
import {
  UserOutlined,
  EditOutlined,
  ShoppingCartOutlined,
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from '@ant-design/icons'
import { Badge, Button } from 'antd'
import Link from 'next/link'
import Search from 'antd/lib/input/Search'
import Container from '../container'
import LogoImage from '@/assets/logo.png'
import Image from 'next/image'

const Header: FC = () => {
  return (
    <div className="fixed inset-0 z-100">
      <div className="bg-primary">
        <Container>
          <div className="flex items-center justify-between h-12">
            <div className="flex gap-5">
              <div className="flex items-center gap-2">
                <UserOutlined className="text-2xl" />
                <h3>เข้าสู่ระบบ</h3>
              </div>
              <div className="flex items-center gap-2">
                <EditOutlined className="text-2xl" />
                <h3>สมัครสมาชิก</h3>
              </div>
            </div>
            <div className="flex gap-2">
              <Button type="text" className="flex gap-2">
                <Badge count={0} showZero>
                  <ShoppingCartOutlined className="text-2xl text-black" />
                </Badge>
                <h3>ตระกร้าสินค้า</h3>
              </Button>
              <Link href="#">
                <a target="_blank" rel="noreferrer">
                  <FacebookOutlined className="text-2xl text-black" />
                </a>
              </Link>
              <Link href="#">
                <a target="_blank" rel="noreferrer">
                  <InstagramOutlined className="text-2xl text-black" />
                </a>
              </Link>
              <Link href="#">
                <a target="_blank" rel="noreferrer">
                  <YoutubeOutlined className="text-2xl text-black" />
                </a>
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-black">
        <Container>
          <div className="flex justify-between items-center h-24">
            <div className="w-1/4">
              <Image
                src={LogoImage}
                alt="Marshal motosport"
                layout="responsive"
              />
            </div>
            <div className="flex gap-4">
              <ul className="flex items-center gap-4">
                <li>
                  <Link href="#">
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
                  <Link href="#">
                    <a className="text-white hover:text-primary">
                      ข่าวสารและกิจกรรม
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="text-white hover:text-primary">รู้จักเรา</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="text-white hover:text-primary">ติดต่อ</a>
                  </Link>
                </li>
              </ul>
              <Search
                placeholder="Search..."
                enterButton
                bordered={false}
                className="w-50 !border !border-solid !border-primary !bg-black !caret-white !rounded"
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

import { Button, Dropdown, Menu, Space } from 'antd'
import { FC, useState } from 'react'
import { DownOutlined } from '@ant-design/icons'
import Image from 'next/image'
import ProductImage from '@/assets/img/home/product-1.png'

const Order: FC = () => {
  const [rotateArrow, setRotateArrow] = useState(false)
  const menu = (
    <Menu
      items={[
        {
          label: (
            <Button
              type="link"
              onClick={() => setRotateArrow(false)}
              className="text-black hover:text-primary w-full text-left p-0"
            >
              ล่าสุด
            </Button>
          ),
          key: '0',
        },
        {
          label: (
            <Button
              type="link"
              onClick={() => setRotateArrow(false)}
              className="text-black hover:text-primary w-full text-left p-0"
            >
              เก่าสุด
            </Button>
          ),
          key: '1',
        },
      ]}
    />
  )
  return (
    <>
      <h2 className="text-primary text-xl">รายการสั่งซื้อ</h2>
      <div className="text-right">
        <Dropdown
          overlay={menu}
          trigger={['click']}
          className="border border-white px-3 py-2 rounded"
          onOpenChange={(open) => setRotateArrow(open)}
        >
          <a
            onClick={() => setRotateArrow(!rotateArrow)}
            className="text-white text-base"
          >
            <Space>
              เรียงลำดับจาก
              <DownOutlined
                className={`text-xs transform transition duration-300 ${
                  rotateArrow ? 'rotate-180 -translate-y-1' : 'rotate-0'
                }`}
              />
            </Space>
          </a>
        </Dropdown>
      </div>
      <div>
        <div className="border border-white p-4 mb-4 mt-6 rounded-md">
          <div className="flex justify-between">
            <div className="text-white">
              <p className="font-semibold">
                หมายเลขสั่งซื้อ :<span className="text-primary"> MSD00001</span>{' '}
                <br />
              </p>
              <p>29/09/2022, 09:39</p>
            </div>
            <div className="text-white">
              <span className="text-primary text-xl font-medium block text-right">
                ฿ 79,600
              </span>
              <p className="text-base">
                สถานะการชำระเงิน{' '}
                <span className="text-primary">ยังไม่ชำระ</span>
              </p>
            </div>
          </div>
          <div className="flex overflow-hidden justify-between pt-4">
            <div className="flex gap-4 w-3/4 overflow-x-auto overflow-y-hidden h-[100px]">
              <div>
                <Image
                  height={100}
                  width={100}
                  src={ProductImage}
                  alt="Helmet"
                  layout="fixed"
                  // layout="responsive"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <div>
                <Image
                  height={100}
                  width={100}
                  src={ProductImage}
                  alt="Helmet"
                  layout="fixed"
                  // layout="responsive"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <div>
                <Image
                  height={100}
                  width={100}
                  src={ProductImage}
                  alt="Helmet"
                  layout="fixed"
                  // layout="responsive"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <div>
                <Image
                  height={100}
                  width={100}
                  src={ProductImage}
                  alt="Helmet"
                  layout="fixed"
                  // layout="responsive"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <div>
                <Image
                  height={100}
                  width={100}
                  src={ProductImage}
                  alt="Helmet"
                  layout="fixed"
                  // layout="responsive"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <div>
                <Image
                  height={100}
                  width={100}
                  src={ProductImage}
                  alt="Helmet"
                  layout="fixed"
                  // layout="responsive"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <div>
                <Image
                  height={100}
                  width={100}
                  src={ProductImage}
                  alt="Helmet"
                  layout="fixed"
                  // layout="responsive"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <div>
                <Image
                  height={100}
                  width={100}
                  src={ProductImage}
                  alt="Helmet"
                  layout="fixed"
                  // layout="responsive"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-1/5">
              <Button className="text-black hover:text-primary bg-primary hover:bg-transparent duration-200 border border-primary w-full">
                <div>สั่งซื้อสินค้า</div>
              </Button>
            </div>
          </div>
        </div>
        <div className="border border-white p-4 mb-4 mt-6 rounded-md">
          <div className="flex justify-between">
            <div className="text-white">
              <p className="font-semibold">
                หมายเลขสั่งซื้อ :<span className="text-primary"> MSD00001</span>{' '}
                <br />
              </p>
              <p>29/09/2022, 09:39</p>
            </div>
            <div className="text-white">
              <span className="text-primary text-xl font-medium block text-right">
                ฿ 79,600
              </span>
              <p className="text-base">
                สถานะการชำระเงิน <span className="font-semibold">ชำระแล้ว</span>
                <span className="px-2">|</span>
                <span className="text-primary">ยังไม่ชำระ</span>
              </p>
            </div>
          </div>
          <div className="flex overflow-hidden justify-between pt-4">
            <div className="flex gap-4 w-3/4 overflow-x-auto overflow-y-hidden h-[100px]">
              <div>
                <Image
                  height={100}
                  width={100}
                  src={ProductImage}
                  alt="Helmet"
                  layout="fixed"
                  // layout="responsive"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <div>
                <Image
                  height={100}
                  width={100}
                  src={ProductImage}
                  alt="Helmet"
                  layout="fixed"
                  // layout="responsive"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <div>
                <Image
                  height={100}
                  width={100}
                  src={ProductImage}
                  alt="Helmet"
                  layout="fixed"
                  // layout="responsive"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <div>
                <Image
                  height={100}
                  width={100}
                  src={ProductImage}
                  alt="Helmet"
                  layout="fixed"
                  // layout="responsive"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <div>
                <Image
                  height={100}
                  width={100}
                  src={ProductImage}
                  alt="Helmet"
                  layout="fixed"
                  // layout="responsive"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <div>
                <Image
                  height={100}
                  width={100}
                  src={ProductImage}
                  alt="Helmet"
                  layout="fixed"
                  // layout="responsive"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <div>
                <Image
                  height={100}
                  width={100}
                  src={ProductImage}
                  alt="Helmet"
                  layout="fixed"
                  // layout="responsive"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <div>
                <Image
                  height={100}
                  width={100}
                  src={ProductImage}
                  alt="Helmet"
                  layout="fixed"
                  // layout="responsive"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-1/5">
              <Button className="text-black hover:text-primary bg-primary hover:bg-transparent duration-200 border border-primary w-full">
                <div>สั่งซื้อสินค้า</div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Order

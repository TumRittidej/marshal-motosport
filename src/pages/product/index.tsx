import Container from '@/components/container'
import { Button, Dropdown, Menu, Space } from 'antd'
import React, { FC, useState } from 'react'
import { DownOutlined } from '@ant-design/icons'

import ProductImage1 from '@/assets/img/home/product-1.png'
import ProductImage2 from '@/assets/img/home/product-2.png'
import ProductImage3 from '@/assets/img/home/product-3.png'
import Link from 'next/link'
import Image from 'next/image'
import { MS_PRODUCT } from '@/constants/url'

const Product: FC = () => {
  const [rotateArrow, setRotateArrow] = useState(false)
  const menu = (
    <Menu
      items={[
        {
          label: (
            <ul
              onClick={() => setRotateArrow(false)}
              className="text-black hover:text-primary w-full text-left p-0"
            >
              <li>ล่าสุด</li>
            </ul>
          ),
          key: '0',
        },
        {
          label: (
            <ul
              onClick={() => setRotateArrow(false)}
              className="text-black hover:text-primary w-full text-left p-0"
            >
              <li>เก่าสุด</li>
            </ul>
          ),
          key: '1',
        },
      ]}
    />
  )
  const productItems = [
    {
      id: 1,
      image: ProductImage1,
      alternative: 'Helmet',
      paragraph: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 40,000',
    },
    {
      id: 2,
      image: ProductImage2,
      alternative: 'Helmet',
      paragraph: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 40,000',
    },
    {
      id: 3,
      image: ProductImage3,
      alternative: 'Helmet',
      paragraph: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 40,000',
    },
    {
      id: 4,
      image: ProductImage1,
      alternative: 'Helmet',
      paragraph: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 40,000',
    },
    {
      id: 5,
      image: ProductImage1,
      alternative: 'Helmet',
      paragraph: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 40,000',
    },
    {
      id: 6,
      image: ProductImage2,
      alternative: 'Helmet',
      paragraph: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 40,000',
    },
    {
      id: 7,
      image: ProductImage3,
      alternative: 'Helmet',
      paragraph: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 40,000',
    },
    {
      id: 8,
      image: ProductImage1,
      alternative: 'Helmet',
      paragraph: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 40,000',
    },
    {
      id: 9,
      image: ProductImage1,
      alternative: 'Helmet',
      paragraph: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 40,000',
    },
    {
      id: 10,
      image: ProductImage2,
      alternative: 'Helmet',
      paragraph: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 40,000',
    },
    {
      id: 11,
      image: ProductImage3,
      alternative: 'Helmet',
      paragraph: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 40,000',
    },
    {
      id: 12,
      image: ProductImage1,
      alternative: 'Helmet',
      paragraph: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 40,000',
    },
    {
      id: 13,
      image: ProductImage2,
      alternative: 'Helmet',
      paragraph: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 40,000',
    },
    {
      id: 14,
      image: ProductImage3,
      alternative: 'Helmet',
      paragraph: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 40,000',
    },
    {
      id: 15,
      image: ProductImage1,
      alternative: 'Helmet',
      paragraph: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 40,000',
    },
  ]

  return (
    <section className="pt-44 bg-black">
      <div className="bg-2--cover pt-20 pb-30">
        <Container>
          <div className="flex gap-12">
            <div className="w-1/4">
              <h3 className="text-lg text-primary font-medium">
                สินค้าทั้งหมด
              </h3>
              <div className="border border-white opacity-20 mt-2 mb-8 w-3/4" />
            </div>
            <div className="w-3/4">
              <h1 className="pb-15 text-4xl font-semibold text-primary text-center">
                สินค้า
              </h1>
              <div className="flex justify-between items-center">
                <h3 className="text-white text-lg">สินค้าทั้งหมด</h3>
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
                    <Space className="gap-8">
                      <p className="text-base">เรียงลำดับจาก</p>
                      <DownOutlined
                        className={`text-xs transform transition duration-300 ${
                          rotateArrow ? 'rotate-180 -translate-y-1' : 'rotate-0'
                        }`}
                      />
                    </Space>
                  </a>
                </Dropdown>
              </div>
              <div className="pt-8 grid grid-cols-3 gap-x-8 gap-y-6">
                {productItems.map((product, index) => {
                  return (
                    <div key={index} className="group cursor-pointer">
                      <Link href={`${MS_PRODUCT}/${product.id}`}>
                        <a>
                          <div className="relative">
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 z-1 transition duration-200" />
                            <Image
                              src={product.image}
                              alt={product.alternative}
                              layout="responsive"
                              loading="lazy"
                            />
                          </div>
                          <div className="text-primary text-center">
                            <p className="pt-4 text-lg">{product.paragraph}</p>
                            <span className="block py-2 text-xl font-bold">
                              {product.price}
                            </span>
                            <Button
                              icon={<i className="icon-cart text-xl" />}
                              className="text-black group-hover:text-primary bg-primary group-hover:bg-transparent duration-200 border border-primary min-w-45 inline-flex items-center justify-center gap-2"
                            >
                              <div>สั่งซื้อสินค้า</div>
                            </Button>
                          </div>
                        </a>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default Product

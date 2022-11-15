import Container from '@/components/container'
import { Button, Collapse, Dropdown, Menu, Pagination, Space } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import { DownOutlined } from '@ant-design/icons'

import ProductImage1 from '@/assets/img/home/product-1.png'
import ProductImage2 from '@/assets/img/home/product-2.png'
import ProductImage3 from '@/assets/img/home/product-3.png'
import Link from 'next/link'
import Image from 'next/image'
import { MS_PRODUCT } from '@/constants/url'
import { CaretRightOutlined } from '@ant-design/icons'

const Product: FC = () => {
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

  interface IProduct {
    category: string
    lists?: {
      name: string
    }[]
  }

  useEffect(() => {
    const products = [
      {
        category: 'ชุดแต่งมอเตอร์ไซต์ (199)',
        lists: [
          {
            name: 'ยาง',
          },
          {
            name: 'น้ำมันเครื่อง',
          },
          {
            name: 'โช้ค อัพ',
          },
        ],
      },
      {
        category: 'สินค้าขายดี (99)',
        lists: [
          {
            name: 'กระจก',
          },
          {
            name: 'ท่อ',
          },
          {
            name: 'ล้อ',
          },
        ],
      },
      {
        category: 'สินค้าโปรโมชั่น (12)',
        lists: [
          {
            name: 'ถุงมือ',
          },
          {
            name: 'หมวกกันน็อค',
          },
          {
            name: 'กรอบทะเบียน',
          },
        ],
      },
      {
        category: 'สินค้าขายดี',
      },
    ]
    setProducts(products)
  }, [])

  const [products, setProducts] = useState<IProduct[]>([])
  const [selectCategory, setSelectCategory] = useState<string[]>([])
  // const [selectProduct, setSelectProduct] = useState<any>([])

  const handleExpandCategory = (category: string) => {
    if (selectCategory.includes(category)) {
      const filter = selectCategory.filter((selectCategory) => selectCategory !== category)
      setSelectCategory(filter)
    } else {
      setSelectCategory(selectCategory.concat(category))
    }
  }

  return (
    <section className="xl:pt-44 md:pt-36 pt-15 bg-black">
      <div className="bg-2--cover xl:pt-20 pt-15 xl:pb-30 pb-25">
        <Container>
          <div className="flex gap-12">
            <div className="w-1/4">
              <h3 className="xl:text-lg text-base text-primary font-medium">
                สินค้าทั้งหมด
              </h3>
              <div className="border border-white opacity-20 mt-2 mb-4" />
              {products.map((product, index) => {
                return (
                  <div
                    key={index}
                    className={`xl:text-base text-sm overflow-hidden transition-all duration-300 mb-4 last:mb-0
                    ${selectCategory.includes(product.category)
                        ? 'max-h-[999px]'
                        : 'max-h-[22px]'
                      }
                    `}
                  >
                    <button
                      onClick={() => handleExpandCategory(product.category)}
                      className={`group
                      ${selectCategory.includes(product.category)
                          ? 'text-primary'
                          : 'text-white'
                        }
                      `}
                    >
                      <CaretRightOutlined
                        className={`transform group-hover:text-primary transition-all duration-300
                        ${selectCategory.includes(product.category) &&
                            product.lists
                            ? 'rotate-90'
                            : 'rotate-0'
                          }
                        `}
                      />
                      <span className="pl-2 group-hover:text-primary transition-all duration-300">
                        {product.category}
                      </span>
                    </button>
                    <ul className="pl-4 pt-2">
                      {product.lists?.map((list, index) => {
                        return (
                          <li
                            key={index}
                            className={`pb-2  hover:text-primary transition-all duration-300 cursor-pointer text-white`}
                          // onClick={() => handleFilterProduct()}
                          >
                            <CaretRightOutlined /> {list.name}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )
              })}
            </div>
            <div className="w-3/4">
              <h1 className="xl:pb-15 pb-10 xl:text-4xl text-3xl font-semibold text-primary text-center">
                สินค้า
              </h1>
              <div className="flex justify-between items-center">
                <h3 className="text-white xl:text-lg text-base">
                  สินค้าทั้งหมด
                </h3>
                <Dropdown
                  overlay={menu}
                  trigger={['click']}
                  className="border border-white xl:px-3 xl:py-2 px-2 py-1 rounded"
                  onOpenChange={(open) => setRotateArrow(open)}
                >
                  <a
                    onClick={() => setRotateArrow(!rotateArrow)}
                    className="text-white text-base"
                  >
                    <Space className="xl:gap-8 gap-6">
                      <p className="xl:text-base text-sm">เรียงลำดับจาก</p>
                      <DownOutlined
                        className={`text-xs transform transition duration-300 ${rotateArrow ? 'rotate-180 -translate-y-1' : 'rotate-0'
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
                            <p className="pt-4 xl:text-lg text-base">
                              {product.paragraph}
                            </p>
                            <span className="block py-2 xl:text-xl text-lg font-bold">
                              {product.price}
                            </span>
                            <Button
                              icon={
                                <i className="icon-cart xl:text-xl text-lg" />
                              }
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
              <Pagination
                size="small"
                total={70}
                showSizeChanger={false}
                pageSize={15}
                current={1}
                className="text-center mt-8"
                onChange={(e) => console.log(e)}
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default Product

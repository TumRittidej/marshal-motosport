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
const { Panel } = Collapse

import { RightOutlined, CaretRightOutlined } from '@ant-design/icons'
import { Tree } from 'antd'
import type { DataNode, DirectoryTreeProps } from 'antd/es/tree'
const { DirectoryTree } = Tree

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

  const collapseProducts = [
    {
      header: 'ชุดแต่งมอเตอร์ไซต์ (16)',
      products: ['ยาง', 'น้ำมันเครื่อง', 'โช้ค อัพ', 'หมวกกันน๊อค'],
    },
    {
      header: 'สินค้าใหม่ (19)',
      products: ['ใหม่', 'ใหม่'],
    },
  ]

  const treeData: DataNode[] = [
    {
      title: 'parent 0',
      key: '0-0',
      children: [
        { title: 'leaf 0-0', key: '0-0-0', isLeaf: true },
        { title: 'leaf 0-1', key: '0-0-1', isLeaf: true },
      ],
    },
    {
      title: 'parent 1',
      key: '0-1',
      children: [
        { title: 'leaf 1-0', key: '0-1-0', isLeaf: true },
        { title: 'leaf 1-1', key: '0-1-1', isLeaf: true },
      ],
    },
  ]

  const onExpand: DirectoryTreeProps['onExpand'] = (keys, info) => {
    console.log('Trigger Expand', keys, info)
  }
  const onSelect: DirectoryTreeProps['onSelect'] = (keys, info) => {
    console.log('Trigger Select', keys, info)
  }
  interface IProduct {
    categorys: number[]
    lists: {
      name: string
    }[]
  }
  const initialValue: IProduct[] = [
    {
      categorys: [],
      lists: [
        {
          name: '',
        },
      ],
    },
  ]
  const [activeIndexCategory, setActiveIndexCategory] = useState<number[]>([])
  // const [activeIndexProduct, setActiveIndexProduct] = useState<number[]>([])

  // const handleFilterProduct = (index: number) => {
  //   if (activeIndexProduct.includes(index)) {
  //     const filter = activeIndexProduct.filter((active) => active !== index)
  //     setActiveIndexProduct(filter)
  //   } else {
  //     setActiveIndexProduct(activeIndexProduct.concat(index))
  //   }
  // }

  const handleExpandCategory = (index: number) => {
    if (activeIndexCategory.includes(index)) {
      const filter = activeIndexCategory.filter((active) => active !== index)
      setActiveIndexCategory(filter)
      // setActiveIndexProduct([])
    } else {
      setActiveIndexCategory(activeIndexCategory.concat(index))
    }
  }

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

  return (
    <section className="pt-44 bg-black">
      <div className="bg-2--cover pt-20 pb-30">
        <Container>
          <div className="flex gap-12">
            <div className="w-1/4">
              <h3 className="text-lg text-primary font-medium">
                สินค้าทั้งหมด
              </h3>
              <div className="border border-white opacity-20 mt-2 mb-4" />
              {/* <Collapse ghost className="text--header-collapse">
                {collapseProducts.map(({ header, products }, index) => {
                  return (
                    <Panel key={index} header={header}>
                      {products.map((product, index) => {
                        return (
                          <div
                            key={index}
                            className="text-white pb-1 flex items-center gap-2 hover:text-primary transition duration-300 cursor-pointer"
                          >
                            <RightOutlined style={{ fontSize: '8px' }} />
                            <p>{product}</p>
                          </div>
                        )
                      })}
                    </Panel>
                  )
                })}
              </Collapse> */}
              {/* <div className="text-white"> */}
              {products.map((product, index) => {
                return (
                  <div
                    key={index}
                    className={`text-base overflow-hidden transition-all duration-300 mb-4 last:mb-0 ${
                      activeIndexCategory.includes(index)
                        ? 'max-h-[999px] '
                        : 'max-h-[22px]'
                    }`}
                  >
                    <button
                      onClick={() => handleExpandCategory(index)}
                      className={`group ${
                        activeIndexCategory.includes(index)
                          ? 'text-primary'
                          : 'text-white'
                      }`}
                    >
                      <CaretRightOutlined
                        className={`transform group-hover:text-primary transition-all duration-300 ${
                          activeIndexCategory.includes(index) && product.lists
                            ? 'rotate-90'
                            : 'rotate-0'
                        }`}
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
                            // onClick={() => handleFilterProduct(index)}
                          >
                            <CaretRightOutlined /> {list.name}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )
              })}
              {/* </div> */}
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

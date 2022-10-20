import { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRightOutlined,
  MinusOutlined,
  PlusOutlined,
} from '@ant-design/icons'
import { Button } from 'antd'
import Container from '@/components/container'
import ProductImage from '@/assets/img/home/product-1.png'

const Cart: FC = () => {
  const productInCart = [
    {
      image: ProductImage,
      name: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 15,900',
      amount: 1,
    },
    {
      image: ProductImage,
      name: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 15,900',
      amount: 5,
    },
    {
      image: ProductImage,
      name: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 15,900',
      amount: 7,
    },
    {
      image: ProductImage,
      name: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 15,900',
      amount: 2,
    },
    {
      image: ProductImage,
      name: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 15,900',
      amount: 16,
    },
  ]
  // const minusProduct = (index: number) => {

  // }

  // const plusProduct = (index: number) => {

  // }

  return (
    <section className="bg-black pt-44">
      <div className="bg-2--position-y-5 py-20">
        <Container>
          <div className="flex gap-6">
            <div className="w-1/2">
              <h1 className="pb-10 text-4xl font-semibold text-primary">
                ตระกร้าสินค้า
              </h1>
              {productInCart.map((product, index) => {
                return (
                  <div key={index}>
                    <div className="flex gap-6">
                      <div className="w-1/4">
                        <Image
                          src={product.image}
                          alt="Helmet"
                          layout="responsive"
                          loading="lazy"
                          objectFit="cover"
                        />
                      </div>
                      <div className="w-3/4">
                        <div className="flex flex-col h-full justify-between">
                          <h2 className="text-white text-lg">{product.name}</h2>
                          <div className="flex justify-between">
                            <span className="self-end text-white text-lg font-bold">
                              {product.price}
                            </span>
                            <div className="flex items-center gap-x-4 bg-white rounded">
                              <Button
                                className="border-none"
                                // onClick={() => plusProduct(index)}
                                icon={
                                  <PlusOutlined className="text-black font-bold" />
                                }
                              />
                              <span className="text-xl text-center w-12">
                                {product.amount}
                              </span>
                              <Button
                                // onClick={() => minusProduct(index)}
                                className="border-none"
                                icon={<MinusOutlined className="text-black" />}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border border-white opacity-20 my-8" />
                  </div>
                )
              })}
            </div>
            <div className="w-1/2">
              <div className="max-w-125 ml-auto bg-primary p-10 rounded">
                <h3 className="font-semibold text-2xl">สินค้าทั้งหมด</h3>
                <div className="border border-black opacity-20 my-4" />
                <div className="pb-5 text-base font-light flex justify-between">
                  <p>จำนวน</p>
                  <span>5</span>
                </div>
                <div className="pb-5 text-xl font-medium flex justify-between">
                  <p>จำนวนเงินทั้งหมด</p>
                  <span>฿ 79,500</span>
                </div>
                <Button
                  icon={<i className="icon-cart text-xl" />}
                  className="text-primary py-5 hover:text-black bg-black hover:bg-primary duration-200 border border-black w-full inline-flex items-center justify-center gap-2"
                >
                  <div>ชำระเงิน</div>
                </Button>
                <div className="text-center pt-6">
                  <Link href="/product">
                    <div>
                      <a
                        target="_blank"
                        className="underline underline-offset-6 text-black"
                      >
                        เลือกซื้อสินค้าต่อ <ArrowRightOutlined />
                      </a>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default Cart

import { FC } from 'react'
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
import { MS_PRODUCT, MS_PURCHASE } from '@/constants/url'

const Cart: FC = () => {
  const productInCart = [
    {
      image: ProductImage,
      name: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet) (AGV Helmet) AGV (AGV Helmet) (AGV Helmet) AGV (AGV Helmet)',
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
    <section className="bg-black xl:pt-44 lg:pt-36 pt-15">
      <div className="bg-2--position-y-5 xl:pt-20 pt-15 xl:pb-30 pb-25">
        <Container>
          <div className="flex gap-6">
            <div className="w-1/2">
              <h1 className="pb-10 xl:text-4xl text-3xl font-semibold text-primary">
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
                          <h2 className="text-white xl:text-lg text-base line-clamp-2">
                            {product.name}
                          </h2>
                          <div className="flex justify-between">
                            <span className="self-end text-white xl:text-lg text-base font-bold">
                              {product.price}
                            </span>
                            <div className="flex items-center gap-x-4 bg-white rounded">
                              <Button
                                className="border-none xl:h-8 xl:w-8 h-7"
                                // onClick={plusProduct}
                                icon={
                                  <PlusOutlined
                                    className="text-black"
                                    style={{ fontSize: '12px' }}
                                  />
                                }
                              />
                              <span className="text-base text-center xl:w-6 w-4">
                                {product.amount}
                              </span>
                              <Button
                                // onClick={minusProduct}
                                className="border-none xl:h-8 xl:w-8 h-7"
                                icon={
                                  <MinusOutlined
                                    className="text-black"
                                    style={{ fontSize: '12px' }}
                                  />
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border border-white opacity-20 xl:my-8 my-6" />
                  </div>
                )
              })}
            </div>
            <div className="w-1/2">
              <div className="max-w-125 ml-auto bg-primary xl:p-10 p-8 rounded">
                <h3 className="font-semibold xl:text-2xl text-xl">
                  สินค้าทั้งหมด
                </h3>
                <div className="border border-black opacity-20 my-4" />
                <div className="pb-5 text-base font-light flex justify-between">
                  <p>จำนวน</p>
                  <span>5</span>
                </div>
                <div className="pb-5 xl:text-xl text-lg font-medium flex justify-between">
                  <p>จำนวนเงินทั้งหมด</p>
                  <span>฿ 79,500</span>
                </div>
                <Button
                  href={MS_PURCHASE}
                  icon={<i className="icon-cart text-xl" />}
                  className="text-primary hover:text-black bg-black hover:bg-primary duration-200 border border-black w-full h-10 p-0 flex justify-center items-center gap-2"
                >
                  ชำระเงิน
                </Button>
                <div className="text-center pt-6">
                  <Link href={MS_PRODUCT}>
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

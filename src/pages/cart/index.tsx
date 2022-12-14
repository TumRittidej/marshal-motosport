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
import { MS_PRODUCT, MS_PURCHASE } from '@/constants/url'
import { CartType, IProductCart } from '@/interface/cart'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { I18NextNS } from '@/constants/i18next'

const COMMON_NS = I18NextNS.COMMON
const CART_NS = I18NextNS.CART

const Cart: FC = () => {
  const [productInCart, setProductInCart] = useState<IProductCart[]>([
    {
      id: 1,
      image: ProductImage,
      name: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet) (AGV Helmet) AGV (AGV Helmet) (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 15,900',
      amount: 1,
    },
    {
      id: 2,
      image: ProductImage,
      name: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 15,900',
      amount: 5,
    },
    {
      id: 3,
      image: ProductImage,
      name: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 15,900',
      amount: 7,
    },
    {
      id: 4,
      image: ProductImage,
      name: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 15,900',
      amount: 2,
    },
    {
      id: 5,
      image: ProductImage,
      name: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)',
      price: '฿ 15,900',
      amount: 16,
    },
  ])

  const addProduct = (product: IProductCart, type: string) => {
    const productByAmount = productInCart.map((p) => {
      if (p.id === product.id) {
        if (type === 'plus') {
          return { ...p, amount: product.amount + 1 }
        } else {
          return { ...p, amount: product.amount <= 0 ? 0 : product.amount - 1 }
        }
      }
      return p
    })
    setProductInCart(productByAmount)
  }

  const handleRemove = (product: IProductCart) => {
    // console.log('1', product)

    const filterProduct = productInCart.filter((p) => p.id !== product.id)
    setProductInCart(filterProduct)
  }

  return (
    <section className="bg-black xl:pt-44 md:pt-36 pt-15">
      <div className="bg-2--position-y-5 xl:pt-20 pt-15 xl:pb-30 pb-25">
        <Container>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <h1 className="pb-10 xl:text-4xl md:text-3xl text-2xl font-semibold text-primary">
                ตระกร้าสินค้า
              </h1>
              {productInCart.map((product, index) => {
                return (
                  <div key={index}>
                    <div className="flex gap-6">
                      <div className="sm:w-1/4 w-1/3">
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
                          <h2 className="text-white xl:text-lg sm:text-base text-sm text-ellipsis overflow-hidden line-clamp-2">
                            {product.name}
                          </h2>
                          <div className="flex justify-between">
                            <span className="self-end text-white xl:text-lg text-base font-bold">
                              {product.price}
                            </span>
                            <div className="flex md:gap-4 gap-2">
                              <div className="flex items-center md:gap-x-4 gap-x-2 bg-white sm:h-8 h-6">
                                <Button
                                  className="border-none sm:h-8 h-6"
                                  onClick={() =>
                                    addProduct(product, CartType.PLUS)
                                  }
                                  icon={
                                    <PlusOutlined
                                      className="text-black"
                                      style={{ fontSize: '12px' }}
                                    />
                                  }
                                />
                                <span className="text-base text-center">
                                  {product.amount}
                                </span>
                                <Button
                                  onClick={() =>
                                    addProduct(product, CartType.MINUS)
                                  }
                                  className="border-none sm:h-8 h-6"
                                  icon={
                                    <MinusOutlined
                                      className="text-black"
                                      style={{ fontSize: '12px' }}
                                    />
                                  }
                                />
                              </div>
                              <button
                                className="bg-primary sm:h-8 sm:w-8 h-6 w-6 flex items-center justify-center"
                                onClick={() => handleRemove(product)}
                              >
                                <i className="icon-cross md:text-base sm:text-sm text-[10px]" />
                              </button>
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
            <div className="w-full md:w-1/2">
              <div className="w-full md:max-w-125 ml-auto bg-primary xl:p-10 p-8 rounded">
                <h3 className="font-semibold xl:text-2xl md:text-xl text-lg">
                  สินค้าทั้งหมด
                </h3>
                <div className="border border-black opacity-20 my-4" />
                <div className="pb-5 text-base font-light flex justify-between">
                  <p>จำนวน</p>
                  <span>5</span>
                </div>
                <div className="pb-5 xl:text-xl sm:text-lg text-base font-medium flex justify-between">
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

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [CART_NS, COMMON_NS])),
    },
  }
}

export default Cart

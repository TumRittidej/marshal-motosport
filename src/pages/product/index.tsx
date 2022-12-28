import Container from '@/components/container'
import { Button, Dropdown, Menu, Pagination, Space } from 'antd'
import React, { FC, useContext, useState } from 'react'

import ProductImage1 from '@/assets/img/home/product-1.png'
import ProductImage2 from '@/assets/img/home/product-2.png'
import ProductImage3 from '@/assets/img/home/product-3.png'
import Link from 'next/link'
import Image from 'next/image'
import { MS_PRODUCT } from '@/constants/url'
import {
  CaretRightOutlined,
  LeftOutlined,
  DownOutlined,
} from '@ant-design/icons'
import { ScreenCtx } from '@/contexts/ScreenProvider'
import Drawer from '@/components/Drawer'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { I18NextNS } from '@/constants/i18next'
import { translateAndParseHTML } from '@/helpers/i18n'

const PRODUCT_NS = I18NextNS.PRODUCT
const COMMON_NS = I18NextNS.COMMON

const Product: FC = () => {
  const { t } = useTranslation([PRODUCT_NS, COMMON_NS])
  const { breakpoint } = useContext(ScreenCtx)!
  const [rotateArrow, setRotateArrow] = useState(false)
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
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
              {t('POPULAR')}
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
              {t('LATEST')}
            </Button>
          ),
          key: '1',
        },
        {
          label: (
            <Button
              type="link"
              onClick={() => setRotateArrow(false)}
              className="text-black hover:text-primary w-full text-left p-0"
            >
              {t('PROMOTION')}
            </Button>
          ),
          key: '2',
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

  const products = [
    {
      category: `${t('PRODUCT_ITEM_1')} (199)`,
      lists: [
        {
          id: 1,
          name: t('PRODUCT_ITEM_1_LIST_1'),
        },
        {
          id: 2,
          name: t('PRODUCT_ITEM_1_LIST_2'),
        },
        {
          id: 3,
          name: t('PRODUCT_ITEM_1_LIST_3'),
        },
        {
          id: 4,
          name: t('PRODUCT_ITEM_1_LIST_4'),
        },
        {
          id: 5,
          name: t('PRODUCT_ITEM_1_LIST_5'),
        },
        {
          id: 6,
          name: t('PRODUCT_ITEM_1_LIST_6'),
        },
        {
          id: 7,
          name: t('PRODUCT_ITEM_1_LIST_7'),
        },
        {
          id: 8,
          name: t('PRODUCT_ITEM_1_LIST_8'),
        },
      ],
    },
    {
      category: t('PRODUCT_ITEM_2'),
    },
    {
      category: t('PRODUCT_ITEM_3'),
    },
    {
      category: t('PRODUCT_ITEM_4'),
    },
  ]

  // const [product, setProduct] = useState(products)
  const [selectCategory, setSelectCategory] = useState<string>('')
  const [selectProduct, setSelectProduct] = useState<number>(-1)

  const handleExpandCategory = (category: string) => {
    setSelectCategory(category)
    if (selectCategory === category) setSelectCategory('')
    setSelectProduct(-1)
  }

  const handleFilterProduct = (id: number) => {
    // if (selectProduct.includes(id)) {
    //   const filter = selectProduct.filter(
    //     (selectProduct) => selectProduct !== id
    //   )
    //   setSelectProduct(filter)
    // } else {
    //   setSelectProduct(selectProduct.concat(id))
    // }
    setSelectProduct(id)
  }

  return (
    <section className="xl:pt-44 md:pt-36 pt-15 bg-black">
      <div className="bg-2--cover xl:pt-20 pt-15 xl:pb-30 pb-25">
        <Container>
          <div className="flex gap-12">
            <div className="w-1/4 md:block hidden">
              <h3 className="xl:text-lg text-base text-primary font-medium">
                {translateAndParseHTML(PRODUCT_NS, 'ALL_PRODUCT_PRI')}
              </h3>
              <div className="border border-white opacity-20 mt-2 mb-4" />
              {products.map((product, index) => {
                return (
                  <div
                    key={index}
                    className={`xl:text-base text-sm overflow-hidden transition-all duration-300 mb-4 last:mb-0
                    ${
                      selectCategory === product.category
                        ? 'max-h-[999px]'
                        : 'max-h-[22px]'
                    }
                    `}
                  >
                    <button
                      onClick={() => handleExpandCategory(product.category)}
                      className={`group
                      ${
                        selectCategory === product.category
                          ? 'text-primary'
                          : 'text-white'
                      }
                      `}
                    >
                      <span className="pl-2 group-hover:text-primary transition-all duration-300">
                        - {product.category}
                      </span>
                      {product.lists && product.lists?.length > 0 && (
                        <DownOutlined
                          className={`transform ml-2 text-xs group-hover:text-primary transition-all duration-300
                        ${
                          selectCategory === product.category && product.lists
                            ? 'rotate-180 -translate-y-1'
                            : 'rotate-0'
                        }
                        `}
                        />
                      )}
                    </button>
                    {product.lists && product.lists.length > 0 && (
                      <ul className="pl-4">
                        {product.lists?.map((list, index) => {
                          return (
                            <li
                              key={index}
                              className={`pb-2 first:pt-2 hover:text-primary transition-all duration-300 cursor-pointer text-white ${
                                selectProduct === list.id
                                  ? 'text-primary'
                                  : 'text-white'
                              }`}
                              onClick={() => handleFilterProduct(list.id)}
                            >
                              <CaretRightOutlined className="mr-2" />
                              {list.name}
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </div>
                )
              })}
            </div>
            <div className="md:w-3/4 w-full">
              <h1 className="xl:pb-15 pb-10 xl:text-4xl text-3xl font-semibold text-primary text-center">
                {translateAndParseHTML(PRODUCT_NS, 'TITLE')}
              </h1>
              <div className="flex justify-between items-center">
                {breakpoint === 'xl' ||
                breakpoint === 'lg' ||
                breakpoint === 'md' ? (
                  <h3 className="text-white xl:text-lg text-base">
                    {t('ALL_PRODUCT')}
                  </h3>
                ) : (
                  <button
                    className="border border-white rounded px-3 py-[6px]"
                    onClick={(e) => {
                      setIsOpenDrawer(true), e.stopPropagation()
                    }}
                  >
                    <h3 className="text-white xl:text-lg md:text-base text-sm">
                      <LeftOutlined
                        style={{ fontSize: '12px' }}
                        className="pr-2"
                      />
                      {t('ALL_PRODUCT')}
                    </h3>
                  </button>
                )}

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
                      <p className="xl:text-base text-sm">{t('SORT_BY')}</p>
                      <DownOutlined
                        className={`text-xs transform transition duration-300 ${
                          rotateArrow ? 'rotate-180 -translate-y-1' : 'rotate-0'
                        }`}
                      />
                    </Space>
                  </a>
                </Dropdown>
              </div>
              <div className="pt-8 grid sm:grid-cols-3 grid-cols-2 md:gap-x-8 md:gap-y-6 gap-4">
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
                            <p className="pt-4 xl:text-lg text-base text-ellipsis overflow-hidden line-clamp-2">
                              {product.paragraph}
                            </p>
                            <span className="block py-2 xl:text-xl text-lg font-bold">
                              {product.price}
                            </span>
                            <Button
                              icon={
                                <i className="icon-cart xl:text-xl text-lg" />
                              }
                              className="text-black group-hover:text-primary bg-primary group-hover:bg-transparent duration-200 border border-primary md:min-w-45 min-w-35 inline-flex items-center justify-center gap-2"
                            >
                              <div>{t(`${COMMON_NS}:ORDER_BTN`)}</div>
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
                // onChange={(e) => console.log(e)}
              />
            </div>
          </div>
        </Container>
      </div>
      <div className="md:hidden block">
        <Drawer isOpenDrawer={isOpenDrawer} setIsOpenDrawer={setIsOpenDrawer}>
          <div className="pt-8">
            <h3 className="text-white xl:text-lg text-base">
              {translateAndParseHTML(PRODUCT_NS, 'ALL_PRODUCT_PRI')}
            </h3>
            <div className="border border-white opacity-20 mt-2 mb-4" />
            {products.map((product, index) => {
              return (
                <div
                  key={index}
                  className={`xl:text-base text-sm overflow-hidden transition-all duration-300 mb-4 last:mb-0
                    ${
                      selectCategory === product.category
                        ? 'max-h-[999px]'
                        : 'max-h-[22px]'
                    }
                    `}
                >
                  <button
                    onClick={() => handleExpandCategory(product.category)}
                    className={`group
                      ${
                        selectCategory === product.category
                          ? 'text-primary'
                          : 'text-white'
                      }
                      `}
                  >
                    <span className="pl-2 group-hover:text-primary transition-all duration-300">
                      - {product.category}
                    </span>
                    {product.lists && product.lists?.length > 0 && (
                      <DownOutlined
                        className={`transform ml-2 text-xs group-hover:text-primary transition-all duration-300
                        ${
                          selectCategory === product.category && product.lists
                            ? 'rotate-180 -translate-y-1'
                            : 'rotate-0'
                        }
                        `}
                      />
                    )}
                  </button>
                  {product.lists && product.lists.length > 0 && (
                    <ul className="pl-4">
                      {product.lists?.map((list, index) => {
                        return (
                          <li
                            key={index}
                            className={`pb-2 first:pt-2 hover:text-primary transition-all duration-300 cursor-pointer text-white ${
                              selectProduct === list.id
                                ? 'text-primary'
                                : 'text-white'
                            }`}
                            onClick={() => handleFilterProduct(list.id)}
                          >
                            <CaretRightOutlined className="mr-2" />
                            {list.name}
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </div>
              )
            })}
          </div>
        </Drawer>
      </div>
    </section>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [PRODUCT_NS, COMMON_NS])),
    },
  }
}

export default Product

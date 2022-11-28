import { FC, useState } from 'react'
import ProductDetailImage1 from '@/assets/img/product/product-detail-1.png'
import ProductDetailImage2 from '@/assets/img/product/product-detail-2.png'
import ProductDetailImage3 from '@/assets/img/product/product-detail-3.png'
import ProductDetailImage4 from '@/assets/img/product/product-detail-4.png'
import Image, { StaticImageData } from 'next/image'
import Container from '@/components/container'
import { Button } from 'antd'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { MS_PURCHASE } from '@/constants/url'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'

const ProductDetail: FC = () => {
  const [amount, setAmount] = useState(1)
  const { query } = useRouter()
  console.log(query)

  const minusProduct = () => {
    if (amount <= 0) return
    const n = amount - 1
    setAmount(n)
  }

  const plusProduct = () => {
    const n = amount + 1
    setAmount(n)
  }

  const imageItems = [
    {
      image: ProductDetailImage1,
      alternative: 'Product',
    },
    {
      image: ProductDetailImage2,
      alternative: 'Product',
    },
    {
      image: ProductDetailImage3,
      alternative: 'Product',
    },
    {
      image: ProductDetailImage4,
      alternative: 'Product',
    },
  ]

  const [image, setImage] = useState<StaticImageData | string>(
    imageItems[0].image
  )
  const [selectImageIdx, setselectImageIdx] = useState(0)

  const handleClickImage = (image: StaticImageData, index: number) => {
    setselectImageIdx(index)
    setImage(image.src)
  }

  return (
    <section className="bg-black xl:pt-44 md:pt-36 pt-15">
      <div className="bg-2--position-y-5 xl:pt-20 pt-15 xl:pb-30 pb-25">
        <h1 className="xl:pb-15 pb-10 xl:text-4xl md:text-3xl text-2xl font-semibold text-primary text-center">
          สินค้า
        </h1>
        <Container>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-2/4 sm:w-3/5 w-full mx-auto md:mx-0">
              <div className="border-2 border-transparent">
                <Image
                  src={image}
                  alt="Product"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
              <div className="flex gap-2 pt-2">
                {imageItems.map((image, index) => {
                  return (
                    <div
                      key={index}
                      className={`w-1/4 cursor-pointer border-2 hover:border-2 hover:border-primary ${
                        selectImageIdx === index
                          ? 'border-primary'
                          : 'border-transparent'
                      }`}
                      onClick={() => handleClickImage(image.image, index)}
                    >
                      <Image
                        src={image.image}
                        alt={image.alternative}
                        layout="responsive"
                        loading="lazy"
                      />
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="md:w-2/4 sm:w-3/5 w-full mx-auto md:mx-0">
              <h2 className="text-primary xl:text-2xl text-xl">
                หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)
              </h2>
              <div className="flex items-center gap-4 pt-2">
                <p className="text-primary font-light xl:text-lg text-base">
                  ราคา
                </p>
                <span className="text-primary font-bold xl:text-xl text-lg">
                  ฿ 40,000
                </span>
              </div>
              <p className="text-white pt-4 xl:text-base text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                odio animi voluptates nihil quae. Repellendus quisquam optio
                natus excepturi deleniti quibusdam eum quia rem voluptatibus
                nihil laborum vitae, accusantium saepe. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Placeat odio animi voluptates
                nihil quae. Repellendus quisquam optio natus excepturi deleniti
                quibusdam eum quia rem voluptatibus nihil laborum vitae,
                accusantium saepe.
              </p>
              <div className="flex flex-col md:flex-row justify-between pt-15">
                <div className="flex items-center gap-8">
                  <span className="text-white font-light xl:text-lg text-base">
                    จำนวน
                  </span>
                  <div className="flex items-center xl:gap-x-4 gap-x-2 bg-white rounded">
                    <Button
                      className="border-none xl:h-8 xl:w-8 h-7"
                      onClick={plusProduct}
                      icon={
                        <PlusOutlined
                          className="text-black"
                          style={{ fontSize: '12px' }}
                        />
                      }
                    />
                    <span className="text-base text-center xl:w-6 w-4">
                      {amount}
                    </span>
                    <Button
                      onClick={minusProduct}
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
                <div className="pt-4">
                  <div className="mb-4">
                    <Button
                      icon={<PlusOutlined />}
                      className="text-primary hover:text-black bg-transparent hover:bg-primary duration-200 border border-primary md:min-w-45 w-full"
                    >
                      เพิ่มลงตระกร้า
                    </Button>
                  </div>
                  <div>
                    <Button
                      href={MS_PURCHASE}
                      icon={<i className="icon-cart text-xl" />}
                      className="text-black hover:text-primary bg-primary hover:bg-transparent duration-200 border border-primary min-w-45 flex justify-center gap-2"
                    >
                      สั่งซื้อสินค้า
                    </Button>
                  </div>
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
      ...(await serverSideTranslations(locale!, ['product', 'common'])),
    },
  }
}

export default ProductDetail

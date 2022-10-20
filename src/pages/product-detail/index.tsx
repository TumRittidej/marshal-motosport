import { FC, useState } from 'react'
import ProductImage1 from '@/assets/img/home/product-1.png'
import ProductImage2 from '@/assets/img/home/product-2.png'
import ProductImage3 from '@/assets/img/home/product-3.png'
import Image, { StaticImageData } from 'next/image'
import Container from '@/components/container'
import { Button } from 'antd'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'

const ProductDetail: FC = () => {
  const [amount, setAmount] = useState(1)

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
      image: ProductImage1,
      alternative: 'Product',
    },
    {
      image: ProductImage2,
      alternative: 'Product',
    },
    {
      image: ProductImage3,
      alternative: 'Product',
    },
    {
      image: ProductImage2,
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
    <section className="bg-black pt-44">
      <div className="bg-2--position-y-5 pb-40">
        <h1 className="pt-20 pb-10 text-4xl font-semibold text-primary text-center">
          สินค้า
        </h1>
        <Container>
          <div className="flex gap-10">
            <div className="w-2/4">
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
                      />
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="w-2/4">
              <h2 className="text-primary text-2xl">
                หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet)
              </h2>
              <div className="flex gap-4 pt-2">
                <p className="text-primary font-light text-lg">ราคา</p>
                <span className="text-primary font-bold text-xl">฿ 40,000</span>
              </div>
              <p className="text-white pt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                odio animi voluptates nihil quae. Repellendus quisquam optio
                natus excepturi deleniti quibusdam eum quia rem voluptatibus
                nihil laborum vitae, accusantium saepe. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Placeat odio animi voluptates
                nihil quae. Repellendus quisquam optio natus excepturi deleniti
                quibusdam eum quia rem voluptatibus nihil laborum vitae,
                accusantium saepe.
              </p>
              <div className="flex justify-between pt-15">
                <div className="flex items-center gap-8">
                  <span className="text-white font-light text-lg">จำนวน</span>
                  <div className="flex items-center gap-x-4 bg-white rounded">
                    <Button
                      className="border-none"
                      onClick={plusProduct}
                      icon={<PlusOutlined className="text-black" />}
                    />
                    <span className="text-xl text-center w-12">{amount}</span>
                    <Button
                      onClick={minusProduct}
                      className="border-none"
                      icon={<MinusOutlined className="text-black" />}
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <Button
                      icon={<PlusOutlined />}
                      className="text-primary hover:text-black bg-transparent hover:bg-primary duration-200 border border-primary min-w-45"
                    >
                      เพิ่มลงตระกร้า
                    </Button>
                  </div>
                  <div>
                    <Button
                      icon={<i className="icon-cart text-xl" />}
                      className="text-black hover:text-primary bg-primary hover:bg-transparent duration-200 border border-primary min-w-45 inline-flex items-center justify-center gap-2"
                    >
                      <div>สั่งซื้อสินค้า</div>
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

export default ProductDetail

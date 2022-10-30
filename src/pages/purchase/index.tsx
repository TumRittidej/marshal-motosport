import { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRightOutlined,
  MinusOutlined,
  PlusOutlined,
} from '@ant-design/icons'
import { Button, Steps } from 'antd'
import Container from '@/components/container'
import ProductImage from '@/assets/img/home/product-1.png'
import { MS_PRODUCT, MS_PURCHASE } from '@/constants/url'
import Derivery from '@/components/purchase/Derivery'
import Payment from '@/components/purchase/Payment'
import Finish from '@/components/purchase/Finish'
const { Step } = Steps

const Purchase: FC = () => {
  const [step, setStep] = useState(0)
  const productInCart = [
    {
      image: ProductImage,
      name: 'หมวกกันน็อค AGV (AGV Helmet) AGV (AGV Helmet) sdad sad sad asd sad asd adsddasd sadasdsa sadsa d asd as d asd asdada sd adas d asd a s',
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
              <Steps current={step} labelPlacement="vertical">
                <Step title="การจัดส่ง" />
                <Step title="การชำระเงิน" />
                <Step title="สำเร็จ" />
              </Steps>
              <div className="border border-white opacity-20 mt-6" />
              {step === 0 && <Derivery setStep={setStep} />}
              {step === 1 && <Payment setStep={setStep} />}
              {step === 2 && <Finish setStep={setStep} />}
            </div>
            <div className="w-1/2">
              <div className="max-w-125 ml-auto bg-primary p-10 rounded">
                <h3 className="font-semibold text-2xl">สรุปคำสั่งซื้อ</h3>
                <div className="border border-black opacity-20 my-4" />
                <div className="h-[600px] pr-2 overflow-auto">
                  {productInCart.map((product, index) => {
                    return (
                      <div key={index} className="pb-4 last:pb-0">
                        <div className="flex gap-4">
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
                            <div className="flex flex-col h-full justify-between text-base">
                              <div className="flex gap-2 justify-between">
                                <h2 className="line-clamp-2">{product.name}</h2>
                                <Button type="link" className="p-0 !h-[10px]">
                                  <i className="icon-cross text-xs text-black" />
                                </Button>
                              </div>
                              <div className="flex justify-between">
                                <span className="self-end">
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
                                  <span className="text-xl text-center w-6">
                                    {product.amount}
                                  </span>
                                  <Button
                                    // onClick={() => minusProduct(index)}
                                    className="border-none"
                                    icon={
                                      <MinusOutlined className="text-black" />
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="border border-black opacity-20 my-4" />
                <div className="pt-8">
                  <div className="flex justify-between items-center font-light">
                    <p className="text-base">จำนวน</p>
                    <span className="text-lg">5</span>
                  </div>
                  <div className="flex justify-between items-center font-medium text-lg pt-2">
                    <p>ยอดรวม</p>
                    <span>฿ 79,500</span>
                  </div>
                  <div className="flex justify-between items-center font-medium text-lg pt-2">
                    <p>
                      การจัดส่ง{' '}
                      <span className="font-light">/ ไปรษณีย์ไทย - EMS</span>
                    </p>
                    <span>฿ 100</span>
                  </div>
                  <div className="flex justify-between items-center font-medium text-xl pt-5">
                    <p>ยอดชำระเงินทั้งหมด</p>
                    <span>฿ 79,600</span>
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

export default Purchase

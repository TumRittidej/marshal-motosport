import { FC, useState } from 'react'
import Image from 'next/image'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Form, Steps } from 'antd'
import Container from '@/components/container'
import ProductImage from '@/assets/img/home/product-1.png'
import Deliver from '@/components/purchase/Deliver'
import Payment from '@/components/purchase/Payment'
import Finish from '@/components/purchase/Finish'
const { Step } = Steps

const Purchase: FC = () => {
  const [step, setStep] = useState(0)
  const [form] = Form.useForm<{ firstName: string; deliverType: string }>()
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
  const onSubmit = (value: any) => {
    const body = form.getFieldsValue()
    console.log('body', body)

    console.log(value)
  }
  return (
    <section className="bg-black xl:pt-44 md:pt-36 pt-15">
      <div className="bg-2--position-y-5 xl:pt-20 pt-15 xl:pb-30 pb-25">
        <Container>
          <div className="flex gap-6">
            <div className="w-1/2">
              <Steps current={step} labelPlacement="vertical">
                <Step title="การจัดส่ง" />
                <Step title="การชำระเงิน" />
                <Step title="สำเร็จ" />
              </Steps>
              <div className="border border-white opacity-20 mt-6" />
              <Form
                layout="vertical"
                className="pt-2"
                form={form}
                initialValues={{ firstName: 'tum', deliverType: 1 }}
                onFinish={onSubmit}
                autoComplete="off"
              >
                <div className={`${step === 0 ? 'block' : 'hidden'}`}>
                  <Deliver setStep={setStep} form={form} />
                </div>
                <div className={`${step === 1 ? 'block' : 'hidden'}`}>
                  <Payment setStep={setStep} form={form} />
                </div>
              </Form>
              {step === 2 && <Finish setStep={setStep} />}
            </div>
            <div className="w-1/2">
              <div className="max-w-125 ml-auto bg-primary p-10 rounded">
                <h3 className="font-semibold xl:text-2xl text-xl">
                  สรุปคำสั่งซื้อ
                </h3>
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
                            <div className="flex flex-col h-full justify-between xl:text-base text-sm">
                              <div className="flex gap-2 justify-between">
                                <h2 className="line-clamp-2">{product.name}</h2>
                                <Button type="link" className="p-0 !h-[10px]">
                                  <i className="icon-cross xl:text-xs text-[10px] text-black" />
                                </Button>
                              </div>
                              <div className="flex justify-between">
                                <span className="self-end">
                                  {product.price}
                                </span>
                                <div className="flex items-center xl:gap-x-4 gap-x-2 bg-white rounded">
                                  <Button
                                    className="border-none xl:h-8 xl:w-8 h-7"
                                    // onClick={() => plusProduct(index)}
                                    icon={
                                      <PlusOutlined
                                        className="text-black"
                                        style={{ fontSize: '12px' }}
                                      />
                                    }
                                  />
                                  <span className="xl:text-base text-sm text-center xl:w-6 w-4">
                                    {product.amount}
                                  </span>
                                  <Button
                                    // onClick={() => minusProduct(index)}
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
                      </div>
                    )
                  })}
                </div>
                <div className="border border-black opacity-20 my-4" />
                <div className="xl:pt-6 pt-4">
                  <div className="flex justify-between items-center font-light">
                    <p className="xl:text-base text-sm">จำนวน</p>
                    <span className="xl:text-lg text-base">5</span>
                  </div>
                  <div className="flex justify-between items-center font-medium xl:text-lg text-base pt-2">
                    <p>ยอดรวม</p>
                    <span>฿ 79,500</span>
                  </div>
                  <div className="flex justify-between items-center font-medium xl:text-lg text-base pt-2">
                    <p>
                      การจัดส่ง{' '}
                      <span className="font-light">/ ไปรษณีย์ไทย - EMS</span>
                    </p>
                    <span>฿ 100</span>
                  </div>
                  <div className="flex justify-between items-center font-medium xl:text-lg text-base pt-5">
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

import { FC, useState } from 'react'
import Image from 'next/image'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Form, Steps } from 'antd'
import Container from '@/components/container'
import ProductImage from '@/assets/img/home/product-1.png'
import Deliver from '@/components/purchase/Deliver'
import Payment from '@/components/purchase/Payment'
import Finish from '@/components/purchase/Finish'
import { IPurchase } from '@/interface/purchase'
import { DeliveryType, PaymentType } from '@/constants/purchase'
import { CartType, IProductCart } from '@/interface/cart'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Purchase: FC = () => {
  const [step, setStep] = useState(0)
  const [form] = Form.useForm<IPurchase>()

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
    const filterProduct = productInCart.filter((p) => p.id !== product.id)
    setProductInCart(filterProduct)
  }

  const onSubmit = (value: IPurchase) => {
    if (value.deliveryType !== DeliveryType.AT_STORE) {
      delete value.timeReceiveAtStore
      delete value.dateReceiveAtStore
    } else if (value.deliveryType === DeliveryType.AT_STORE) {
      delete value.deliveryValue
    }
    if (value.paymentType === PaymentType.BANK) {
      delete value.cardHolderName
      delete value.cardNumber
      delete value.cvv
      delete value.expirationDate
    }
    // const body = form.getFieldsValue()
    // console.log('value', value)
  }
  return (
    <section className="bg-black xl:pt-44 md:pt-36 pt-15">
      <div className="bg-2--position-y-5 xl:pt-20 pt-15 xl:pb-30 pb-25">
        <Container>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <div>
                <Steps
                  responsive={false}
                  direction="horizontal"
                  current={step}
                  items={[
                    { title: 'การจัดส่ง' },
                    { title: 'การชำระเงิน' },
                    { title: 'สำเร็จ' },
                  ]}
                  labelPlacement="vertical"
                />
              </div>
              <div className="border border-white opacity-20 mt-6" />
              <Form
                layout="vertical"
                initialValues={{ deliveryType: DeliveryType.DOMESTIC }}
                className="pt-2"
                form={form}
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
              <div className={`${step === 2 ? 'block' : 'hidden'}`}>
                <Finish setStep={setStep} />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="mx-auto max-w-125 md:ml-auto bg-primary md:p-10 p-6 rounded">
                <h3 className="font-semibold xl:text-2xl text-xl">
                  สรุปคำสั่งซื้อ
                </h3>
                <div className="border border-black opacity-20 my-4" />
                <div className="sm:h-150 h-120 pr-2 overflow-auto">
                  {productInCart.map((product, index) => {
                    return (
                      <div key={index} className="pb-4 last:pb-0">
                        <div className="flex gap-4">
                          <div className="w-1/3 md:w-1/4">
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
                                <h2 className="text-ellipsis overflow-hidden line-clamp-2">
                                  {product.name}
                                </h2>
                                <button
                                  className="p-0 self-start"
                                  onClick={() => handleRemove(product)}
                                >
                                  <i className="icon-cross xl:text-xs text-[10px] text-black" />
                                </button>
                              </div>
                              <div className="flex justify-between">
                                <span className="self-end">
                                  {product.price}
                                </span>
                                <div className="flex items-center xl:gap-x-4 gap-x-2 bg-white rounded h-6 md:h-7">
                                  <Button
                                    className="border-none h-6 md:h-7"
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
                                  <span className="xl:text-base text-sm text-center">
                                    {product.amount}
                                  </span>
                                  <Button
                                    onClick={() =>
                                      addProduct(product, CartType.MINUS)
                                    }
                                    className="border-none h-6 md:h-7"
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

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['purchase', 'common'])),
    },
  }
}

export default Purchase

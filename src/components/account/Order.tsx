import { FC, MouseEvent, ReactNode, useContext, useState } from 'react'
import Image from 'next/image'

import { Button, Col, Dropdown, Menu, Space, Steps } from 'antd'
import { DownOutlined } from '@ant-design/icons'
const { Step } = Steps

import ProductImage from '@/assets/img/home/product-1.png'
import { CheckCircleOutlined } from '@ant-design/icons'
import PurchaseModal from '../PurchaseModal'
import { ScreenCtx } from '@/contexts/ScreenProvider'

const Order: FC = () => {
  const { windowWidth } = useContext(ScreenCtx)!
  const [rotateArrowDropDown, setRotateArrowDropDown] = useState(false)
  const [rotateArrowMoreBtn, setRotateArrowMoreBtn] = useState(false)
  // const [stepStatus, setStepStatus] = useState(0)

  const [isOpenModal, setIsOpenModal] = useState(false)

  const menu = (
    <Menu
      items={[
        {
          label: (
            <Button
              type="link"
              onClick={() => setRotateArrowDropDown(false)}
              className="text-black hover:text-primary w-full xl:text-base text-sm text-left p-0"
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
              onClick={() => setRotateArrowDropDown(false)}
              className="text-black hover:text-primary w-full xl:text-base text-sm text-left p-0"
            >
              เก่าสุด
            </Button>
          ),
          key: '1',
        },
      ]}
    />
  )

  const steps = [
    {
      title: 'ทำรายการ',
    },
    {
      title: 'รอชำระเงิน',
    },
    {
      title: 'รอจัดส่ง',
    },
    {
      title: 'กำลังจัดส่ง',
    },
    {
      title: 'สำเร็จ',
    },
  ]

  const handleOpenModal = () => {
    setIsOpenModal(true)
  }
  const handleSubmit = (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
    // console.log(e)

    setIsOpenModal(false)
  }

  const handleCancel = (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
    setIsOpenModal(false)
  }

  const orders = [
    {
      number: 'MSD00001',
      date: '29/09/2022, 09:39',
      totalPrice: '79,600',
      status: 'ยังไม่ชำระ',
      products: [
        {
          image: ProductImage,
          alternative: 'Helmet',
        },
        {
          image: ProductImage,
          alternative: 'Helmet',
        },
        {
          image: ProductImage,
          alternative: 'Helmet',
        },
        {
          image: ProductImage,
          alternative: 'Helmet',
        },
        {
          image: ProductImage,
          alternative: 'Helmet',
        },
        {
          image: ProductImage,
          alternative: 'Helmet',
        },
        {
          image: ProductImage,
          alternative: 'Helmet',
        },
      ],
      name: 'รุ่งเรือง เกียงไกรไพศาล',
      address:
        '35 ซอยรัชดาภิเษก 46 ถนนรัชดาภิเษก ลาดยาว จตุจักร กรุงเทพฯ 10900',
      phone: '0629162498',
      isPurchase: false,
      stepStatus: 0,
    },
    {
      number: 'MSD00001',
      date: '29/09/2022, 09:39',
      totalPrice: '79,600',
      status: 'ยังไม่ชำระ',
      products: [
        {
          image: ProductImage,
          alternative: 'Helmet',
        },
        {
          image: ProductImage,
          alternative: 'Helmet',
        },
        {
          image: ProductImage,
          alternative: 'Helmet',
        },
        {
          image: ProductImage,
          alternative: 'Helmet',
        },
        {
          image: ProductImage,
          alternative: 'Helmet',
        },
        {
          image: ProductImage,
          alternative: 'Helmet',
        },
        {
          image: ProductImage,
          alternative: 'Helmet',
        },
      ],
      name: 'รุ่งเรือง เกียงไกรไพศาล',
      address:
        '35 ซอยรัชดาภิเษก 46 ถนนรัชดาภิเษก ลาดยาว จตุจักร กรุงเทพฯ 10900',
      phone: '0629162498',
      isPurchase: true,
      stepStatus: 1,
    },
  ]

  return (
    <>
      <h2 className="text-primary xl:text-xl text-lg hidden md:block">
        รายการสั่งซื้อ
      </h2>
      <div className="text-right flex flex-row justify-between md:justify-end">
        <h2 className="text-primary text-lg block md:hidden">รายการสั่งซื้อ</h2>
        <Dropdown
          overlay={menu}
          trigger={['click']}
          className="border border-white xl:px-3 xl:py-2 px-2 py-1 rounded"
          onOpenChange={(open) => setRotateArrowDropDown(open)}
        >
          <a
            onClick={() => setRotateArrowDropDown(!rotateArrowDropDown)}
            className="text-white"
          >
            <Space className="gap-8">
              <p className="xl:text-base text-sm">เรียงลำดับจาก</p>
              <DownOutlined
                className={`text-xs transform transition duration-300 ${
                  rotateArrowDropDown ? 'rotate-180 -translate-y-1' : 'rotate-0'
                }`}
              />
            </Space>
          </a>
        </Dropdown>
      </div>
      <div>
        {orders.map((order, index) => {
          return (
            <div
              key={index}
              className={`border border-white p-4 mb-4 mt-6 rounded-md transition-all duration-300 ${
                rotateArrowMoreBtn
                  ? 'max-h-999'
                  : 'sm:max-h-[216px] max-h-[230px]'
              }`}
            >
              <div className="flex justify-between">
                <div className="text-white xl:text-base sm:text-sm text-[13px] font-light sm:font-normal">
                  <p className="sm:font-semibold font-normal">
                    หมายเลขสั่งซื้อ :
                    <span className="text-primary font-light sm:font-normal">
                      {' '}
                      {order.number}
                    </span>{' '}
                    <br />
                  </p>
                  <p className="pt-4 sm:pt-0">{order.date}</p>
                </div>
                <div className="text-white">
                  <span className="text-primary xl:text-xl sm:text-lg text-sm font-medium block text-right">
                    ฿ {order.totalPrice}
                  </span>
                  <p className="xl:text-base sm:text-sm text-[13px] font-light sm:font-normal pt-2 sm:pt-0">
                    สถานะการชำระเงิน{' '}
                    <span className="text-primary font-light sm:font-normal">
                      {order.status}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row overflow-hidden justify-between pt-4">
                <div className="sm:w-3/4 w-full overflow-x-auto sm:max-w-[560px] overflow-y-hidden">
                  <div className="flex sm:gap-4 gap-2">
                    {order.products.map((product, index) => {
                      return (
                        <div
                          key={index}
                          className="sm:min-w-[100px] min-w-[75px]"
                        >
                          <Image
                            src={product.image}
                            alt={product.alternative}
                            layout="responsive"
                            objectFit="cover"
                            loading="lazy"
                          />
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className="sm:w-1/5 w-full pt-4 flex flex-row sm:flex-col justify-end gap-6">
                  {!order.isPurchase && (
                    <Button
                      onClick={() => handleOpenModal()}
                      className="text-black hover:text-primary bg-primary hover:bg-transparent duration-200 border border-primary w-full"
                    >
                      ชำระเงิน
                    </Button>
                  )}
                  <Button
                    onClick={() => setRotateArrowMoreBtn(!rotateArrowMoreBtn)}
                    className="text-primary bg-transparent duration-200 border border-primary w-full"
                  >
                    ดูเพิ่มเติม{' '}
                    <DownOutlined
                      className={`text-xs transform transition duration-300 ${
                        rotateArrowMoreBtn
                          ? 'rotate-180 -translate-y-1'
                          : 'rotate-0'
                      }`}
                    />
                  </Button>
                </div>
              </div>
              <div
                className={`pt-4 transition-all duration-200 xl:text-base text-sm ${
                  rotateArrowMoreBtn ? 'visible' : 'invisible'
                } `}
              >
                <div className="border border-white opacity-20 mb-4" />
                <h2 className="font-semibold text-white">ที่อยู่การจัดส่ง</h2>
                <p className="font-light pb-4 pt-2 text-white">
                  {order.name} <br />
                  {order.address}
                  <br />
                  {order.phone}
                </p>
                <h2 className="font-semibold text-white">
                  สถานะรายการสั่งซื้อ
                </h2>
                <Steps
                  current={order.stepStatus}
                  direction={`${
                    windowWidth <= 600 ? 'vertical' : 'horizontal'
                  }`}
                  labelPlacement="vertical"
                  size="small"
                  className="step--order-complete pt-4"
                >
                  {steps.map((step, index) => {
                    return (
                      <Step
                        className="sm:w-1/5 w-full"
                        key={index}
                        title={
                          <label className="font-light sm:font-normal">
                            {step.title}
                          </label>
                        }
                        icon={
                          <CheckCircleOutlined
                            className={`${
                              order.stepStatus >= index
                                ? 'text-primary'
                                : 'text-white'
                            }`}
                          />
                        }
                      />
                    )
                  })}
                </Steps>
              </div>
            </div>
          )
        })}
      </div>
      <PurchaseModal
        isOpenModal={isOpenModal}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
      />
    </>
  )
}

export default Order

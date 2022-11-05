import { FC, MouseEvent, useState } from 'react'
import Image from 'next/image'

import { Button, Dropdown, Menu, Space, Steps } from 'antd'
import { DownOutlined } from '@ant-design/icons'
const { Step } = Steps

import ProductImage from '@/assets/img/home/product-1.png'
import {
  LeftOutlined,
  CheckOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons'
import PurchaseModal from '../PurchaseModal'

const Order: FC = () => {
  const [rotateArrowDropDown, setRotateArrowDropDown] = useState(false)
  const [rotateArrowMoreBtn, setRotateArrowMoreBtn] = useState(false)
  const [rotateArrowMoreBtn1, setRotateArrowMoreBtn1] = useState(false)
  const [stepStatus, setStepStatus] = useState(0)

  const [isOpenModal, setIsOpenModal] = useState(false)

  const menu = (
    <Menu
      items={[
        {
          label: (
            <Button
              type="link"
              onClick={() => setRotateArrowDropDown(false)}
              className="text-black hover:text-primary w-full text-left p-0"
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
              className="text-black hover:text-primary w-full text-left p-0"
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
  return (
    <>
      <h2 className="text-primary text-xl">รายการสั่งซื้อ</h2>
      <div className="text-right">
        <Dropdown
          overlay={menu}
          trigger={['click']}
          className="border border-white px-3 py-2 rounded"
          onOpenChange={(open) => setRotateArrowDropDown(open)}
        >
          <a
            onClick={() => setRotateArrowDropDown(!rotateArrowDropDown)}
            className="text-white text-base"
          >
            <Space className="gap-8">
              <p className="text-base">เรียงลำดับจาก</p>
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
        <div
          className={`border border-white p-4 mb-4 mt-6 rounded-md transition-all duration-300 ${
            rotateArrowMoreBtn ? 'max-h-999' : 'max-h-[216px]'
          }`}
        >
          <div className="flex justify-between">
            <div className="text-white">
              <p className="font-semibold">
                หมายเลขสั่งซื้อ :<span className="text-primary"> MSD00001</span>{' '}
                <br />
              </p>
              <p>29/09/2022, 09:39</p>
            </div>
            <div className="text-white">
              <span className="text-primary text-xl font-medium block text-right">
                ฿ 79,600
              </span>
              <p className="text-base">
                สถานะการชำระเงิน{' '}
                <span className="text-primary">ยังไม่ชำระ</span>
              </p>
            </div>
          </div>
          <div className="flex overflow-hidden justify-between pt-4">
            <div className="w-3/4 overflow-x-auto max-w-[560px] overflow-y-hidden">
              <div className="flex gap-4">
                <div>
                  <Image
                    height={100}
                    width={100}
                    src={ProductImage}
                    alt="Helmet"
                    layout="fixed"
                    // layout="responsive"
                    objectFit="cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <Image
                    height={100}
                    width={100}
                    src={ProductImage}
                    alt="Helmet"
                    layout="fixed"
                    // layout="responsive"
                    objectFit="cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <Image
                    height={100}
                    width={100}
                    src={ProductImage}
                    alt="Helmet"
                    layout="fixed"
                    // layout="responsive"
                    objectFit="cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <Image
                    height={100}
                    width={100}
                    src={ProductImage}
                    alt="Helmet"
                    layout="fixed"
                    // layout="responsive"
                    objectFit="cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <Image
                    height={100}
                    width={100}
                    src={ProductImage}
                    alt="Helmet"
                    layout="fixed"
                    // layout="responsive"
                    objectFit="cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <Image
                    height={100}
                    width={100}
                    src={ProductImage}
                    alt="Helmet"
                    layout="fixed"
                    // layout="responsive"
                    objectFit="cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <Image
                    height={100}
                    width={100}
                    src={ProductImage}
                    alt="Helmet"
                    layout="fixed"
                    // layout="responsive"
                    objectFit="cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <Image
                    height={100}
                    width={100}
                    src={ProductImage}
                    alt="Helmet"
                    layout="fixed"
                    // layout="responsive"
                    objectFit="cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="w-1/5 flex flex-col justify-end gap-6">
              <Button
                onClick={() => handleOpenModal()}
                className="text-black hover:text-primary bg-primary hover:bg-transparent duration-200 border border-primary w-full"
              >
                ชำระเงิน
              </Button>
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
            className={`w-full pt-4 transition-all duration-200 ${
              rotateArrowMoreBtn ? 'visible' : 'invisible'
            } `}
          >
            <div className="border border-white opacity-20 mb-4" />
            <h2 className="font-semibold text-white">ที่อยู่การจัดส่ง</h2>
            <p className="font-light pb-4 text-white">
              รุ่งเรือง เกียงไกรไพศาล <br />
              35 ซอยรัชดาภิเษก 46 ถนนรัชดาภิเษก ลาดยาว จตุจักร กรุงเทพฯ 10900
              <br />
              0629162498
            </p>
            <h2 className="font-semibold text-white">สถานะรายการสั่งซื้อ</h2>
            <Steps
              current={stepStatus}
              labelPlacement="vertical"
              size="small"
              className="step--order-complete pt-4"
            >
              {steps.map((step, index) => {
                return (
                  <Step
                    key={index}
                    title={step.title}
                    className="w-1/5"
                    icon={
                      <CheckCircleOutlined
                        className={`${
                          stepStatus >= index ? 'text-primary' : 'text-white'
                        }`}
                      />
                    }
                  />
                )
              })}
            </Steps>
          </div>
        </div>
        <div
          className={`border border-white p-4 mb-4 mt-6 rounded-md transition-all duration-300 ${
            rotateArrowMoreBtn1 ? 'max-h-999' : 'max-h-[216px]'
          }`}
        >
          <div className="flex justify-between">
            <div className="text-white">
              <p className="font-semibold">
                หมายเลขสั่งซื้อ :<span className="text-primary"> MSD00002</span>{' '}
                <br />
              </p>
              <p>29/09/2022, 09:39</p>
            </div>
            <div className="text-white">
              <span className="text-primary text-xl font-medium block text-right">
                ฿ 79,600
              </span>
              <p className="text-base">
                สถานะการชำระเงิน <span className="font-semibold">ชำระแล้ว</span>
                <span className="px-2">|</span>
                <span className="text-primary">รอจัดส่ง</span>
              </p>
            </div>
          </div>
          <div className="flex overflow-hidden justify-between pt-4">
            <div className="flex gap-4 w-3/4 overflow-x-auto max-w-[560px] overflow-y-hidden h-[100px]">
              <div>
                <Image
                  height={100}
                  width={100}
                  src={ProductImage}
                  alt="Helmet"
                  layout="fixed"
                  // layout="responsive"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <div>
                <Image
                  height={100}
                  width={100}
                  src={ProductImage}
                  alt="Helmet"
                  layout="fixed"
                  // layout="responsive"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <div>
                <Image
                  height={100}
                  width={100}
                  src={ProductImage}
                  alt="Helmet"
                  layout="fixed"
                  // layout="responsive"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-1/5 flex flex-col justify-end gap-6">
              <Button
                onClick={() => setRotateArrowMoreBtn1(!rotateArrowMoreBtn1)}
                className="text-primary bg-transparent duration-200 border border-primary w-full"
              >
                ดูเพิ่มเติม{' '}
                <DownOutlined
                  className={`text-xs transform transition duration-300 ${
                    rotateArrowMoreBtn1
                      ? 'rotate-180 -translate-y-1'
                      : 'rotate-0'
                  }`}
                />
              </Button>
            </div>
          </div>
          <div
            className={`w-full pt-4 transition-all duration-200 ${
              rotateArrowMoreBtn1 ? 'visible' : 'invisible'
            } `}
          >
            <div className="border border-white opacity-20 mb-4" />
            <h2 className="font-semibold text-white">ที่อยู่การจัดส่ง</h2>
            <p className="font-light pb-4 text-white">
              รุ่งเรือง เกียงไกรไพศาล <br />
              35 ซอยรัชดาภิเษก 46 ถนนรัชดาภิเษก ลาดยาว จตุจักร กรุงเทพฯ 10900
              <br />
              0629162498
            </p>
            <h2 className="font-semibold text-white">สถานะรายการสั่งซื้อ</h2>
            <Steps
              current={stepStatus}
              labelPlacement="vertical"
              size="small"
              className="step--order-complete pt-4"
            >
              {steps.map((step, index) => {
                return (
                  <Step
                    key={index}
                    title={step.title}
                    className="w-1/5"
                    icon={
                      <CheckCircleOutlined
                        className={`${
                          stepStatus >= index ? 'text-primary' : 'text-white'
                        }`}
                      />
                    }
                  />
                )
              })}
            </Steps>
          </div>
        </div>
      </div>
      <PurchaseModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
      />
    </>
  )
}

export default Order

import { Button, Col, Form, FormInstance, Input, Radio, Row, Space } from 'antd'
import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import type { RadioChangeEvent } from 'antd'
import { PaymentType } from '@/constants/purchase'
import { RightOutlined, CheckOutlined, LeftOutlined } from '@ant-design/icons'
import KasikornBankImage from '@/assets/img/purchase/kasikorn-bank.png'
import BangkokBankImage from '@/assets/img/purchase/bangkok-bank.png'
import Image from 'next/image'

interface IPaymentProps {
  setStep: Dispatch<SetStateAction<number>>
  form: FormInstance<{
    firstName: string
    deliverType: string
  }>
}

const Payment: FC<IPaymentProps> = ({ setStep, form }) => {
  const [value, setValue] = useState(0)
  const [payment, setPayment] = useState<PaymentType>()
  const handleChangePayment = (e: RadioChangeEvent) => {}
  const handlePayment = () => {
    if (payment === PaymentType.BANK) {
      setStep(2)
    }
    const body = form.getFieldsValue()
    console.log(body)
  }
  const handleSelectPaymentType = (payment: PaymentType) => {
    setPayment(payment)
  }
  return (
    <>
      <h3 className="xl:text-xl text-lg text-primary font-medium pt-8">
        วิธีการชำระเงิน
      </h3>
      <div
        className={`border border-white rounded text-white transition-full duration-300 my-4 overflow-hidden ${
          PaymentType.CREDIT === payment
            ? 'max-h-999 text-black'
            : 'max-h-[56px] text-white'
        }`}
      >
        <div
          className={`py-4 px-5 flex rounded-sm items-center gap-4 cursor-pointer ${
            PaymentType.CREDIT === payment ? 'bg-primary' : 'bg-transparent'
          }`}
          onClick={() => handleSelectPaymentType(PaymentType.CREDIT)}
        >
          <div
            className={`border border-white rounded-full w-4 h-4 relative my-auto ${
              PaymentType.CREDIT === payment ? 'bg-white' : 'bg-transparent'
            }`}
          >
            <CheckOutlined
              style={{ fontSize: '10px' }}
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                PaymentType.CREDIT === payment
                  ? 'text-black'
                  : 'text-transparent'
              }`}
            />
          </div>
          บัตรเครดิต/บัตรเดบิต
        </div>
        <div className="px-8 py-4">
          <Form.Item label="ชื่อผู้ถือบัตร" className="form-label--white">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="หมายเลขบัตร" className="form-label--white">
            <Input type="number" />
          </Form.Item>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label="วันหมดอายุ" className="form-label--white">
                <Input type="number" placeholder="ดด/ปป" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="CVV" className="form-label--white">
                <Input type="number" />
              </Form.Item>
            </Col>
          </Row>
        </div>
      </div>
      <div
        className={`border border-white rounded transition-full duration-300 my-4 overflow-hidden ${
          PaymentType.BANK === payment
            ? 'max-h-999 text-black'
            : 'max-h-[56px] text-white'
        }`}
      >
        <div
          className={`py-4 px-5 flex rounded-sm items-center gap-4 cursor-pointer ${
            PaymentType.BANK === payment ? 'bg-primary' : 'bg-transparent'
          }`}
          onClick={() => handleSelectPaymentType(PaymentType.BANK)}
        >
          <div
            className={`border border-white rounded-full w-4 h-4 relative my-auto ${
              PaymentType.BANK === payment ? 'bg-white' : 'bg-transparent'
            }`}
          >
            <CheckOutlined
              style={{ fontSize: '10px' }}
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                PaymentType.BANK === payment ? 'text-black' : 'text-transparent'
              }`}
            />
          </div>
          โอนเงินผ่านธนาคาร
        </div>
        <div className="px-8 py-4 flex">
          <div className="flex flex-col justify-between xl:gap-6 gap-4">
            <div className="flex items-center xl:gap-6 gap-4">
              <div className="w-[50px]">
                <Image
                  src={KasikornBankImage}
                  alt="Kasikorn Bank"
                  layout="responsive"
                  loading="lazy"
                />
              </div>
              <p className="text-white xl:text-base text-sm">ธนาคารกสิกร</p>
            </div>
            <div className="flex items-center xl:gap-6 gap-4">
              <div className="w-[50px]">
                <Image
                  src={BangkokBankImage}
                  alt="Bangkok Bank"
                  layout="responsive"
                  loading="lazy"
                />
              </div>
              <p className="text-white xl:text-base text-sm">ธนาคารกรุงเทพ</p>
            </div>
          </div>
          <div className="border border-primary mx-6 h-fit" />
          <div className="flex flex-col justify-between xl:text-base text-sm">
            <div>
              <div className="flex gap-4">
                <p className="text-white">เลขที่บัญชี</p>
                <div className="text-primary">062-3-75623-8</div>
              </div>
              <div className="flex gap-7 pt-2">
                <p className="text-white">ชื่อบัญชี</p>
                <div className="text-primary">บจก. มาร์แชล โมโตสปอร์ท</div>
              </div>
            </div>
            <div>
              <div className="flex gap-4">
                <p className="text-white">เลขที่บัญชี</p>
                <div className="text-primary">191-4-48128-6</div>
              </div>
              <div className="flex gap-7 pt-2">
                <p className="text-white">ชื่อบัญชี</p>
                <div className="text-primary">บจก. มาร์แชล โมโตสปอร์ท</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-4">
        <Button
          onClick={() => setStep(0)}
          className="text-black hover:text-primary bg-primary hover:bg-transparent duration-200 border border-primary min-w-25"
        >
          <LeftOutlined /> ก่อนหน้า
        </Button>
        <Form.Item>
          <Button
            onClick={() => handlePayment()}
            htmlType="submit"
            className="text-black hover:text-primary bg-primary hover:bg-transparent duration-200 border border-primary min-w-35"
          >
            <Space>
              ชำระเงิน <i className="icon-cart" />
            </Space>
          </Button>
        </Form.Item>
      </div>
    </>
  )
}

export default Payment

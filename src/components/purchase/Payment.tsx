import { Button, Col, Form, FormInstance, Input, Row, Space } from 'antd'
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState,
} from 'react'
import { PaymentType } from '@/constants/purchase'
import { CheckOutlined, LeftOutlined } from '@ant-design/icons'
import KasikornBankImage from '@/assets/img/purchase/kasikorn-bank.png'
import KasikornBankQrImage from '@/assets/img/purchase/kasikorn-bank-qr.svg'
import BangkokBankImage from '@/assets/img/purchase/bangkok-bank.png'
import BangkokBankQrImage from '@/assets/img/purchase/bangkok-bank-qr.svg'
import Image from 'next/image'
import { IPurchaseRequest } from '@/interface/purchase'
import { ScreenCtx } from '@/contexts/ScreenProvider'

interface IPaymentProps {
  setStep: Dispatch<SetStateAction<number>>
  form: FormInstance<IPurchaseRequest>
}

const Payment: FC<IPaymentProps> = ({ setStep, form }) => {
  const { isMobile } = useContext(ScreenCtx)!
  const [payment, setPayment] = useState<PaymentType>()

  const handlePayment = () => {
    if (payment === PaymentType.BANK) {
      // console.log('setStep(2)2')
      setStep(2)
    }
  }
  const handleSelectPaymentType = (paymentValue: PaymentType) => {
    setPayment(paymentValue)
    form.setFieldValue('paymentType', paymentValue)
  }

  return (
    <>
      <h3 className="xl:text-xl text-lg text-primary font-medium pt-8">
        วิธีการชำระเงิน
      </h3>
      <Form.Item name="paymentType">
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
          <div className="sm:px-8 py-4 px-5">
            <Form.Item
              name="cardHolderName"
              label={<label className="text-sm">ชื่อผู้ถือบัตร</label>}
              className="form-label--white"
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              name="cardNumber"
              label={<label className="text-sm">หมายเลขบัตร</label>}
              className="form-label--white"
            >
              <Input type="number" />
            </Form.Item>
            <Row gutter={24}>
              <Col sm={12} xs={24}>
                <Form.Item
                  name="expirationDate"
                  label={<label className="text-sm">วันหมดอายุ</label>}
                  className="form-label--white"
                >
                  <Input type="text" placeholder="ดด/ปป" />
                </Form.Item>
              </Col>
              <Col sm={12} xs={24}>
                <Form.Item
                  name="cvv"
                  label={<label className="text-sm">CVV</label>}
                  className="form-label--white"
                >
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
                  PaymentType.BANK === payment
                    ? 'text-black'
                    : 'text-transparent'
                }`}
              />
            </div>
            โอนเงินผ่านธนาคาร
          </div>
          {/* {!isMobile ? ( */}
          <div className="lg:px-8 px-4 py-4">
            <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
              <div className="w-[50px]">
                <Image
                  src={KasikornBankImage}
                  alt="Kasikorn Bank"
                  layout="responsive"
                  loading="lazy"
                />
              </div>
              <div className="w-20">
                <Image
                  src={KasikornBankQrImage}
                  alt="Kasikorn Bank"
                  layout="responsive"
                  loading="lazy"
                />
              </div>
              <p className="text-white xl:text-base text-sm">ชื่อบัญชี</p>
              <p className="text-primary xl:text-base text-sm">
                บจก. มาร์แชล โมโตสปอร์ท
              </p>
            </div>
            <div className="border border-primary h-[1px] my-4" />
            <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
              <div className="w-[50px]">
                <Image
                  src={BangkokBankImage}
                  alt="Bangkok Bank"
                  layout="responsive"
                  loading="lazy"
                />
              </div>
              <div className="w-20">
                <Image
                  src={BangkokBankQrImage}
                  alt="Bangkok Bank"
                  layout="responsive"
                  loading="lazy"
                />
              </div>
              <p className="text-white xl:text-base text-sm">ชื่อบัญชี</p>
              <p className="text-primary xl:text-base text-sm">
                นาย ชัยเลิศ เฉลิมวงษ์พิพัฒน์
              </p>
            </div>
          </div>
          {/* ) : (
            <div className="py-4 px-5">
              <div className="flex items-center justify-center gap-4 pb-4">
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
              <div className="flex items-center justify-center gap-4">
                <p className="text-white">เลขที่บัญชี</p>
                <div className="text-primary">062-3-75623-8</div>
              </div>
              <div className="flex items-center justify-center gap-4 pt-2">
                <p className="text-white">ชื่อบัญชี</p>
                <div className="text-primary">บจก. มาร์แชล โมโตสปอร์ท</div>
              </div>

              <div className="border border-primary h-[1px] m-4" />

              <div className="flex items-center justify-center gap-4 pb-4">
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
              <div>
                <div className="flex items-center justify-center gap-4">
                  <p className="text-white">เลขที่บัญชี</p>
                  <div className="text-primary">191-4-48128-6</div>
                </div>
                <div className="flex items-center justify-center gap-4 pt-2">
                  <p className="text-white">ชื่อบัญชี</p>
                  <div className="text-primary">บจก. มาร์แชล โมโตสปอร์ท</div>
                </div>
              </div>
            </div>
          )} */}
        </div>
      </Form.Item>
      <div className="flex justify-between pt-4">
        <Button
          onClick={() => setStep(0)}
          className="text-black hover:text-primary bg-primary hover:bg-transparent duration-200 border border-primary min-w-35"
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

import React, {
  Dispatch,
  FC,
  MouseEvent,
  SetStateAction,
  useContext,
  useState,
} from 'react'
import { CheckOutlined, CheckCircleOutlined } from '@ant-design/icons'
import { Button, Col, Form, Row, Space, Steps } from 'antd'
import PurchaseModal from '../PurchaseModal'
import { ScreenCtx } from '@/contexts/ScreenProvider'
import { IPaymentBankRequest } from '@/interface/purchase'
const { Step } = Steps

interface IFinishProps {
  setStep: Dispatch<SetStateAction<number>>
}

const Finish: FC<IFinishProps> = ({ setStep }) => {
  const { breakpoint } = useContext(ScreenCtx)!
  const [stepStatus, setStepStatus] = useState(0)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [form] = Form.useForm<IPaymentBankRequest>()
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
  const handlePurchaseModal = () => {
    setIsOpenModal(true)
  }
  const handleCancel = () => {
    setIsOpenModal(false)
  }
  const handleSubmit = () => {
    // console.log(form.getFieldsValue())
  }
  return (
    <>
      <div className="pt-6 text-center">
        <div className="border border-primary rounded-full inline-block w-12 h-12 relative">
          <CheckOutlined
            className="text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{ fontSize: '18px' }}
          />
        </div>
        <div className="text-center">
          <h3 className="xl:text-xl sm:text-lg text-base text-primary pt-1">
            รายการสั่งซื้อสำเร็จ
          </h3>
          <p className="text-white pt-1 xl:text-base sm:text-sm text-xs">
            กรุณาชำระเงินภายในวันที่{' '}
            <span className="font-bold text-primary underline">01/10/2022</span>{' '}
            เวลา <span className="font-bold text-primary underline">09:39</span>{' '}
            น.
          </p>
          <p className="xl:text-xs text-[10px] italic text-white pt-2">
            **กรุณาชำระเงินภายใน 48 ชั่วโมง หากเกินเวลาที่กำหนด
            ระบบจะทำการยกเลิกรายการคำสั่งซื้อของคุณอัตโนมัติ**
          </p>
        </div>
        <Button
          htmlType="submit"
          onClick={handlePurchaseModal}
          className="text-black hover:text-primary bg-primary hover:bg-transparent duration-200 border border-primary min-w-40 mt-4"
        >
          <Space>
            <i className="icon-cart" /> ชำระเงิน
          </Space>
        </Button>
      </div>
      <div className="border border-white rounded mt-8 text-white xl:text-base text-sm py-4">
        <div className="xl:px-5 px-4">
          <Row gutter={[0, 4]}>
            <Col sm={12} xs={24}>
              <span className="font-semibold">หมายเลขสั่งซื้อ : </span>
              <span className="text-primary pl-2">MSD00001</span>
            </Col>
            <Col sm={12} xs={24} className="block sm:hidden">
              <span>29/09/2022, 09:39 </span>
            </Col>
            <Col sm={12} xs={24}>
              <span className="font-semibold">สถานะการชำระเงิน : </span>
              <span className="text-primary pl-2">ยังไม่ชำระ</span>
            </Col>
            <Col span={12} className="hidden sm:block">
              <span>29/09/2022, 09:39 </span>
            </Col>
            <Col sm={12} xs={24}>
              <span className="font-semibold">วิธีการชำระเงิน : </span>
              <span className="text-primary pl-2">โอนเงินผ่านธนาคาร</span>
            </Col>
          </Row>
          <div className="border border-white opacity-20 my-6" />
          <h2 className="font-semibold text-white">ที่อยู่การจัดส่ง</h2>
          <p className="font-light pb-8 pt-2">
            รุ่งเรือง เกียงไกรไพศาล <br />
            35 ซอยรัชดาภิเษก 46 ถนนรัชดาภิเษก ลาดยาว จตุจักร กรุงเทพฯ 10900
            <br />
            0629162498
          </p>
          <h2 className="font-semibold text-white">สถานะรายการสั่งซื้อ</h2>
        </div>

        <Steps
          responsive={false}
          current={stepStatus}
          direction={`${
            breakpoint === 'xs' || breakpoint === 'sm'
              ? 'vertical'
              : 'horizontal'
          }`}
          labelPlacement="vertical"
          size="small"
          className="step--order-complete pt-4 px-4 md:px-0"
        >
          {steps.map((step, index) => {
            return (
              <Step
                key={index}
                title={step.title}
                className="md:w-1/5 w-fit"
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
      <PurchaseModal
        isOpenModal={isOpenModal}
        handleCancel={handleCancel}
        handleSubmit={handleSubmit}
        form={form}
      />
    </>
  )
}

export default Finish

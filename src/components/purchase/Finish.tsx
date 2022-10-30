import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import {
  LeftOutlined,
  CheckOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons'
import { Button, Col, Row, Space, Steps } from 'antd'
const { Step } = Steps

interface IFinishProps {
  setStep: Dispatch<SetStateAction<number>>
}

const handlePurchase = () => {}

const Finish: FC<IFinishProps> = ({ setStep }) => {
  const [stepStatus, setStepStatus] = useState(0)
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
          <h3 className="text-xl text-primary pt-1">รายการสั่งซื้อสำเร็จ</h3>
          <p className="text-white pt-1">
            กรุณาชำระเงินภายในวันที่{' '}
            <span className="font-bold text-primary underline">01/10/2022</span>{' '}
            เวลา <span className="font-bold text-primary underline">09:39</span>{' '}
            น.
          </p>
          <p className="text-sm italic text-white pt-2">
            **กรุณาชำระเงินภายใน 48 ชั่วโมง หากเกินเวลาที่กำหนด
            ระบบจะทำการยกเลิกรายการคำสั่งซื้อของคุณอัตโนมัติ**
          </p>
        </div>
        <Button
          htmlType="submit"
          onClick={handlePurchase}
          className="text-black hover:text-primary bg-primary hover:bg-transparent duration-200 border border-primary min-w-40 mt-4"
        >
          <Space>
            <i className="icon-cart" /> ชำระเงิน
          </Space>
        </Button>
      </div>
      <div className="border border-white rounded mt-8 text-white text-base py-4">
        <div className="px-5">
          <Row className="" gutter={[0, 4]}>
            <Col span={12}>
              <span className="font-semibold">หมายเลขสั่งซื้อ : </span>
              <span className="text-primary pl-2">MSD00001</span>
            </Col>
            <Col span={12}>
              <span className="font-semibold">สถานะการชำระเงิน : </span>
              <span className="text-primary pl-2">ยังไม่ชำระ</span>
            </Col>
            <Col span={12}>
              <span>29/09/2022, 09:39 </span>
            </Col>
            <Col span={12}>
              <span className="font-semibold">วิธีการชำระเงิน : </span>
              <span className="text-primary pl-2">โอนเงินผ่านธนาคาร</span>
            </Col>
          </Row>
          <div className="border border-white opacity-20 my-6" />
          <h2 className="font-semibold text-white">ที่อยู่การจัดส่ง</h2>
          <p className="font-light pb-8">
            รุ่งเรือง เกียงไกรไพศาล <br />
            35 ซอยรัชดาภิเษก 46 ถนนรัชดาภิเษก ลาดยาว จตุจักร กรุงเทพฯ 10900{' '}
            <br />
            0629162498
          </p>
          <h2 className="font-semibold text-white">สถานะรายการสั่งซื้อ</h2>
        </div>
        <div className="w-full pt-4">
          <Steps
            current={stepStatus}
            labelPlacement="vertical"
            size="small"
            className="step--order-complete"
          >
            <Step
              title="การจัดส่ง"
              className="w-1/5"
              icon={
                <CheckCircleOutlined
                  className={`${
                    stepStatus >= 0 ? 'text-primary' : 'text-white'
                  }`}
                />
              }
            />
            <Step
              title="การชำระเงิน"
              className="w-1/5"
              icon={
                <CheckCircleOutlined
                  className={`${
                    stepStatus >= 1 ? 'text-primary' : 'text-white'
                  }`}
                />
              }
            />
            <Step
              title="สำเร็จ"
              className="w-1/5"
              icon={
                <CheckCircleOutlined
                  className={`${
                    stepStatus >= 2 ? 'text-primary' : 'text-white'
                  }`}
                />
              }
            />
            <Step
              title="สำเร็จ"
              className="w-1/5"
              icon={
                <CheckCircleOutlined
                  className={`${
                    stepStatus >= 3 ? 'text-primary' : 'text-white'
                  }`}
                />
              }
            />
            <Step
              title="สำเร็จ"
              className="w-1/5"
              icon={
                <CheckCircleOutlined
                  className={`${
                    stepStatus >= 4 ? 'text-primary' : 'text-white'
                  }`}
                />
              }
            />
          </Steps>
        </div>
      </div>
    </>
  )
}

export default Finish

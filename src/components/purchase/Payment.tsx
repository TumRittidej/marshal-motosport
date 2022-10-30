import { Button, Col, Radio, Row } from 'antd'
import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import type { RadioChangeEvent } from 'antd'
import { RightOutlined, LeftOutlined } from '@ant-design/icons'

interface IPaymentProps {
  setStep: Dispatch<SetStateAction<number>>
}

const Payment: FC<IPaymentProps> = ({ setStep }) => {
  const [value, setValue] = useState(0)
  const handleChangePayment = (e: RadioChangeEvent) => {}
  return (
    <>
      <h3 className="text-xl text-primary font-medium pt-8">วิธีการชำระเงิน</h3>
      <Radio.Group
        onChange={handleChangePayment}
        value={value}
        className="pt-6"
      >
        <Row gutter={[0, 16]}>
          <Col span={24}>
            <Radio value={0} className="text-white">
              บัตรเครดิต/บัตรเดบิต
            </Radio>
          </Col>
          <Col span={24}>
            <Radio value={1} className="text-white">
              โอนเงินผ่านธนาคาร
            </Radio>
          </Col>
        </Row>
      </Radio.Group>
      <div className="flex justify-between pt-8">
        <Button
          onClick={() => setStep(0)}
          className="text-black hover:text-primary bg-primary hover:bg-transparent duration-200 border border-primary min-w-25"
        >
          <LeftOutlined /> ก่อนหน้า
        </Button>
        <Button
          onClick={() => setStep(2)}
          className="text-black hover:text-primary bg-primary hover:bg-transparent duration-200 border border-primary min-w-25"
        >
          ถัดไป <RightOutlined />
        </Button>
      </div>
    </>
  )
}

export default Payment

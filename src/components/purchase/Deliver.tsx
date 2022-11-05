import {
  Button,
  Col,
  DatePicker,
  Form,
  FormInstance,
  Input,
  Modal,
  Row,
  Select,
  TimePicker,
} from 'antd'
import moment from 'moment'
import { Option } from 'antd/lib/mentions'
import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { RightOutlined, CheckOutlined } from '@ant-design/icons'
import { DeliveryType, DeliveryValue } from '@/constants/purchase'

interface IDeliverProps {
  setStep: Dispatch<SetStateAction<number>>
  form: FormInstance<{
    firstName: string
    deliverType: string
  }>
}

const Deliver: FC<IDeliverProps> = ({ setStep, form }) => {
  const format = 'HH:mm'
  const [deliveryType, setDeliveryType] = useState<DeliveryType>(
    DeliveryType.DOMESTIC
  )
  const [deliveryValue, setDeliveryValue] = useState<DeliveryValue>()

  const onChange = (value: string) => {
    console.log(`selected ${value}`)
  }

  const onSearch = (value: string) => {
    console.log('search:', value)
  }

  const handleSelectDeliverType = (selectDeliveryType: DeliveryType) => {
    // form.setFieldValue('deliverType', index)
    setDeliveryType(selectDeliveryType)
  }

  const handleSelectDeliveryValue = (selectDeliveryValue: DeliveryValue) => {
    setDeliveryValue(selectDeliveryValue)
  }

  const onSubmit = (value: any) => {
    const body = form.getFieldsValue()
    console.log('body', body)

    console.log(value)
  }

  const deliveryTypes = [
    {
      deliveryType: DeliveryType.DOMESTIC,
      text: 'จัดส่งภายในประเทศ',
      deliveryValue: [
        {
          value: DeliveryValue.THAILAND_POST_NORMAL,
          text: 'ไปรษณีย์ไทย - ลงทะเบียน',
          price: '฿ 55',
        },
        {
          value: DeliveryValue.THAILAND_POST_EMS,
          text: 'ไปรษณีย์ไทย - EMS',
          price: '฿ 100',
        },
        {
          value: DeliveryValue.KERRY,
          text: 'Kerry',
          price: '฿ 85',
        },
        {
          value: DeliveryValue.FLASH,
          text: 'Flash',
          price: '฿ 80',
        },
        {
          value: DeliveryValue.DHL,
          text: 'DHL',
          price: '฿ 75',
        },
      ],
    },
    {
      deliveryType: DeliveryType.EXPRESS_DOMESTIC,
      text: 'จัดส่งแบบด่วน (ภายในประเทศ)',
      deliveryValue: [
        {
          value: DeliveryValue.LALAMOVE,
          text: 'Lalamove',
          price: '฿ 85',
        },
        {
          value: DeliveryValue.GRAB,
          text: 'Grab',
          price: '฿ 100',
        },
      ],
    },
    {
      deliveryType: DeliveryType.INTERNATIONAL,
      text: 'จัดส่งระหว่างประเทศ',
      deliveryValue: [
        {
          value: DeliveryValue.THAILAND_POST_EMS_INTER,
          text: 'ไปรษณีย์ไทย - EMS',
          price: '฿ 255',
        },
        {
          value: DeliveryValue.DHL_INTER,
          text: 'DHL',
          price: '฿ 400',
        },
      ],
    },
    {
      deliveryType: DeliveryType.AT_STORE,
      text: 'รับสินค้าที่ร้าน',
    },
  ]

  return (
    <>
      <h3 className="text-xl text-primary font-medium pt-8">
        ข้อมูลผู้สั่งซื้อ
      </h3>
      <Row gutter={32} className="mt-4">
        <Col span={12}>
          <Form.Item
            label="ชื่อ"
            className="form-label--white"
            name="firstName"
          >
            <Input type="text" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="นามสกุล" className="form-label--white">
            <Input type="text" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="อีเมล" className="form-label--white">
            <Input type="email" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="เบอร์ติดต่อ" className="form-label--white">
            <Input type="tel" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item label="ที่อยู่การจัดส่ง" className="form-label--white">
        <Input
          type="text"
          placeholder="ชื่อที่อยู่ หมู่บ้าน, บ้านเลขที่, ตึก, อาคาร"
        />
      </Form.Item>
      <Row gutter={32}>
        <Col span={12}>
          <Form.Item label="ตำบล / แขวง" className="form-label--white">
            <Select
              bordered={false}
              autoFocus={false}
              showSearch
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={(input, option) =>
                (option!.children as unknown as string)
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="อำเภอ / เขต" className="form-label--white">
            <Select
              bordered={false}
              autoFocus={false}
              showSearch
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={(input, option) =>
                (option!.children as unknown as string)
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="จังหวัด" className="form-label--white">
            <Select
              bordered={false}
              autoFocus={false}
              showSearch
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={(input, option) =>
                (option!.children as unknown as string)
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="รหัสไปรษณีย์" className="form-label--white">
            <Input type="number" />
          </Form.Item>
        </Col>
      </Row>
      <h3 className="text-xl text-primary font-medium pt-8 pb-4">การจัดส่ง</h3>
      <Form.Item name="deliverType">
        {deliveryTypes.map((delivery, index) => {
          return (
            <div
              key={index}
              className={`border border-white rounded text-white transition-full duration-300 mb-4 last:mb-0 overflow-hidden ${
                deliveryType === delivery.deliveryType
                  ? 'max-h-999 text-black'
                  : 'max-h-[56px] text-white'
              }`}
            >
              <div
                className={`py-4 px-5 flex rounded-sm items-center gap-4 cursor-pointer ${
                  deliveryType === delivery.deliveryType
                    ? 'bg-primary'
                    : 'bg-transparent'
                }`}
                onClick={() => handleSelectDeliverType(delivery.deliveryType)}
              >
                <div
                  className={`border border-white rounded-full w-4 h-4 relative my-auto ${
                    deliveryType === delivery.deliveryType
                      ? 'bg-white'
                      : 'bg-transparent'
                  }`}
                >
                  <CheckOutlined
                    style={{ fontSize: '10px' }}
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                      deliveryType === delivery.deliveryType
                        ? 'text-black'
                        : 'text-transparent'
                    }`}
                  />
                </div>
                {delivery.text}
              </div>
              <div className={`px-8 py-4 transition-all duration-200`}>
                {delivery.deliveryType !== DeliveryType.AT_STORE ? (
                  <>
                    {delivery.deliveryValue?.map((delivery, index) => {
                      return (
                        <div
                          key={index}
                          className={`flex gap-2 cursor-pointer pb-6 last:pb-0 ${
                            deliveryValue === delivery.value
                              ? 'text-primary'
                              : 'text-white'
                          }`}
                          onClick={() =>
                            handleSelectDeliveryValue(delivery.value)
                          }
                        >
                          <div
                            className={`border rounded-full w-4 h-4 relative my-auto ${
                              deliveryValue === delivery.value
                                ? 'border-primary'
                                : 'border-white'
                            }`}
                          >
                            <CheckOutlined
                              style={{ fontSize: '8px' }}
                              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                                deliveryValue === delivery.value
                                  ? 'text-primary'
                                  : 'text-transparent'
                              }`}
                            />
                          </div>
                          <div className={`flex justify-between w-full `}>
                            {delivery.text} <span>{delivery.price}</span>
                          </div>
                        </div>
                      )
                    })}
                  </>
                ) : (
                  <>
                    <div className="flex gap-8">
                      <Form.Item
                        label="โปรดเลือกวัน"
                        className="form-label--white w-3/5"
                      >
                        <DatePicker
                          placeholder="Select a day"
                          className="w-full"
                          placement="bottomLeft"
                        />
                      </Form.Item>
                      <Form.Item
                        label="เวลา"
                        className="form-label--white w-2/5"
                      >
                        <TimePicker
                          className="w-full"
                          popupClassName="timepick--ok-btn timepick--now-btn"
                          defaultValue={moment('12:08', format)}
                          format={format}
                        />
                      </Form.Item>
                    </div>
                  </>
                )}
              </div>
            </div>
          )
        })}
      </Form.Item>
      <Form.Item className="text-right pt-4">
        <Button
          onClick={() => setStep(1)}
          className="text-black hover:text-primary bg-primary hover:bg-transparent duration-200 border border-primary min-w-25"
        >
          ถัดไป <RightOutlined />
        </Button>
      </Form.Item>
    </>
  )
}

export default Deliver

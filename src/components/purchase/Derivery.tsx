import { Button, Col, Form, Input, Radio, Row, Select } from 'antd'
import { Option } from 'antd/lib/mentions'
import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import type { RadioChangeEvent } from 'antd'
import { RightOutlined } from '@ant-design/icons'

interface IDeriveryProps {
  setStep: Dispatch<SetStateAction<number>>
}

const Derivery: FC<IDeriveryProps> = ({ setStep }) => {
  const [value, setValue] = useState(0)
  const onChange = (value: string) => {
    console.log(`selected ${value}`)
  }

  const onSearch = (value: string) => {
    console.log('search:', value)
  }

  const handleChangeDerivery = (e: RadioChangeEvent) => {
    setValue(e.target.value)
  }
  return (
    <>
      <h3 className="text-xl text-primary font-medium pt-8">
        ข้อมูลผู้สั่งซื้อ
      </h3>
      <Form layout="vertical" className="pt-2">
        <Row gutter={32}>
          <Col span={12}>
            <Form.Item label="ชื่อ" className="form-label--white">
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
        <h3 className="text-xl text-primary font-medium pt-8">การจัดส่ง</h3>
        <Radio.Group
          onChange={handleChangeDerivery}
          value={value}
          className="w-full pt-6"
        >
          <Row gutter={[0, 16]}>
            <Col span={12}>
              <Radio className="text-white" value={0}>
                จัดส่งภายในประเทศ
              </Radio>
            </Col>
            <Col span={12}>
              <Radio className="text-white" value={1}>
                จัดส่งแบบด่วน (ภายในประเทศ)
              </Radio>
            </Col>
            <Col span={12}>
              <Radio className="text-white" value={2}>
                จัดส่งระหว่างประเทศ
              </Radio>
            </Col>
            <Col span={12}>
              <Radio className="text-white" value={3}>
                รับสินค้าที่ร้าน
              </Radio>
            </Col>
          </Row>
        </Radio.Group>
        <Form.Item className="text-right pt-8">
          <Button
            onClick={() => setStep(1)}
            className="text-black hover:text-primary bg-primary hover:bg-transparent duration-200 border border-primary min-w-25"
          >
            ถัดไป <RightOutlined />
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default Derivery

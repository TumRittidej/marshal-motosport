import { FC, useState } from 'react'

import { Button, Checkbox, Col, Form, Input, Radio, Row, Select } from 'antd'
import { PlusOutlined, RightOutlined } from '@ant-design/icons'
import { Option } from 'antd/lib/mentions'
import type { RadioChangeEvent } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'

const Address: FC = () => {
  const [value, setValue] = useState(1)
  const [isAddMoreAddress, setIsAddMoreAddress] = useState(false)

  const onChange = (value: string) => {
    console.log(`selected ${value}`)
  }

  const onSearch = (value: string) => {
    console.log('search:', value)
  }

  const handleChangeSetAddress = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`)
  }

  const handleChangeDefaultAddress = (e: RadioChangeEvent) => {
    setValue(e.target.value)
  }
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-primary xl:text-xl text-lg">ที่อยู่การจัดส่ง</h2>
        <Button
          onClick={() => setIsAddMoreAddress(!isAddMoreAddress)}
          type="link"
          className="text-primary xl:text-lg text-base flex items-center"
          icon={!isAddMoreAddress && <PlusOutlined />}
        >
          {isAddMoreAddress ? (
            <>
              ย้อนกลับ <RightOutlined />
            </>
          ) : (
            'เพิ่มที่อยู่การจัดส่ง'
          )}
        </Button>
      </div>
      <Radio.Group
        onChange={handleChangeDefaultAddress}
        value={value}
        className={`w-full pt-6 ${!isAddMoreAddress ? 'block' : 'hidden'}`}
      >
        <div className="border-b sm:border sm:border-primary sm:rounded-md py-6 sm:p-5 sm:mb-4">
          <div className="flex justify-between xl:text-base text-sm">
            <p className="text-white font-light">
              รุ่งเรือง เกียงไกรไพศาล <br />
              35 ซอยรัชดาภิเษก 46 ถนนรัชดาภิเษก ลาดยาว จตุจักร กรุงเทพฯ 10900{' '}
              <br />
              0629162498
            </p>
            <div>
              <Button type="link" className="text-white p-0">
                <div className="underline">แก้ไข</div>
              </Button>
            </div>
          </div>
          <Radio value={1} className="text-white mt-4 p-0">
            ตั้งเป็นค่าเริ่มต้นสำหรับที่อยู่การจัดส่ง
          </Radio>
        </div>
        <div className="border-b sm:border sm:border-primary sm:rounded-md py-6 sm:p-5 sm:mb-4">
          <div className="flex justify-between xl:text-base text-sm">
            <p className="text-white font-light">
              รุ่งเรือง เกียงไกรไพศาล <br />
              35 ซอยรัชดาภิเษก 46 ถนนรัชดาภิเษก ลาดยาว จตุจักร กรุงเทพฯ 10900{' '}
              <br />
              0629162498
            </p>
            <div>
              <Button type="link" className="text-white p-0">
                <div className="underline">แก้ไข</div>
              </Button>
              <Button type="link" className="text-white py-0 pr-0">
                <div className="underline">ลบ</div>
              </Button>
            </div>
          </div>
          <Radio value={2} className="text-white mt-4">
            ตั้งเป็นค่าเริ่มต้นสำหรับที่อยู่การจัดส่ง
          </Radio>
        </div>
      </Radio.Group>

      <Form
        layout="vertical"
        className={`pt-6 ${isAddMoreAddress ? 'block' : 'hidden'}`}
        autoComplete="off"
      >
        <Row gutter={32}>
          <Col sm={12} xs={24}>
            <Form.Item
              label="ชื่อ-นามสกุล ผู้รับสินค้า"
              className="form-label--white"
            >
              <Input type="text" />
            </Form.Item>
          </Col>
          <Col sm={12} xs={24}>
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
          <Col sm={12} xs={24}>
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
          <Col sm={12} xs={24}>
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
          <Col sm={12} xs={24}>
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
          <Col sm={12} xs={24}>
            <Form.Item label="รหัสไปรษณีย์" className="form-label--white">
              <Input type="number" />
            </Form.Item>
          </Col>
        </Row>
        <Checkbox
          onChange={handleChangeSetAddress}
          className="text-white xl:text-base text-sm mt-2 !hover:clear-none"
        >
          ตั้งเป็นค่าเริ่มต้นสำหรับที่อยู่การจัดส่ง
        </Checkbox>
        <div className="border border-white opacity-20 mt-8 mb-4" />
        <Form.Item className="text-right pt-4">
          <Button
            htmlType="submit"
            className="text-black hover:text-primary bg-primary hover:bg-transparent duration-200 border border-primary min-w-45"
          >
            บันทึก
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default Address

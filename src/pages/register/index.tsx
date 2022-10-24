import { Button, Form, Input, Radio } from 'antd'
import { FC, useState } from 'react'
import type { RadioChangeEvent } from 'antd'

const Register: FC = () => {
  const [value, setValue] = useState(1)
  const [showStoreInput, setShowStoreInput] = useState(false)
  const handleChangeType = (e: RadioChangeEvent) => {
    setValue(e.target.value)
  }
  return (
    <section className="pt-44 bg-black">
      <div className="bg-2--position-y-5 py-20">
        <h1 className="pb-10 text-4xl text-white text-center font-semibold text-white">
          สมัคร
          <span className="text-primary">สมาชิก</span>
        </h1>
        <Radio.Group
          value={value}
          onChange={handleChangeType}
          className="text-white text-base mt-2 !hover:clear-none text-center block"
        >
          <Radio
            value={1}
            className="text-white text-base mt-2 !hover:clear-none"
            onClick={() => setShowStoreInput(false)}
          >
            ลูกค้า
          </Radio>
          <Radio
            value={2}
            className="text-white text-base mt-2 !hover:clear-none"
            onClick={() => setShowStoreInput(true)}
          >
            ร้านค้า
          </Radio>
        </Radio.Group>

        <Form layout="vertical" className="m-auto pt-2 max-w-100">
          <Form.Item
            label="ชื่อร้านค้า"
            className={`form-label--white ${
              showStoreInput ? 'block' : 'hidden'
            }`}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item label="ชื่อ" className="form-label--white">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="นามสกุล" className="form-label--white">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="อีเมล" className="form-label--white">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="รหัสผ่าน" className="form-label--white">
            <Input.Password type="password" />
          </Form.Item>
          <Form.Item label="ยืนยันรหัสผ่าน" className="form-label--white">
            <Input.Password type="password" />
          </Form.Item>
          <Form.Item className="text-center pt-4">
            <Button
              htmlType="submit"
              className="text-black hover:text-primary bg-primary hover:bg-transparent duration-200 border border-primary min-w-45"
            >
              สร้างบัญชี
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  )
}

export default Register

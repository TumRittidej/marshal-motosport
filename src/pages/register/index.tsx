import { Button, Form, Input, Radio } from 'antd'
import { FC, useState } from 'react'
import { IRegisterRequest } from ':@/register'
import { RegisterType } from '@/constants/register'

const Register: FC = () => {
  const [showStoreInput, setShowStoreInput] = useState(false)

  const [form] = Form.useForm<IRegisterRequest>()
  const handleSubmit = (value: IRegisterRequest) => {
    // console.log(value)
  }

  return (
    <section className="xl:pt-44 lg:pt-36 pt-15 bg-black">
      <div className="bg-2--position-y-5 xl:pt-20 pt-15 xl:pb-30 pb-25">
        <h1 className="xl:pb-10 pb-6 xl:text-4xl text-3xl text-white text-center font-semibold text-white">
          สมัคร
          <span className="text-primary">สมาชิก</span>
        </h1>
        <Form
          layout="vertical"
          className="m-auto pt-2 max-w-100"
          onFinish={handleSubmit}
          form={form}
          initialValues={{ type: RegisterType.CUSTOMER }}
          autoComplete="off"
        >
          <Form.Item name="type">
            <Radio.Group className="text-white text-base mt-2 !hover:clear-none text-center block">
              <Radio
                value={RegisterType.CUSTOMER}
                className="text-white text-base mt-2 !hover:clear-none"
                onClick={() => setShowStoreInput(false)}
              >
                ลูกค้า
              </Radio>
              <Radio
                value={RegisterType.STORE}
                className="text-white text-base mt-2 !hover:clear-none"
                onClick={() => setShowStoreInput(true)}
              >
                ร้านค้า
              </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="storeName"
            label="ชื่อร้านค้า"
            className={`form-label--white ${
              showStoreInput ? 'block' : 'hidden'
            }`}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            name="firstName"
            label="ชื่อ"
            className="form-label--white"
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="นามสกุล"
            className="form-label--white"
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item name="email" label="อีเมล" className="form-label--white">
            <Input type="email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="รหัสผ่าน"
            className="form-label--white"
          >
            <Input.Password type="password" />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label="ยืนยันรหัสผ่าน"
            className="form-label--white"
          >
            <Input.Password type="password" />
          </Form.Item>
          <Form.Item className="text-center pt-4">
            <Button
              onClick={() => handleSubmit}
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

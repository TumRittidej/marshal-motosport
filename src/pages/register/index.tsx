import { Button, Form, Input } from 'antd'
import React from 'react'

const Register = () => {
  return (
    <section className="pt-44 bg-black">
      <div className="bg-2--position-y-5 py-20">
        <h1 className="text-4xl text-white text-center font-semibold text-white">
          สมัคร
          <span className="text-primary">สมาชิก</span>
        </h1>
        <Form layout="vertical" className="m-auto pt-6 max-w-100">
          <Form.Item label="ชื่อ" className="form-label--white">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="นามสกุล" className="form-label--white">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="อีเมล" className="form-label--white">
            <Input type="text" />
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

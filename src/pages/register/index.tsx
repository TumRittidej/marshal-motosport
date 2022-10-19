import { Button, Form, Input } from 'antd'
import React from 'react'

const Register = () => {
  return (
    <section className="pt-44 bg-black">
      <div className="bg-2--position-y-20 py-20">
        <h1 className="text-4xl text-white text-center font-semibold text-white">
          สมัครสมาชิก
          <span className="text-primary">สมาชิก</span>
        </h1>
        <Form layout="vertical" className="text-center m-auto pt-6 max-w-100">
          <Form.Item label="ตำแหน่งที่ต้องการ">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="ชื่อ">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="นามสกุล">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="เบอร์ติดต่อ">
            <Input type="tel" />
          </Form.Item>
          <Form.Item label="อีเมล">
            <Input type="email" />
          </Form.Item>
          <Form.Item className="text-center pt-4">
            <Button
              htmlType="submit"
              className="text-black hover:text-primary bg-primary hover:bg-transparent duration-200 border border-primary min-w-45"
            >
              สั่งซื้อสินค้า
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  )
}

export default Register

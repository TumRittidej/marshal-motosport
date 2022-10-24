import { FC } from 'react'

import { Button, Col, DatePicker, Form, Input, Row } from 'antd'

const User: FC = () => {
  return (
    <>
      <h2 className="text-primary text-xl">ข้อมูลส่วนตัว</h2>
      <Form layout="vertical" className="pt-6">
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
        </Row>
        <Row gutter={32}>
          <Col span={12}>
            <Form.Item label="อีเมล" className="form-label--white">
              <Input type="email" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="เบอร์ติอต่อ" className="form-label--white">
              <Input type="tel" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={32}>
          <Col span={12}>
            <Form.Item label="วันเดือนปีเกิด" className="form-label--white ">
              <DatePicker
                placeholder="Select a day"
                className="w-full"
                placement="bottomLeft"
              />
            </Form.Item>
          </Col>
        </Row>
        <h2 className="text-primary text-xl pt-6 pb-4">เปลี่ยนรหัสผ่าน</h2>
        <Row gutter={32}>
          <Col span={12}>
            <Form.Item label="รหัสผ่านเดิม" className="form-label--white">
              <Input.Password type="password" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={32}>
          <Col span={12}>
            <Form.Item label="รหัสผ่านใหม่" className="form-label--white">
              <Input.Password type="password" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="ยืนยันรหัสผ่าน" className="form-label--white">
              <Input.Password type="password" />
            </Form.Item>
          </Col>
        </Row>
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

export default User

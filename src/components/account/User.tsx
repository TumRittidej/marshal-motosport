import { FC } from 'react'

import { Button, Col, DatePicker, Form, Input, Row } from 'antd'

const User: FC = () => {
  return (
    <>
      <h2 className="text-primary xl:text-xl text-lg">ข้อมูลส่วนตัว</h2>
      <Form layout="vertical" className="pt-6">
        <Row gutter={32}>
          <Col xs={24} sm={12}>
            <Form.Item
              label={<label className="text-sm">ชื่อ</label>}
              className="form-label--white"
            >
              <Input type="text" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              label={<label className="text-sm">นามสกุล</label>}
              className="form-label--white"
            >
              <Input type="text" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={32}>
          <Col xs={24} sm={12}>
            <Form.Item
              label={<label className="text-sm">อีเมล</label>}
              className="form-label--white"
            >
              <Input type="email" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              label={<label className="text-sm">เบอร์ติดต่อ</label>}
              className="form-label--white"
            >
              <Input type="tel" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={32}>
          <Col xs={24} sm={12}>
            <Form.Item
              label={<label className="text-sm">วันเดือนปีเกิด</label>}
              className="form-label--white"
            >
              <DatePicker
                placeholder="Select a day"
                className="w-full"
                placement="bottomLeft"
              />
            </Form.Item>
          </Col>
        </Row>
        <h2 className="text-primary xl:text-xl text-lg pt-6 pb-4">
          เปลี่ยนรหัสผ่าน
        </h2>
        <Row gutter={32}>
          <Col xs={24} sm={12}>
            <Form.Item
              label={<label className="text-sm">รหัสผ่านเดิม</label>}
              className="form-label--white"
            >
              <Input.Password type="password" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={32}>
          <Col xs={24} sm={12}>
            <Form.Item
              label={<label className="text-sm">รหัสผ่านใหม่</label>}
              className="form-label--white"
            >
              <Input.Password type="password" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              label={<label className="text-sm">ยืนยันรหัสผ่าน</label>}
              className="form-label--white"
            >
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

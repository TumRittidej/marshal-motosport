import { MS_REGISTER } from '@/constants/url'
import { Button, Form, Input } from 'antd'
import Link from 'next/link'
import React, { FC } from 'react'

interface LoginModalProps {
  className: string
  onClick: () => void
}

const LoginModal: FC<LoginModalProps> = ({ className = '', onClick }) => {
  return (
    <div className={className}>
      <h2 className="text-lg text-center">เข้าสู่ระบบ</h2>
      <Form layout="vertical">
        <Form.Item label="อีเมล">
          <Input type="text" />
        </Form.Item>
        <Form.Item label="รหัสผ่าน">
          <Input.Password type="text" />
          <Link href="#">
            <a target="_blank" className="underline text-gray-500">
              <div className="text-right text-xs pt-2">ลืมรหัสผ่าน?</div>
            </a>
          </Link>
        </Form.Item>
        <Form.Item className="text-center pt-4">
          <Button
            onClick={onClick}
            htmlType="submit"
            className="text-black hover:text-primary bg-primary hover:bg-transparent duration-200 border border-primary w-full"
          >
            เข้าสู่ระบบ
          </Button>
        </Form.Item>
      </Form>
      <div className="relative py-4">
        <div className="border" />
        <div className="text-gray-500 absolute top-0 left-2/4 bg-white transform -translate-x-2/4 border p-1 w-8 rounded-full">
          หรือ
        </div>
      </div>
      <div className="py-2">
        <Button
          htmlType="submit"
          className="text-white bg-blue-600 opacity-100 hover:opacity-90 duration-200 border border-blue-600 w-full"
        >
          เข้าสู่ระบบด้วย Facebook
        </Button>
      </div>
      <div>
        <Button
          htmlType="submit"
          className="text-white bg-red-500 opacity-100 hover:opacity-90 hover:bg- duration-200 border border-red-500 w-full"
        >
          เข้าสู่ระบบด้วย Google
        </Button>
      </div>
      <p className="text-xs text-gray-500 text-center pt-3">
        คุณไม่ได้เป็นสมาชิก?{' '}
        <Link href={MS_REGISTER}>
          <a target="_blank" className="underline text-gray-700">
            สมัครสมาชิก
          </a>
        </Link>
      </p>
    </div>
  )
}

export default LoginModal

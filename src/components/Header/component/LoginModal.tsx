import { ILoginRequest } from '@/interface/login'
import { MS_REGISTER } from '@/constants/url'
import { Button, Form, Input } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import LogoImage from '@/assets/logo.png'

interface ILoginModalProps {
  className?: string
  form: any
  handleSubmit: (value: ILoginRequest) => void
  isOpenModal: boolean
  handleCloseModal?: () => void
}

const LoginModal: FC<ILoginModalProps> = ({
  className = '',
  form,
  handleSubmit,
  isOpenModal,
  handleCloseModal,
}) => {
  return (
    <div
      className={`${className} md:absolute md:top-10 md:rounded md:bg-white md:w-70 md:z-102 md:p-4 md:transition md:duration-200 md:transform ${
        isOpenModal
          ? 'md:scale-100'
          : 'md:scale-0 md:-translate-y-45 md:-translate-x-20'
      }`}
    >
      <button className="w-full text-right" onClick={handleCloseModal}>
        <i className="icon-cross text-white" />
      </button>
      <div className="md:hidden sm:w-1/3 w-1/2 mx-auto">
        <Image src={LogoImage} alt="Marshal Motosport" loading="lazy" />
      </div>
      <h2 className="text-lg text-center md:text-black text-white">
        เข้าสู่ระบบ
      </h2>
      <Form
        layout="vertical"
        form={form}
        onFinish={handleSubmit}
        autoComplete="off"
        className="md:w-auto max-w-100 m-auto"
      >
        <Form.Item
          label={<p className="md:text-black text-white">อีเมล</p>}
          name="email"
        >
          <Input type="email" />
        </Form.Item>
        <Form.Item
          label={<p className="md:text-black text-white">รหัสผ่าน</p>}
          name="password"
        >
          <Input.Password type="password" />
        </Form.Item>
        <Link href="#">
          <a target="_blank" className="underline text-gray-500">
            <div className="text-right text-xs">ลืมรหัสผ่าน?</div>
          </a>
        </Link>
        <div className="text-center pt-4 pb-2">
          <Button
            onClick={() => handleSubmit}
            htmlType="submit"
            className="text-black hover:text-primary bg-primary hover:bg-transparent duration-200 border border-primary w-full"
          >
            เข้าสู่ระบบ
          </Button>
        </div>
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
      </Form>
    </div>
  )
}

export default LoginModal

import { Button, Form, Input, Radio } from 'antd'
import { FC, useState } from 'react'
import { IRegisterRequest } from '@/interface/register'
import { RegisterType } from '@/constants/register'
import Container from '@/components/container'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { I18NextNS } from '@/constants/i18next'
import { translateAndParseHTML } from '@/helpers/i18n'

const COMMON_NS = I18NextNS.COMMON
const REGISTER_NS = I18NextNS.REGISTER

const Register: FC = () => {
  const { t } = useTranslation([REGISTER_NS, COMMON_NS])
  const [showStoreInput, setShowStoreInput] = useState(false)

  const [form] = Form.useForm<IRegisterRequest>()
  const handleSubmit = (value: IRegisterRequest) => {
    // console.log(value)
  }

  return (
    <section className="xl:pt-44 md:pt-36 pt-15 bg-black">
      <div className="bg-2--position-y-5 xl:pt-20 pt-15 xl:pb-30 pb-25">
        <Container>
          <h1 className="xl:pb-10 pb-6 xl:text-4xl text-3xl text-white text-center font-semibold text-white">
            {translateAndParseHTML(REGISTER_NS, 'TITLE')}
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
                  {t('LABEL_CUSTOMER')}
                </Radio>
                <Radio
                  value={RegisterType.STORE}
                  className="text-white text-base mt-2 !hover:clear-none"
                  onClick={() => setShowStoreInput(true)}
                >
                  {t('LABEL_SHOP')}
                </Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="storeName"
              label={t('LABEL_SHOP_NAME')}
              className={`form-label--white ${
                showStoreInput ? 'block' : 'hidden'
              }`}
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              name="firstName"
              label={t('LABEL_NAME')}
              className="form-label--white"
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              name="lastName"
              label={t('LABEL_SURNAME')}
              className="form-label--white"
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              name="email"
              label={t('LABEL_EMAIL')}
              className="form-label--white"
            >
              <Input type="email" />
            </Form.Item>
            <Form.Item
              name="password"
              label={t('LABEL_PASSWORD')}
              className="form-label--white"
            >
              <Input.Password type="password" />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              label={t('LABEL_CONFIRM_PASSWORD')}
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
                {t('LABEL_CREATE_ACCOUNT')}
              </Button>
            </Form.Item>
          </Form>
        </Container>
      </div>
    </section>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [REGISTER_NS, COMMON_NS])),
    },
  }
}

export default Register

import Container from '@/components/container'
import Link from 'next/link'
import React, { useState } from 'react'
import { MinusOutlined, PlusOutlined, DownOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import {
  Button,
  Col,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Checkbox,
  Menu,
  Dropdown,
  Space,
} from 'antd'
import { Option } from 'antd/lib/mentions'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import type { RadioChangeEvent } from 'antd'
import ProductImage from '@/assets/img/home/product-1.png'
import Image from 'next/image'

const User = () => {
  const router = useRouter()

  const menusUser = [
    {
      href: '/user',
      text: 'ข้อมูลส่วนตัว',
    },
    {
      href: '/',
      text: 'ที่อยู่การจัดส่ง',
    },
    {
      href: '/',
      text: 'รายการสั่งซื้อ',
    },
  ]
  const onChange = (value: string) => {
    console.log(`selected ${value}`)
  }

  const onSearch = (value: string) => {
    console.log('search:', value)
  }

  const handleChangeDefaultAddress = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`)
  }

  const [value, setValue] = useState(1)
  const handleChangeAddress = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }

  const [rotateArrow, setRotateArrow] = useState(false)

  const menu = (
    <Menu
      items={[
        {
          label: (
            <Button
              type="link"
              onClick={() => setRotateArrow(false)}
              className="text-black hover:text-primary w-full text-left p-0"
            >
              ล่าสุด
            </Button>
          ),
          key: '0',
        },
        {
          label: (
            <Button
              type="link"
              onClick={() => setRotateArrow(false)}
              className="text-black hover:text-primary w-full text-left p-0"
            >
              เก่าสุด
            </Button>
          ),
          key: '1',
        },
      ]}
    />
  )
  return (
    <section className="pt-44 bg-black">
      <div className="bg-2--position-y-5 py-20">
        <Container>
          <h1 className="text-4xl text-primary font-semibold mb-8">
            บัญชีผู้ใช้
          </h1>
          <div className="flex gap-12">
            <div className="w-1/3">
              <div className="border border-white opacity-20 mb-8 w-3/4" />
              <ul>
                {menusUser.map((menu, index) => {
                  return (
                    <li key={index} className="mb-4 last:mb-4">
                      <Link href={menu.href}>
                        <a
                          className={`text-base flex items-center gap-2 hover:text-primary ${
                            router.asPath === menu.href
                              ? 'text-primary'
                              : 'text-white'
                          }`}
                        >
                          <MinusOutlined style={{ fontSize: '10px' }} />
                          {menu.text}
                        </a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="w-2/3">
              {/* ข้อมูลส่วนตัว */}
              {/* <h2 className="text-primary text-xl">ข้อมูลส่วนตัว</h2>
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
                    <Form.Item label="ชื่อ" className="form-label--white">
                      <Input type="email" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="นามสกุล" className="form-label--white">
                      <Input type="tel" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={32}>
                  <Col span={12}>
                    <Form.Item
                      label="วันเดือนปีเกิด"
                      className="form-label--white "
                    >
                      <DatePicker
                        placeholder="Select a day"
                        className="w-full"
                        placement="bottomLeft"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <h2 className="text-primary text-xl pt-6 pb-4">
                  เปลี่ยนรหัสผ่าน
                </h2>
                <Row gutter={32}>
                  <Col span={12}>
                    <Form.Item
                      label="รหัสผ่านเดิม"
                      className="form-label--white"
                    >
                      <Input.Password type="password" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={32}>
                  <Col span={12}>
                    <Form.Item
                      label="รหัสผ่านใหม่"
                      className="form-label--white"
                    >
                      <Input.Password type="password" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="ยืนยันรหัสผ่าน"
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
              </Form> */}

              {/* ที่อยู่การจัดส่ง 1 */}
              {/* <div className="flex justify-between">
                <h2 className="text-primary text-xl">ที่อยู่การจัดส่ง</h2>
                <Button
                  type="link"
                  className="text-primary text-lg flex items-center"
                  icon={<PlusOutlined />}
                >
                  เพิ่มที่อยู่การจัดส่ง
                </Button>
              </div> */}

              {/* <Form layout="vertical" className="pt-6">
                <Row gutter={32}>
                  <Col span={12}>
                    <Form.Item
                      label="ชื่อ-นามสกุล ผู้รับสินค้า"
                      className="form-label--white"
                    >
                      <Input type="text" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="เบอร์ติดต่อ"
                      className="form-label--white"
                    >
                      <Input type="tel" />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  label="ที่อยู่การจัดส่ง"
                  className="form-label--white"
                >
                  <Input
                    type="text"
                    placeholder="ชื่อที่อยู่ หมู่บ้าน, บ้านเลขที่, ตึก, อาคาร"
                  />
                </Form.Item>
                <Row gutter={32}>
                  <Col span={12}>
                    <Form.Item
                      label="ตำบล / แขวง"
                      className="form-label--white"
                    >
                      <Select
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
                  <Col span={12}>
                    <Form.Item
                      label="อำเภอ / เขต"
                      className="form-label--white"
                    >
                      <Select
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
                </Row>
                <Row gutter={32}>
                  <Col span={12}>
                    <Form.Item label="จังหวัด" className="form-label--white">
                      <Select
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
                  <Col span={12}>
                    <Form.Item
                      label="รหัสไปรษณีย์"
                      className="form-label--white"
                    >
                      <Input type="number" />
                    </Form.Item>
                  </Col>
                </Row>
                <Checkbox
                  onChange={handleChangeDefaultAddress}
                  className="text-white text-base mt-2 !hover:clear-none"
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
              </Form> */}

              {/* ที่อยู่การจัดส่ง 2 */}
              {/* <Radio.Group
                onChange={handleChangeAddress}
                value={value}
                className="w-full pt-6"
              >
                <div className="border border-primary rounded-md p-5 mb-4">
                  <div className="flex justify-between ">
                    <p className="text-white text-base font-light">
                      รุ่งเรือง เกียงไกรไพศาล <br />
                      35 ซอยรัชดาภิเษก 46 ถนนรัชดาภิเษก ลาดยาว จตุจักร กรุงเทพฯ
                      10900 <br />
                      0629162498
                    </p>
                    <div>
                      <Button type="link" className="text-white text-base p-0">
                        <div className="underline">แก้ไข</div>
                      </Button>
                    </div>
                  </div>
                  <Radio value={1} className="text-base text-white mt-4 p-0">
                    ตั้งเป็นค่าเริ่มต้นสำหรับที่อยู่การจัดส่ง
                  </Radio>
                </div>
                <div className="border border-primary rounded-md p-5">
                  <div className="flex justify-between ">
                    <p className="text-white text-base font-light">
                      รุ่งเรือง เกียงไกรไพศาล <br />
                      35 ซอยรัชดาภิเษก 46 ถนนรัชดาภิเษก ลาดยาว จตุจักร กรุงเทพฯ
                      10900 <br />
                      0629162498
                    </p>
                    <div>
                      <Button type="link" className="text-white text-base p-0">
                        <div className="underline">แก้ไข</div>
                      </Button>
                      <Button
                        type="link"
                        className="text-white text-base py-0 pr-0"
                      >
                        <div className="underline">ลบ</div>
                      </Button>
                    </div>
                  </div>
                  <Radio value={2} className="text-base text-white mt-4">
                    ตั้งเป็นค่าเริ่มต้นสำหรับที่อยู่การจัดส่ง
                  </Radio>
                </div>
              </Radio.Group> */}

              {/* รายการสั่งซื้อ */}
              {/* <h2 className="text-primary text-xl">รายการสั่งซื้อ</h2>
              <div className="text-right">
                <Dropdown
                  overlay={menu}
                  trigger={['click']}
                  className="border border-white px-3 py-2 rounded"
                  onOpenChange={(open) => setRotateArrow(open)}
                >
                  <a
                    onClick={() => setRotateArrow(!rotateArrow)}
                    className="text-white text-base"
                  >
                    <Space>
                      เรียงลำดับจาก
                      <DownOutlined
                        className={`text-xs transform transition duration-300 ${
                          rotateArrow ? 'rotate-180 -translate-y-1' : 'rotate-0'
                        }`}
                      />
                    </Space>
                  </a>
                </Dropdown>
              </div>
              <div>
                <div className="border border-white p-4 mb-4 mt-6 rounded-md">
                  <div className="flex justify-between">
                    <div className="text-white">
                      <p className="font-semibold">
                        หมายเลขสั่งซื้อ :
                        <span className="text-primary"> MSD00001</span> <br />
                      </p>
                      <p>29/09/2022, 09:39</p>
                    </div>
                    <div className="text-white">
                      <span className="text-primary text-xl font-medium block text-right">
                        ฿ 79,600
                      </span>
                      <p className="text-base">
                        สถานะการชำระเงิน{' '}
                        <span className="text-primary">ยังไม่ชำระ</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex overflow-hidden justify-between pt-4">
                    <div className="flex gap-4 w-3/4 overflow-x-auto overflow-y-hidden h-[100px]">
                      <div>
                        <Image
                          height={100}
                          width={100}
                          src={ProductImage}
                          alt="Helmet"
                          layout="fixed"
                          // layout="responsive"
                          objectFit="cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <Image
                          height={100}
                          width={100}
                          src={ProductImage}
                          alt="Helmet"
                          layout="fixed"
                          // layout="responsive"
                          objectFit="cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <Image
                          height={100}
                          width={100}
                          src={ProductImage}
                          alt="Helmet"
                          layout="fixed"
                          // layout="responsive"
                          objectFit="cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <Image
                          height={100}
                          width={100}
                          src={ProductImage}
                          alt="Helmet"
                          layout="fixed"
                          // layout="responsive"
                          objectFit="cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <Image
                          height={100}
                          width={100}
                          src={ProductImage}
                          alt="Helmet"
                          layout="fixed"
                          // layout="responsive"
                          objectFit="cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <Image
                          height={100}
                          width={100}
                          src={ProductImage}
                          alt="Helmet"
                          layout="fixed"
                          // layout="responsive"
                          objectFit="cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <Image
                          height={100}
                          width={100}
                          src={ProductImage}
                          alt="Helmet"
                          layout="fixed"
                          // layout="responsive"
                          objectFit="cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <Image
                          height={100}
                          width={100}
                          src={ProductImage}
                          alt="Helmet"
                          layout="fixed"
                          // layout="responsive"
                          objectFit="cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="w-1/5">
                      <Button className="text-black hover:text-primary bg-primary hover:bg-transparent duration-200 border border-primary w-full">
                        <div>สั่งซื้อสินค้า</div>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border border-white p-4 mb-4 mt-6 rounded-md">
                  <div className="flex justify-between">
                    <div className="text-white">
                      <p className="font-semibold">
                        หมายเลขสั่งซื้อ :
                        <span className="text-primary"> MSD00001</span> <br />
                      </p>
                      <p>29/09/2022, 09:39</p>
                    </div>
                    <div className="text-white">
                      <span className="text-primary text-xl font-medium block text-right">
                        ฿ 79,600
                      </span>
                      <p className="text-base">
                        สถานะการชำระเงิน{' '}
                        <span className="font-semibold">ชำระแล้ว</span>
                        <span className="px-2">|</span>
                        <span className="text-primary">ยังไม่ชำระ</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex overflow-hidden justify-between pt-4">
                    <div className="flex gap-4 w-3/4 overflow-x-auto overflow-y-hidden h-[100px]">
                      <div>
                        <Image
                          height={100}
                          width={100}
                          src={ProductImage}
                          alt="Helmet"
                          layout="fixed"
                          // layout="responsive"
                          objectFit="cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <Image
                          height={100}
                          width={100}
                          src={ProductImage}
                          alt="Helmet"
                          layout="fixed"
                          // layout="responsive"
                          objectFit="cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <Image
                          height={100}
                          width={100}
                          src={ProductImage}
                          alt="Helmet"
                          layout="fixed"
                          // layout="responsive"
                          objectFit="cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <Image
                          height={100}
                          width={100}
                          src={ProductImage}
                          alt="Helmet"
                          layout="fixed"
                          // layout="responsive"
                          objectFit="cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <Image
                          height={100}
                          width={100}
                          src={ProductImage}
                          alt="Helmet"
                          layout="fixed"
                          // layout="responsive"
                          objectFit="cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <Image
                          height={100}
                          width={100}
                          src={ProductImage}
                          alt="Helmet"
                          layout="fixed"
                          // layout="responsive"
                          objectFit="cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <Image
                          height={100}
                          width={100}
                          src={ProductImage}
                          alt="Helmet"
                          layout="fixed"
                          // layout="responsive"
                          objectFit="cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <Image
                          height={100}
                          width={100}
                          src={ProductImage}
                          alt="Helmet"
                          layout="fixed"
                          // layout="responsive"
                          objectFit="cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="w-1/5">
                      <Button className="text-black hover:text-primary bg-primary hover:bg-transparent duration-200 border border-primary w-full">
                        <div>สั่งซื้อสินค้า</div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default User

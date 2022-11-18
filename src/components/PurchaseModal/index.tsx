import { Form, Modal, Select, TimePicker } from 'antd'
import Image from 'next/image'
import { Option } from 'antd/lib/mentions'
import React, { ChangeEvent, FC, MouseEvent, useEffect, useState } from 'react'
import moment from 'moment'
import imageUploadSimple from '@/assets/image-upload.png'

interface IPurchaseModal {
  isOpenModal: boolean
  handleSubmit: (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void
  handleCancel: (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void
}

const PurchaseModal: FC<IPurchaseModal> = ({
  isOpenModal,
  handleCancel,
  handleSubmit,
}) => {
  const [base64Image, setBase64Image] = useState('')
  const handleChangeUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files?.length) return
    const file = files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      if (reader.result) {
        onLoad(reader.result as string)
      }
    }
    const onLoad = (fileString: string) => {
      if (fileString) {
        setBase64Image(fileString as string)
        e.target.value = ''
      }
    }
  }

  useEffect(() => {
    if (!isOpenModal) setBase64Image('')
  }, [isOpenModal])

  return (
    <Modal
      open={isOpenModal}
      onOk={(e) => handleSubmit(e)}
      onCancel={(e) => handleCancel(e)}
      okText="บันทึก"
      cancelText="ยกเลิก"
      className="submit--btn cancel--btn modal--header"
      centered
      maskClosable={false}
      title="ชำระเงิน"
      closeIcon={<i className="icon-cross text-black" />}
      width={450}
    >
      <Form layout="vertical">
        <Form.Item label="ชำระจากธนาคาร">
          <Select
            optionFilterProp="children"
            className="w-full"
            // onChange={onChange}
            // onSearch={onSearch}
            bordered={false}
            autoFocus={false}
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
        <Form.Item label="ชำระเข้าธนาคาร">
          <Select
            optionFilterProp="children"
            className="w-full"
            // onChange={onChange}
            // onSearch={onSearch}
            bordered={false}
            autoFocus={false}
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
        <div className="flex justify-between gap-8">
          <Form.Item label="เวลาชำระเงิน" className="w-full">
            <TimePicker
              className="w-full"
              popupClassName="timepick--ok-btn timepick--now-btn"
              format={'HH:mm'}
            />
          </Form.Item>
          <Form.Item
            label="อัพโหลดรูปภาพใบเสร็จรับเงิน"
            className="w-full relative"
          >
            <input
              type="file"
              className="absolute inset-0 opacity-0 z-1"
              accept="image/png, image/jpeg"
              onChange={(e) => handleChangeUploadImage(e)}
            />
            <div
              className={`border border-dashed border-black text-center rounded-lg relative ${
                base64Image ? 'p-2' : 'p-8'
              }`}
            >
              <Image
                src={base64Image ? base64Image : imageUploadSimple}
                alt="upload"
                width={base64Image ? 500 : 50}
                height={base64Image ? 500 : 50}
                objectFit="cover"
              />
              <p
                className={`text-xs pt-2 text-gray-500 ${
                  base64Image ? 'hidden' : 'block'
                }`}
              >
                ไฟล์ภาพขนาดไม่เกิน 3M <br />
                Jpg, Png, Jpeg
              </p>
            </div>
          </Form.Item>
        </div>
      </Form>
    </Modal>
  )
}

export default PurchaseModal

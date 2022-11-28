import { Form, FormInstance, Modal, Select, TimePicker } from 'antd'
import Image from 'next/image'
import { Option } from 'antd/lib/mentions'
import React, { ChangeEvent, FC, MouseEvent, useEffect, useState } from 'react'
import imageUploadSimple from '@/assets/image-upload.png'
import { IPaymentBankRequest } from '@/interface/purchase'

interface IPurchaseModal {
  isOpenModal: boolean
  handleSubmit: (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void
  handleCancel: (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void
  form: FormInstance<IPaymentBankRequest>
}

const PurchaseModal: FC<IPurchaseModal> = ({
  isOpenModal,
  handleCancel,
  handleSubmit,
  form,
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
        form.setFieldValue('uploadImage', fileString)
        e.target.value = ''
      }
    }
  }

  useEffect(() => {
    const bodyEl = document.getElementsByTagName('body')[0]
    if (!isOpenModal) setBase64Image('')

    if (isOpenModal) {
      bodyEl.style.overflow = 'hidden'
    } else {
      bodyEl.style.overflow = 'auto'
    }
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
      keyboard
      maskClosable={false}
      title="ชำระเงิน"
      closeIcon={<i className="icon-cross text-black" />}
      width={450}
    >
      <Form layout="vertical" form={form}>
        <Form.Item
          label={<label className="text-sm">ชำระจากธนาคาร</label>}
          name="fromBank"
        >
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
        <Form.Item
          label={<label className="text-sm">ชำระเข้าธนาคาร</label>}
          name="toBank"
        >
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
        <div className="flex flex-col sm:flex-row justify-between sm:gap-8 gap-2">
          <Form.Item
            name="time"
            label={<label className="text-sm">เวลาชำระเงิน</label>}
            className="w-full"
          >
            <TimePicker
              className="w-full"
              popupClassName="timepick--ok-btn timepick--now-btn"
              format={'HH:mm'}
            />
          </Form.Item>
          <Form.Item
            name="uploadImage"
            label={
              <label className="text-sm">อัพโหลดรูปภาพใบเสร็จรับเงิน</label>
            }
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
                width={base64Image ? 200 : 50}
                height={base64Image ? 200 : 50}
                objectFit="cover"
                loading="lazy"
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

import { Dropdown, Menu, Space } from 'antd'
import { Dispatch, FC, SetStateAction } from 'react'
import { CaretDownOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { MS_ACCOUNT_ORDER, MS_ACCOUNT_USER } from '@/constants/url'

interface DropdownHeaderProps {
  className: string
  handleClickLogout?: () => void
  rotate: boolean
  setRotate: Dispatch<SetStateAction<boolean>>
}

const DropdownHeader: FC<DropdownHeaderProps> = ({
  className = '',
  handleClickLogout,
  rotate,
  setRotate,
}) => {
  const menu = (
    <Menu
      className="pt-2 px-2 xl:w-50 w-42 rounded dropdown--header dropdown--list"
      items={[
        {
          label: (
            <div onClick={() => setRotate(false)}>
              <Link href={MS_ACCOUNT_USER}>
                <a className="block xl:text-base text-sm text-black hover:text-primary">
                  ข้อมูลส่วนตัว
                </a>
              </Link>
            </div>
          ),
          key: '0',
        },
        {
          label: (
            <div onClick={() => setRotate(false)}>
              <Link href={MS_ACCOUNT_ORDER}>
                <a className="block xl:text-base text-sm text-black hover:text-primary">
                  รายการสั่งซื้อ
                </a>
              </Link>
            </div>
          ),
          key: '1',
        },
        {
          type: 'divider',
        },
        {
          label: (
            <div
              className="flex items-center gap-2 text-black hover:text-primary transition duration-300"
              onClick={handleClickLogout}
            >
              <i className="icon-logout xl:text-xl text-lg" />
              <p className="xl:text-base text-sm">ออกจากระบบ</p>
            </div>
          ),
          key: '3',
        },
      ]}
    />
  )
  return (
    <Dropdown
      className={className}
      overlay={menu}
      trigger={['click']}
      onOpenChange={(open) => setRotate(open)}
    >
      <a onClick={() => setRotate(!rotate)}>
        <Space className="text-black">
          <i className="icon-user text-xl" />
          Developer
          <CaretDownOutlined
            className={`transform transition duration-300 ${rotate ? 'rotate-180' : 'rotate-0'}`}
          />
        </Space>
      </a>
    </Dropdown>
  )
}

export default DropdownHeader

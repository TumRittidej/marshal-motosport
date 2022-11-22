import Image from 'next/image'
import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
} from 'react'
import LogoImage from '@/assets/logo.png'

interface IDrawerProps {
  children?: ReactNode
  isOpenDrawer: boolean
  setIsOpenDrawer: Dispatch<SetStateAction<boolean>>
  position?: `${Position}`
}

enum Position {
  LEFT = 'left',
}

const Drawer: FC<IDrawerProps> = ({
  position = 'left',
  isOpenDrawer,
  setIsOpenDrawer,
  children,
}) => {
  const drawerRef = useRef<HTMLDivElement>(null)

  const renderDrawer = () => {
    if (!isOpenDrawer) {
      const positionDrawer = {
        [Position.LEFT]: `-left-50 top-0 bottom-0 w-0`,
      }
      return positionDrawer[position]
    } else {
      const positionDrawer = {
        [Position.LEFT]: `left-0 top-0 bottom-0 sm:w-[397px] w-full`,
      }
      return positionDrawer[position]
    }
  }

  useEffect(() => {
    const bodyEl = document.getElementsByTagName('body')[0]
    if (isOpenDrawer) {
      bodyEl.style.overflow = 'hidden'
    } else {
      bodyEl.style.overflow = 'auto'
    }
  }, [isOpenDrawer])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setIsOpenDrawer(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [setIsOpenDrawer])

  return (
    <>
      <div
        ref={drawerRef}
        className={`fixed bg-black z-10000 transition-all duration-300 ${renderDrawer()} p-8`}
      >
        <div className="flex items-center justify-between gap-2">
          <div className="w-1/2">
            <Image
              src={LogoImage}
              alt="Marshal Motosport"
              layout="responsive"
              loading="lazy"
            />
          </div>
          <button onClick={() => setIsOpenDrawer(false)}>
            <i className="icon-cross text-white text-xl" />
          </button>
        </div>
        {children}
      </div>
    </>
  )
}

export default Drawer

import React, { ReactNode, FC } from 'react'

interface ContainerProps {
  className?: string
  children: ReactNode
}
const Container: FC<ContainerProps> = ({ className = '', children }) => {
  return (
    <div
      className={`${className} mx-auto px-4 sm:px-6 md:px-0 md:max-w-[900px] lg:max-w-[1100px] xl:max-w-[1400px]`}
    >
      {children}
    </div>
  )
}

export default Container

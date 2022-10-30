import React, { ReactNode, FC } from 'react'

interface IContainerProps {
  children: ReactNode
  paddingClassName?: string
}
const Container: FC<IContainerProps> = ({
  children,
  paddingClassName = 'xl:px-12',
}) => {
  return (
    <div
      className={`${
        paddingClassName ? paddingClassName : 'xl:px-12'
      } mx-auto px-4 sm:px-6 md:px-0 md:max-w-[900px] lg:max-w-[1100px] xl:max-w-[1316px]`}
    >
      {children}
    </div>
  )
}

export default Container

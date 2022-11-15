import React, { createContext, FC, ReactNode, useEffect, useState } from 'react'

type BreakpointProviderProps = {
  children: ReactNode
}

type Nullable<T> = T | null

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type BreakpointCtxType = {
  breakpoint: Breakpoint
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  windowWidth: number
}
export const ScreenCtx = createContext<Nullable<BreakpointCtxType>>(null)

const ScreenProvider: FC<BreakpointProviderProps> = ({ children }) => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('md')
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? innerWidth : 0
  )

  useEffect(() => {
    const handleWindowWidth = (): void => {
      const breakpoint = getBreakpointByWindowWidth(innerWidth)
      setWindowWidth(innerWidth)
      setBreakpoint(breakpoint)
    }

    addEventListener('resize', handleWindowWidth)
    handleWindowWidth()
    return () => removeEventListener('resize', handleWindowWidth)
  }, [])

  const isMobile = ['xs'].includes(breakpoint)
  const isTablet = ['sm', 'md'].includes(breakpoint)
  const isDesktop = ['lg', 'xl'].includes(breakpoint)

  function getBreakpointByWindowWidth(width: number): Breakpoint {
    if (width < 600) {
      return 'xs'
    } else if (width >= 600 && width < 960) {
      return 'sm'
    } else if (width >= 960 && width < 1200) {
      return 'md'
    } else if (width >= 1200 && width < 1500) {
      return 'lg'
    }
    return 'xl'
  }

  return (
    <ScreenCtx.Provider
      value={{ isMobile, isTablet, isDesktop, breakpoint, windowWidth }}
    >
      {children}
    </ScreenCtx.Provider>
  )
}

export default ScreenProvider

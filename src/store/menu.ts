import create from 'zustand'

interface IMenuContactStore {
  isActiveSectionContact: boolean
  setIsActiveSectionContact: (isActive: boolean) => void
}

export const menuContactStore = create<IMenuContactStore>((set) => ({
  isActiveSectionContact: false,
  setIsActiveSectionContact: (isActive: boolean) => {
    set({ isActiveSectionContact: isActive })
  },
}))

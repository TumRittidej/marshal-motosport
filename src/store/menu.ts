import create from 'zustand'

export const MenuStore = create((set) => {
  isActiveSectionContact: false
  setIsActiveSectionContact: (isActive: boolean) => {
    set({ isActiveSectionContact: isActive })
  },
})

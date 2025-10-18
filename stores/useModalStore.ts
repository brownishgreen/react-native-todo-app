import { create } from 'zustand'

type ModalStore = {
  isVisible: boolean
  openModal: () => void
  closeModal: () => void
}

export const useModalStore = create<ModalStore>((set) => ({
  isVisible: false,
  openModal: () => set({ isVisible: true }),
  closeModal: () => set({ isVisible: false }),
}))
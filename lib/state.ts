import { create } from "zustand"

interface formStoreState {
  formIsOpen: boolean
  setFormIsOpen: (payload: boolean) => void
}

const useFormIsOpenStore = create<formStoreState>((set) => ({
  formIsOpen: true,
  setFormIsOpen: (payload: boolean) =>
    set((state) => ({ formIsOpen: payload })),
}))

export default useFormIsOpenStore

import { create } from "zustand";

export const useModalStatusStore = create((set) => ({
  formModal: {
    isOpen: false,
    title: "",
    Modal: undefined,
  },
  confirmModal: {
    isOpen: false,
    message: "",
    subFn: undefined,
  },
  setModal: (value) =>
    set((state) => ({
      ...state,
      formModal: { ...state.formModal, ...value },
    })),
  setDefaultForm: () => {
    set({
      formModal: {
        isOpen: false,
        title: "",
        Modal: undefined,
      },
    });
  },
  setDefaultConfirm: () => {
    set({
      confirmModal: {
        isOpen: false,
        message: "",
        subFn: undefined,
      },
    });
  },
}));

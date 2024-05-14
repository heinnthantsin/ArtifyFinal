import React from "react";
import { useModalStatusStore } from "../../store/modalStatus";
import { useCartStore } from "../../store/cart-store";

export default function Modal() {
  const modalStatusStore = useModalStatusStore();
  const cartStore = useCartStore();
  const closeModal = () => {
    modalStatusStore.setDefaultForm();
    cartStore.setDefault();
  };
  return (
    modalStatusStore.formModal.isOpen && (
      <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50">
        <div
          className="fixed bg-gray-600/40 top-0 left-0 w-screen h-screen z-[60]"
          onClick={modalStatusStore.setDefaultForm}
        ></div>
        <div className="bg-white shadow-sm p-5 rounded-md z-[70]">
          <p>{modalStatusStore.formModal.title}</p>
          <modalStatusStore.formModal.Modal />
          <button
            className="block text-[0.8rem] bg-[#d3d8e4] py-1 px-4 mx-auto mt-3 rounded-md cursor-pointer"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    )
  );
}

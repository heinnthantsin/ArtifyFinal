import React, { useState } from "react";
import Button from "../Button";
import { useModalStatusStore } from "../../store/modalStatus";
import AfterBook from "../messageModal/AfterBook";

const EventDetailsModal = ({ event, onClose }) => {
  const modalStatusStore = useModalStatusStore();
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
    onClose();
  };

  const showSuccessMessage = () => {
    setShowModal(false);
    modalStatusStore.setModal({
      isOpen: true,
      title: "Booking successful.",
      Modal: AfterBook,
    });
  };

  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg p-8 max-w-xs md:max-w-xl lg:max-w-4xl z-50 overflow-y-auto">
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-bold text-titleColor">{event.title}</h2>
          <button
            onClick={handleCloseModal}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <p className="text-gray-600 text-sm md:text-[20px] lg:text-lg mb-4">
          {event.description}
        </p>
        <p className="text-gray-600 mb-4">
          {" "}
          <span className="font-extrabold pr-2">Date:</span> {event.date}
        </p>
        <p className="text-gray-600 mb-4">
          {" "}
          <span className="font-extrabold pr-2">Time: </span> {event.time}
        </p>
        <p className="text-gray-600 mb-4">
          {" "}
          <span className="font-extrabold pr-2"> Location:</span>{" "}
          {event.location}
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-extrabold pr-2">Instructor/Speaker:</span>{" "}
          {event.instructor || event.speaker || event.facilitator}
        </p>
        <p className="text-gray-600 mb-4">
          {" "}
          <span className="font-extrabold pr-2">Price:</span> {event.price}
        </p>
        <div onClick={showSuccessMessage}>
          <Button buttonName={"Book Now"} />
        </div>
      </div>
    </div>
  );
};

export default EventDetailsModal;

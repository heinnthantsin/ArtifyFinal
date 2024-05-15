import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { useModalStatusStore } from "../../store/modalStatus";
import AfterSendEmail from "../messageModal/AfterSendEmail";

export default function ContactUsForm() {
  const modalStatusStore = useModalStatusStore();
  const showModal = () => {
    modalStatusStore.setModal({
      isOpen: true,
      title: "Your email was send.",
      Modal: AfterSendEmail,
    });
  };
  return (
    <Card color="transparent" className="p-5 shadow-lg">
      <Typography variant="h4" color="blue-gray" className="text-center mb-4">
        Contact Us
      </Typography>
      <Typography color="gray" className="mt-1 font-normal text-center">
        Nice to meet you! Enter your review or whatever.
      </Typography>
      <form className="mt-8 mb-2 w-full max-w-md mx-auto">
        <div className="mb-1 flex flex-col gap-6">
          <Input type="text" label="Your Name" value="JohnDoe" className="w-full" />
          <Input type="email" label="Your Email" value="johndoe333@gmail.com" className="w-full" />
          <Textarea size="lg" label="Description" value="Something interesting" className="w-full" />
        </div>
        <Button
          className="bg-[#5c5e60] text-gray-300 rounded p-1.5 md:p-2 lg:px-4 font-semibold hover:bg-[#3c4d5d] transition duration-500 mt-4"
          fullWidth
          onClick={showModal}
        >
          Send
        </Button>
      </form>
    </Card>
  );
}

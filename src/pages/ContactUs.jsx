import React from "react";
import { TabTitle } from "../utils/GeneralFunctions";
import style from "../assets/style/responsive";
import FormCompo from "../components/form/ContactUsForm";

function ContactUs() {
  TabTitle("Artify | Contact Us");

  return (
    <section className="min-h-[80vh] px-5">
      <h1 className={`${style.responsiveTitle} text-center lg:mb-10 mb-8`}>
        About Us
      </h1>
      <section className="flex flex-col sm:flex-col lg:flex-row sm:gap-5  md:align-center sm:min-h-[600px]">

        <div className="lg:w-[50%] h-[50vh] sm:min-h-[50vh] rounded-2xl">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="src\assets\img\aboutus.jpg"
          />
        </div>
        <div className=" lg:w-[50%] h-full">
          <p className={`${style.responsiveContent} leading-20`}>
            Welcome to Artify, where creativity meets community. We believe in
            the transformative power of art and strive to support artists by
            showcasing their unique creations and connecting them with art
            enthusiasts. Founded by artists and art lovers, Artify aims to make
            art accessible to everyone. Our platform offers unique, handcrafted
            pieces and hosts events to celebrate and bring people together
            through art.
          </p>
        </div>
      </section>
      <section className="w-full">
        <div className="w-fit mx-auto">
          <FormCompo />
        </div>
      </section>
    </section>
  );
}

export default ContactUs;

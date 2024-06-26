import React from "react";
import { ContactForm } from "./ContactForm";
import Heading from "../Heading";
import WaterDropGrid from "./WaterDropGrid";

const ContactPage = () => {
  return (
    <div>
      <div className="my-5">
      <Heading heading="Contact Me" />
      </div>
      <div className="relative flex flex-col items-center justify-center mt-10 sm:mt-5">
        <div className="max-w-4xl h-full absolute mx-auto flex justify-center items-center z-0 mt-5">
          <WaterDropGrid />
        </div>
        <div className="relative z-10 w-full max-w-3xl mt-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

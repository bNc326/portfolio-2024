import React from "react";
import Lottie from "lottie-react";
import ContactLottie from "../../assets/contact.json";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <section className="w-full flex justify-center py-8">
      <div className="w-11/12 h-full max-w-[1536px] rounded-3xl flex flex-col tablet:flex-row overflow-hidden shadow-md">
        <div className="w-full bg-[#242424] pb-[100px]">
          <Lottie
            animationData={ContactLottie}
            style={{ width: "80%", height: "100%" }}
          />
        </div>
        <div className="w-full relative bg-[#333333] flex justify-center">
          <div className="absolute left-0 -top-[148px] w-full h-[150px] tablet:-left-[150px] tablet:top-0 tablet:w-[150px] tablet:h-full contact-bg"></div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;

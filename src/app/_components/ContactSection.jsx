import React from "react";

const ContactSection = () => {
  return (
    <section className="pt-[30px] md:px-[140px]">
      <div>
        <h2 className="suisse-white-48-500">Get in touch</h2>
        <p className="inter-white-20-400  opacity-50 mt-2.5 w-1/2">
          Have a question or want to start a project? Contact me, and let&apos;s
          make your ideas come to life!
        </p>
      </div>

      <div className="form-container md:w-[764px] md:mt-[35px] md:mb-[30px]">
        <h3 className="suisse-white-26-500 mb-[35px]">Contact Form</h3>
        <form className="w-full">
          <div className="mb-[15px]">
            <label htmlFor="name" className="inter-white-20-500 mb-2.5">
              First Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="First Name"
              className="w-full input-field"
            />
          </div>
          <div className="mb-[15px]">
            <label htmlFor="email" className="inter-white-20-500 mb-2.5">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full input-field"
            />
          </div>
          <div className="mb-[35px]">
            <label htmlFor="message" className="inter-white-20-500 mb-2.5">
              Project Details
            </label>
            <textarea
              id="message"
              placeholder="How can I help you?"
              className="w-full input-field"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-fit white-black-button inter-black-22-500 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

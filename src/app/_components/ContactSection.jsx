"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import getintouch from "/public/gradients/getintouch.png";
import heroleft from "/public/gradients/heroleft.png";
import Image from "next/image";

const ContactSection = () => {
  const router = useRouter();
  // Validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  // Initial values
  const initialValues = {
    firstName: "",
    email: "",
    message: "",
  };

  // Form submission handler
  const onSubmit = async (values) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Email sent successfully:", data);
        // alert("Confirmation email has been sent!");
        router.push("/thankyou");
      } else {
        console.error("Failed to send email");
        alert("There was an error sending the email.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error sending the email.");
    }
  };

  return (
    <section className="pt-[30px] md:px-[140px] md:mb-[70px] relative">
      {/* <Image
        src={getintouch}
        alt="gradient"
        className="absolute bottom-0 h-full"
      /> */}
      {/* <Image src={heroleft} alt="gradient" className="absolute bottom-0" /> */}
      <div>
        <h2 className="suisse-white-48-500">Get in touch</h2>
        <p className="inter-white-20-400  opacity-50 mt-2.5 w-1/2">
          Have a question or want to start a project? Contact me, and let&apos;s
          make your ideas come to life!
        </p>
      </div>

      <div className="form-container md:w-[764px] md:mt-[35px] md:mb-[30px]">
        <h3 className="suisse-white-26-500 md:mb-[35px]">Contact Form</h3>
        {/* Form */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="w-full">
              <div className="mb-[15px]">
                <label htmlFor="name" className="inter-white-20-500 mb-2.5">
                  First Name
                </label>
                <Field
                  name="firstName"
                  type="text"
                  id="name"
                  placeholder="First Name"
                  className="w-full input-field"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500 text-sm mt-0.5 text-left"
                />
              </div>
              <div className="mb-[15px]">
                <label htmlFor="email" className="inter-white-20-500 mb-2.5">
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full input-field"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-0.5 text-left"
                />
              </div>
              <div className="mb-[35px]">
                <label htmlFor="message" className="inter-white-20-500 mb-2.5">
                  Project Details
                </label>
                <Field
                  name="message"
                  as="textarea"
                  id="message"
                  placeholder="How can I help you?"
                  className="w-full input-field"
                  rows="4"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm mt-0.5 text-left"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-fit white-black-button inter-black-22-500 transition"
              >
                Send Message
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ContactSection;

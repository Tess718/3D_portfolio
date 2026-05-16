"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useInView } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";

import TitleHeader from "../components/TitleHeader";
// Lazy load the 3D component
const ContactExperience = dynamic(
  () => import("../components/Models/contact/ContactExperience"),
  { ssr: false }
);

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "",
  });

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "-50% 0px -50% 0px" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || process.env.VITE_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || process.env.VITE_EMAILJS_TEMPLATE_ID || "",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || process.env.VITE_EMAILJS_PUBLIC_KEY || ""
      );

      setForm({ name: "", email: "", project: "" });
      setStatus("success");

      // Auto-hide the success message after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
           centered={true}
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="project">Your Message</label>
                  <textarea
                    id="project"
                    name="project"
                    value={form.project}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows={5}
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <Image src="/images/arrow-down.svg" alt="arrow" width={20} height={20} />
                    </div>
                  </div>
                </button>
                
                {status === 'success' && (
                  <p className="text-green-500 text-center font-medium mt-2">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-red-500 text-center font-medium mt-2">
                    Oops! Something went wrong. Please try again later.
                  </p>
                )}
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div
              ref={containerRef}
              className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden"
            >
              {isInView && <ContactExperience />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

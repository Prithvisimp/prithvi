import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (form.current) {
      emailjs
        .sendForm(
          "service_f1aw7b7",
          "template_rbycx6o",
          form.current,
          "fIpysV-UMrf4w7LIj",
        )
        .then((result) => {
          console.log("Email sent:", result.text);
          setIsSubmitting(false);
          setIsSubmitted(true);
          setFormData({
            user_name: "",
            user_email: "",
            subject: "",
            message: "",
          });
          setTimeout(() => setIsSubmitted(false), 5000);
        })
        .catch((err) => {
          console.error("Error:", err);
          setIsSubmitting(false);
          setError("Failed to send email. Please try again later.");
        });
    }
  };

  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#39FF14] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Send me a message and
            let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Send Message</h3>

            {isSubmitted ? (
              <div className="bg-green-900/30 border border-green-500 text-green-300 p-4 rounded-md">
                <p className="font-medium">Thank you for your message!</p>
                <p className="text-sm mt-1">
                  I'll get back to you as soon as possible.
                </p>
              </div>
            ) : error ? (
              <div className="bg-red-900/30 border border-red-500 text-red-300 p-4 rounded-md mb-4">
                <p className="font-medium">Error</p>
                <p className="text-sm mt-1">{error}</p>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="user_name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="user_email"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:border-transparent"
                  />
                  <input
                    type="hidden"
                    name="to_email"
                    value="prithvithebilla@gmail.com"
                  />
                  <input
                    type="hidden"
                    name="reply_to"
                    value={formData.user_email}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:border-transparent"
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    <option value="Project Inquiry">Project Inquiry</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#39FF14] text-black font-medium py-3 px-6 rounded-md hover:bg-opacity-90 transition-all ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-300 mb-8">
                Feel free to reach out through any of the following channels.
              </p>
            </div>

            {/* Email and Location */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-900 p-3 rounded-full">
                  {/* Mail Icon */}
                  <svg
                    className="text-[#39FF14]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-400 mt-1">
                    prithvithebilla@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gray-900 p-3 rounded-full">
                  {/* Location Icon */}
                  <svg
                    className="text-[#39FF14]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-400 mt-1">
                    Mahasamund, Chhattisgarh, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-8">
              <h4 className="font-semibold mb-4">Connect on Social Media</h4>
              <div className="flex space-x-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/prithvi_graphix?igsh=MThhYnoyazM2Zm1mZg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 p-3 rounded-full hover:bg-[#39FF14] hover:text-black transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                {/* Behance */}
                <a
                  href="https://www.behance.net/ryugakishatu1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 p-3 rounded-full hover:bg-[#39FF14] hover:text-black transition-colors"
                  aria-label="Behance"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 8.5a1.5 1.5 0 0 0-1.5-1.5H14a1.5 1.5 0 0 0-1.5 1.5v1a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1.5a1.5 1.5 0 0 1-1.5-1.5" />
                    <path d="M7 10h3a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1Z" />
                    <path d="M7 16h4a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1Z" />
                    <line x1="16" y1="5" x2="19" y2="5" />
                  </svg>
                </a>
                {/* Pinterest */}
                <a
                  href="https://in.pinterest.com/prithvidubey045/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 p-3 rounded-full hover:bg-[#39FF14] hover:text-black transition-colors"
                  aria-label="Pinterest"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m8 20 4-9" />
                    <path d="M10.7 13.5C11.1 14.3 12 15 13 15c1.7 0 3-1.3 3-3.5C16 9.2 14.2 8 12 8c-2.8 0-5 2.2-5 5 0 1.1.3 2 1 2.8.2.2.4.2.5 0l.3-.6c.1-.2 0-.4-.1-.5-.4-.5-.6-1.1-.6-1.7 0-1.7 1.3-3.2 3.4-3.2 1.9 0 3 1.2 3 2.7 0 1.8-.8 3.2-1.9 3.2-.6 0-1.1-.5-1-1.1.2-.7.5-1.4.5-1.9 0-.4-.2-.8-.8-.8-.6 0-1.1.6-1.1 1.4 0 .5.2.9.2.9" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

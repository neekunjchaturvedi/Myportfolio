import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObject = new FormData(e.target);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataObject,
    });

    const result = await response.json();
    if (result.success) {
      alert("Message Sent!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex items-center justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-8"
    >
      <RevealOnScroll>
        <div className="w-full max-w-[90rem] mx-auto">
          <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
            <div className="p-6 sm:p-8 lg:p-12">
              {/* Header Section */}
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="font-bold text-4xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                  Get in Touch
                </h2>
                <p className="text-gray-400 text-lg sm:text-xl">
                  Have a question or want to work together?
                </p>
              </div>

              {/* Form Section */}
              <form
                className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
                onSubmit={handleSubmit}
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="dff98a4f-a13c-486d-a41d-86ad999b0ba6"
                />

                <div className="lg:col-span-1">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-5 py-4 text-white text-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your Name"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="lg:col-span-1">
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-5 py-4 text-white text-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your Email"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="lg:col-span-2">
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-5 py-4 text-white text-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your Message"
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <div className="lg:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

import React from 'react'

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-[white] mb-8 text-center">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-100 leading-loose">
              Have a question, comment, or feedback for us? We'd love to hear
              from you. Please fill out the form below, and we'll get back to
              you as soon as possible.
            </p>
          </div>
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-800 font-semibold"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full py-2 px-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-800 font-semibold"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full py-2 px-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-800 font-semibold"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full py-2 px-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 h-32 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 focus:outline-none"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs

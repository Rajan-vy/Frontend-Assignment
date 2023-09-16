import React from 'react'

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 md:mr-6 mb-6 md:mb-0">
            <img
              src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg"
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-700 leading-loose">
              Welcome to our online store! We are passionate about providing
              you with high-quality products and an exceptional shopping
              experience. Our mission is to make your online shopping journey
              easy, enjoyable, and memorable.
            </p>
            <p className="text-gray-700 leading-loose mt-4">
              Our team is dedicated to selecting the finest products,
              maintaining strict quality control, and delivering them to your
              doorstep with care. We value your trust and satisfaction, and we
              strive to exceed your expectations.
            </p>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Team
          </h2>
          <p className="text-gray-700 leading-loose">
            Our diverse team consists of passionate individuals who share a
            common goal: to provide you with an amazing shopping experience.
            We're here to help you with any questions or concerns you may have.
            Feel free to reach out to us anytime.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs

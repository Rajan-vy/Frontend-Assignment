// CheckoutForm.js

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  billingAddress: yup.string().required("Billing Address is required"),
  deliveryAddress: yup.string().required("Delivery Address is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]+$/, "Phone Number must contain only digits")
    .test("len", "Phone Number must be exactly 10 digits", (val) => val?.length === 10)
    .required("Phone Number is required"),
  date: yup
    .date()
    .min(new Date(), "Date cannot be in the past")
    .required("Date is required"),
});

const Checkout = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Handle form submission here, e.g., send data to a server
    console.log(data);
  };

  return (
    <div className="container mx-auto max-w-screen-md p-4 border-solid border-2 border-sky-500 outline-offset-4 bg-blue-300">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold">
            Name
          </label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <input
                  {...field}
                  type="text"
                  id="name"
                  className={`form-input ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  onChange={(e) => {
                    field.onChange(e);
                    trigger("name"); // Trigger validation on name field change
                  }}
                />
                {errors.name && (
                  <span className="text-red-500">{errors.name.message}</span>
                )}
              </div>
            )}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="billingAddress" className="block text-gray-700 font-bold">
            Billing Address
          </label>
          <Controller
            name="billingAddress"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <input
                  {...field}
                  type="text"
                  id="billingAddress"
                  className={`form-input ${
                    errors.billingAddress ? "border-red-500" : ""
                  }`}
                  onChange={(e) => {
                    field.onChange(e);
                    trigger("billingAddress"); // Trigger validation on billingAddress field change
                  }}
                />
                {errors.billingAddress && (
                  <span className="text-red-500">{errors.billingAddress.message}</span>
                )}
              </div>
            )}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="deliveryAddress" className="block text-gray-700 font-bold">
            Delivery Address
          </label>
          <Controller
            name="deliveryAddress"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <input
                  {...field}
                  type="text"
                  id="deliveryAddress"
                  className={`form-input ${
                    errors.deliveryAddress ? "border-red-500" : ""
                  }`}
                  onChange={(e) => {
                    field.onChange(e);
                    trigger("deliveryAddress"); // Trigger validation on deliveryAddress field change
                  }}
                />
                {errors.deliveryAddress && (
                  <span className="text-red-500">{errors.deliveryAddress.message}</span>
                )}
              </div>
            )}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700 font-bold">
            Phone Number
          </label>
          <Controller
            name="phoneNumber"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <input
                  {...field}
                  type="tel"
                  id="phoneNumber"
                  className={`form-input ${
                    errors.phoneNumber ? "border-red-500" : ""
                  }`}
                  onChange={(e) => {
                    field.onChange(e);
                    trigger("phoneNumber"); // Trigger validation on phoneNumber field change
                  }}
                />
                {errors.phoneNumber && (
                  <span className="text-red-500">{errors.phoneNumber.message}</span>
                )}
              </div>
            )}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold">
            Date
          </label>
          <Controller
            name="date"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <input
                  {...field}
                  type="date"
                  id="date"
                  className={`form-input ${
                    errors.date ? "border-red-500" : ""
                  }`}
                  onChange={(e) => {
                    field.onChange(e);
                    trigger("date"); // Trigger validation on date field change
                  }}
                />
                {errors.date && (
                  <span className="text-red-500">{errors.date.message}</span>
                )}
              </div>
            )}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          disabled={Object.keys(errors).length > 0}
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;

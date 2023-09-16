import React, { useState } from 'react';
import useGlobalStore from '../store';
import { useForm, Controller } from 'react-hook-form';
import { Link, useNavigate   } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('Name is Required'),
  billingAddress: yup.string().required('Billing Address is required'),
  deliveryAddress: yup.string().required('Delivery Address is required'),
  phoneNumber: yup
    .string()
    .required('Phone Number is required')
    .matches(/^\d{10}$/, 'Phone Number must be exactly 10 digits'),
  deliveryDate: yup.date().required('Delivery Date is required'),
});

const Cart = () => {
  const cart = useGlobalStore((state) => state.cart);
  const removeFromCart = useGlobalStore((state) => state.removeFromCart);
  const increaseQuantity = useGlobalStore((state) => state.increaseQuantity);
  const decreaseQuantity = useGlobalStore((state) => state.decreaseQuantity);
  const setCheckoutData = useGlobalStore((state) => state.setCheckoutData); // Add this action

  const netTotal = cart.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );

  const [showDetails, setShowDetails] = useState(false);
  const [checkoutClicked, setCheckoutClicked] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState,
    setValue,
    trigger,
    getValues,
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  const navigate = useNavigate();

  const onSubmit = (formData) => {
    const checkoutData = {
      cartData: cart,
      formData,
      netTotal: netTotal
    };
    setCheckoutData(checkoutData);
    navigate("/thankyou");
  };

  const handleDelete = (productId) => {
    removeFromCart(productId);
  };

  const handleCheckout = () => {
    setShowDetails(true);
    setCheckoutClicked(true);
  };

  const handleCancel = () => {
    setShowDetails(false);
    setCheckoutClicked(false);
    reset();
  };

  return (
    <>
      <div className="bg-gray-100 py-8">
        <div className="max-w-[75%] mx-auto bg-white p-6 rounded shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>

          <div className="grid grid-cols-6 border-b-2 border-gray-200 pb-4 mb-4">
            <div className="col-span-2 font-semibold">Product</div>
            <div className="text-center font-semibold">Quantity</div>
            <div className="text-center font-semibold">Amount</div>
            <div className="text-center font-semibold">Total</div>
            <div className="text-center font-semibold">Actions</div>
          </div>

          {cart.map((product) => (
            <div
              key={product.id}
              className="grid grid-cols-6 gap-2 py-2 border-b border-gray-200"
            >
              <div className="col-span-2">{product.title}</div>
              <div className="flex gap-4 justify-center items-center">
                <div onClick={() => decreaseQuantity(product.id)}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                    -
                  </button>
                </div>
                <div className="text-center">{product.quantity}</div>
                <div onClick={() => increaseQuantity(product.id)}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                    +
                  </button>
                </div>
              </div>
              <div className="text-center">Rs.{product.price}</div>
              <div className="text-center">
                Rs.{(product.quantity * product.price).toFixed(2)}
              </div>
              <div className="text-center">
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          <div className="mt-4 text-right">
            <h3 className="text-xl font-semibold">
              Net Total: {netTotal.toFixed(2)}
            </h3>
            {!checkoutClicked && (
              <button
                className={`text-white font-bold py-2 px-4 rounded mt-6 ${
                  cart.length <= 0 ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-700'
                }`}
                disabled={cart.length <= 0}
                onClick={handleCheckout}
              >
                Checkout
              </button>
            )}
          </div>
        </div>
      </div>

      {showDetails && (
        <div className="bg-gray-100 py-8">
          <div className="max-w-[75%] mx-auto bg-white p-6 rounded shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Your Details</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  name="name"
                  {...register("name")}
                />
                {errors.name && <p className="text-[red] text-[12px]">{errors.name.message}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="billingAddress">
                  Billing Address
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="billingAddress"
                  name="billingAddress"
                  {...register("billingAddress")}
                ></textarea>
                {errors.billingAddress && <p className="text-[red] text-[12px]">{errors.billingAddress.message}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deliveryAddress">
                  Delivery Address
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="deliveryAddress"
                  name="deliveryAddress"
                  {...register("deliveryAddress")}
                ></textarea>
                {errors.deliveryAddress && <p className="text-[red] text-[12px]">{errors.deliveryAddress.message}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
                  Phone Number
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phoneNumber"
                  type="tel"
                  name="phoneNumber"
                  {...register("phoneNumber")}
                />
                {errors.phoneNumber && <p className="text-[red] text-[12px]">{errors.phoneNumber.message}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Select Delivery Date</label>
                <Controller
                  control={control}
                  name="deliveryDate"
                  render={({ field }) => (
                    <DatePicker
                      selected={field.value}
                      onChange={(date) => field.onChange(date)}
                      dateFormat="dd/MM/yyyy"
                      className="w-full border rounded px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholderText="dd/mm/yyyy"
                    />
                  )}
                />
                {errors.deliveryDate && <p className="text-[red] text-[12px]">{errors.deliveryDate.message}</p>}
              </div>

              <div className="text-right mt-4">
                <button
                  className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="text-white bg-green-500 hover:bg-green-700 font-bold py-2 px-4 rounded ml-4"
                >
                  Checkout
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;

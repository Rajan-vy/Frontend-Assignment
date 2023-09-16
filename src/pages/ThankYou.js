import React from 'react';
import useGlobalStore from '../store';

const ThankYou = () => {
  const { formData, cartData, netTotal } = useGlobalStore((state) => state.checkoutData);
  const resetCart = useGlobalStore((state) => state.resetCart);
  resetCart()

  return (
    <div className="bg-gray-100 py-8 text-center">
      <div className="max-w-[75%] mx-auto bg-white p-6 rounded shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Thank You for Your Order</h2>

        <p className="text-[36px] mb-4 font-bold">Hey {formData.name},</p>
        <p className="text-lg mb-4">
          Delivery Address: {formData.deliveryAddress} <br />
          Billing Address: {formData.billingAddress}
          
        </p>
        <p className="text-lg mb-4"></p>

        <table className="w-full">
          <thead>
            <tr>
              <th>Thumbnail</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((item) => (
              <tr key={item.id} className='text-center mb-[10px]'>
                <td className='flex justify-center'>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-8 h-8 rounded-md"
                  />
                </td>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3"></td>
              <td className="text-lg font-semibold text-end">Net Total:</td>
              <td className="text-lg font-semibold text-center">{netTotal}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ThankYou;

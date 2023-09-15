import React from 'react';
import useGlobalStore from '../store';

const Cart = () => {
  const cart = useGlobalStore((state) => state.cart);
  const removeFromCart = useGlobalStore((state) => state.removeFromCart);
  const increaseQuantity = useGlobalStore((state) => state.increaseQuantity);
  const decreaseQuantity = useGlobalStore((state) => state.decreaseQuantity);
  const netTotal = cart.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );

  console.log(cart);

  const handleDelete = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
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
            <div className='flex gap-4 justify-center items-center'>
              <div className="" onClick={() => decreaseQuantity(product.id)}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                  -
                </button>
              </div>
              <div className="text-center ">{product.quantity}</div>
              <div className="" onClick={() => increaseQuantity(product.id)}>
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
          <button className={`text-white font-bold py-2 px-4 rounded mt-6 ${cart.length <= 0 ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-700"}`} disabled={cart.length <=0}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

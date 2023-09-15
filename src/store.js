import create from 'zustand';

const useGlobalStore = create((set) => ({
  products: [],
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        // Product already exists in the cart, update its quantity
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // Product does not exist in the cart, add it
        return {
          cart: [...state.cart, { ...product, quantity: 1 }],
        };
      }
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    })),
  increaseQuantity: (productId) =>
    set((state) => ({
      cart: state.cart.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      ),
    })),
  decreaseQuantity: (productId) =>
    set((state) => ({
      cart: state.cart.map((product) =>
        product.id === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      ),
    })),
}));

export default useGlobalStore;

import create from 'zustand';

const useGlobalStore = create((set) => ({
  products: [],
  cart: [],
  checkoutData: null,
  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
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

    setCheckoutData: (data) => set({ checkoutData: data }),
    resetCart: (data) => set({ cart: [] }),
    
}));

export default useGlobalStore;

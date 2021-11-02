const initialState = {
  products: [],
  totalPrice: 0,
  totalQuantities: 0,
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      const productInfo = action.payload.prodDetails;
      const quantity = action.payload.quantity;
      const check = state.products.find(
        (product) => product.id === productInfo.id
      );
      if (check) {
        return state;
      } else {
        const totalP = state.totalPrice + productInfo.price * quantity;
        const totalQ = state.totalQuantities + quantity;
        productInfo.quantity = quantity;
        return {
          ...state,
          products: [...state.products, productInfo],
          totalPrice: totalP,
          totalQuantities: totalQ,
        };
      }
    default:
      return state;
  }
};

export default ProductReducer;

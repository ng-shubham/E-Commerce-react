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

    case "INC_QUANTITIES":
      const findProduct = state.products.find(
        (product) => product.id === action.payload
      );
      const findProductIndex = state.products.findIndex(
        (product) => product.id === action.payload
      );
      findProduct.quantity += 1;
      state.products[findProductIndex] = findProduct;
      return {
        ...state,
        totalPrice: state.totalPrice + findProduct.price,
        totalQuantities: state.totalQuantities + 1,
      };

    case "DEC_QUANTITIES":
      const findProd = state.products.find(
        (prod) => prod.id === action.payload
      );
      const findInx = state.products.findIndex(
        (prod) => prod.id === action.payload
      );
      if (findProd.quantity === 1) {
        return {
          ...state,
          totalPrice: state.totalPrice,
          totalQuantities: state.totalQuantities,
        };
      } else {
        findProd.quantity -= 1;
        state.products[findInx] = findProd;
        return {
          ...state,
          totalPrice: state.totalPrice - findProd.price,
          totalQuantities: state.totalQuantities - 1,
        };
      }

    case "REMOVE_PRODUCT":
      const fProdIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      state.products.splice(fProdIndex, 1);
      return {
        products: [...state.products],
        totalPrice:
          state.totalPrice - action.payload.price * action.payload.quantity,
        totalQuantities: state.totalQuantities - action.payload.quantity,
      };
    default:
      return state;
  }
};

export default ProductReducer;

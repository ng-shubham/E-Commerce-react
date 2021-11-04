import { ActionType } from "../Constants/actionType";

export const addProducts = (product) => {
  return {
    type: ActionType.ADD_PRODUCTS,
    payload: product,
  };
};

export const incQuantities = (id) => {
  return {
    type: ActionType.INC_QUANTITIES,
    payload: id,
  };
};

export const decQuantities = (id) => {
  return {
    type: ActionType.DEC_QUANTITIES,
    payload: id,
  };
};

export const removeProduct = (product) => {
  return {
    type: ActionType.REMOVE_PRODUCT,
    payload: product,
  };
};

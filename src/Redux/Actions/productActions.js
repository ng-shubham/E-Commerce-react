import { ActionType } from "../Constants/actionType";

export const addProducts = (product) => {
  return {
    type: ActionType.ADD_PRODUCTS,
    payload: product,
  };
};

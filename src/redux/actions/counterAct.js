import { increment, decrement } from "../slices/counterSlice.js";

export const incrementAct = () => async (dispatch) => {
  dispatch(increment());
};
export const decrementAct = () => async (dispatch) => {
  dispatch(decrement());
};

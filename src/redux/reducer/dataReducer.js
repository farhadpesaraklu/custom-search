import { GET_DATA } from "../actions/actionTypes";

export function dataReducer(state, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.payload,
      };

      default:
        return state;
  }
}

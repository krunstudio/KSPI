import * as types from './../types'

const initialState = {
  isError:false,
  checkout: [],
};

export default function reducerCheckout(state = initialState, action) {
  console.log(action.payload)
  switch (action.type) {
    case `${types.CHECKOUT}_PENDING`:
        return {
          ...state,
        };
  
      case `${types.CHECKOUT}_FULFILLED`:
        return {
          ...state,
          checkout: action.payload.data
        };
  
      case `${types.CHECKOUT}_REJECTED`:
        return {
          ...state,
          isError:true
        }
    default:
      return state;

  }
}
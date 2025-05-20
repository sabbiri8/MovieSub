const initialState = {
  cartData: []
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const exists = state.cartData.find(item => item.id === action.payload.id);
      if (exists) return state;
      return {
        ...state,
        cartData: [...state.cartData, action.payload]
      };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartData: state.cartData.filter(item => item.id !== action.payload.id)
      };

    default:
      return state;
  }
};

export { initialState, cartReducer };

const ProductReducer = (state, action) => {
  switch (action.type) {
    case "MY_PRODUCTS":
      return {
        ...state,
        isError: false,
        products: action.payload,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "UPDATE_CART_QTY":
      return {
        ...state,
        cart: state.cart.map((c) =>
          c.id === action.payload.id ? { ...c, qty: action.payload.qty } : c
        ),
      };
    case "ADD_TO_FAV":
      return {
        ...state,
        favourite: [...state.favourite, { ...action.payload }],
      };
    case "REMOVE_FROM_FAV":
      return {
        ...state,
        favourite: state.favourite.filter((prod) => prod.id !== action.payload.id),
      };

    default:
      return { ...state };
  }
};

export default ProductReducer;

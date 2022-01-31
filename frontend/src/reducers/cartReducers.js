import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
      case CART_REMOVE_ITEM:
        console.log("This is before the updating the cartItems value by reducer for remove item");
        return {...state,cartItems:state.cartItems.filter((x)=> x.product!==action.payload)};
        
        //dont add to cart items if it is equal to payload product id
    default:
      return state;
  }
};


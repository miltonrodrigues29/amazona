import Axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/products/${productId}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      product: data._id,
      qty,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart =(productId)=> (dispatch,getState) =>
{
  dispatch({type:CART_REMOVE_ITEM,payload:productId});
  //this above dispatch will trigger the reducer function to update state value of cartItems in cart
  localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
  //above code is executed after the update to state in the reducer, just setting the cache storage to the updated state values

}



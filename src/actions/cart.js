import axios from 'axios';

export function addToCart(payload) {
  axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/carts`, payload, {withCredentials: true})
  .then(response => payload.dispatch({type: "ADD_TO_CART", payload: response.data})).catch(err => console.log(err.message)) 
}
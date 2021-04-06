import axios from 'axios';

export function addToCart(payload) {
  debugger
  (!payload.user.currentCart.id) ?
    axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/orders`, payload, {withCredentials: true})
    .then(response => console.log(response)).catch(err => console.log(err.message)) : 
    console.log('not null')
  payload.dispatch({type: "ADD_TO_CART", payload: {data: payload.data, user: payload.user}})
  // return (dispatch) => {
  //   dispatch({ type: 'START_ADDING_ASTRONAUTS_REQUEST' });
  //   fetch('http://api.open-notify.org/astros.json')
  //     .then(response => response.json())
  //     .then(astronauts => dispatch({ type: 'ADD_ASTRONAUTS', astronauts }));
  // };
}
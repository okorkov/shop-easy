const defaultState = {
  logged_in: false,
  user: {},
  currentCart: {},
  currentItems: []
}

export default (state = defaultState, action) => {

  switch(action.type) {
    case 'CHECK_LOGIN_STATUS':
      if(action.payload.data.logged_in) {
        return {
          ...state,
          logged_in: true,
          user: action.payload.data.user,
          currentCart: action.payload.data.cart,
          currentItems: action.payload.data.cart_items
        };
      } else {
        return {
          ...state,
          currentCart: action.payload.data.cart,
          currentItems: action.payload.data.cart_items
        };
      }

    case 'SIGN_IN':
      return {
        ...state,
        logged_in: true,
        user: action.payload.data.user,
        currentCart: action.payload.data.cart,
        currentItems: action.payload.data.cart_items
      }
    case 'SIGN_UP':
      return {
        ...state,
        logged_in: true,
        user: action.payload.data.user,
        currentCart: action.payload.data.cart,
        currentItems: action.payload.data.cart_items
      }

    case 'LOG_OUT':
      return {
        ...state,
        logged_in: false,
        user: {}
      }

      case 'ADD_TO_CART':
        
        return {
          ...state,
          currentItems: [...state.currentItems, action.payload]
        }

    default:
      return state;

  }
}
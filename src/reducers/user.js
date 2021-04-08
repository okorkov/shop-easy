const defaultState = {
  logged_in: false,
  user: {},
  currentCart: null,
  currentItems: [],
  orderPlaced: false
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
          currentItems: action.payload.data.cart_items,
          orderPlaced: false
        };
      } else {
        return {
          ...state,
          currentCart: action.payload.data.cart,
          currentItems: action.payload.data.cart_items,
          orderPlaced: false
        };
      }

    case 'SIGN_IN':
      return {
        ...state,
        logged_in: true,
        user: action.payload.data.user,
        currentCart: action.payload.data.cart,
        currentItems: action.payload.data.cart_items,
        orderPlaced: false
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
          currentItems: [...state.currentItems, action.payload],
          orderPlaced: false
        }

        case 'DELETE_CART_ITEM':
        return {
          ...state,
          currentItems: state.currentItems.filter(item => item.id !== action.payload.id)
        }

        case 'CHECKOUT':
        return {
          ...state,
          currentItems: []
        }

        case 'ORDER_PLACED':
        return {
          ...state,
          orderPlaced: true
        }

        case 'ORDER_REFRESHED':
        return {
          ...state,
          orderPlaced: false
        }

    default:
      return state;

  }
}
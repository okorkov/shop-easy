const defaultState = {
  logged_in: false,
  user: {},
  currentCart: {}
}

export default (state = defaultState, action) => {

  switch(action.type) {
    case 'CHECK_LOGIN_STATUS':
      if(action.payload.data.logged_in) {
        return {
          ...state,
          logged_in: true,
          user: action.payload.data.user
        };
      } else {
        return state;
      }
    case 'SIGN_IN':
        return {
          ...state,
          logged_in: true,
          user: action.payload.data.user
        };
    case 'SIGN_UP':
      return;

    default:
      return state;

  }
}
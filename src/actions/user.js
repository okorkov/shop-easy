export const checkLoginStatus = (payload) => {
  return {
    type: "CHECK_LOGIN_STATUS",
    payload
  }
}

export const signIn = (payload) => {
  return {
    type: "SIGN_IN",
    payload
  }
}

export const signUp = (payload) => {
  return {
    type: "SIGN_UP",
    payload
  }
}
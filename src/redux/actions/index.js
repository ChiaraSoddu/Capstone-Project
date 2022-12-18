
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SUB = "SUB";


export const loginAction = (user) => ({
  type: LOGIN,
  payload: user
})

export const subAction = (sub) => ({

  type: SUB,
  payload: sub

})

export const logoutAction = () => ({
    type: LOGOUT,
    payload: {
      username: null,
      id: null,
      token: null
    }
})


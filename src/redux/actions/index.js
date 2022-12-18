export const GET_USERS = "GET_USERS";
export const GET_EXPERIENCES = "GET_EXPERIENCES";
export const NEW_EXPERIENCE = "NEW_EXPERIENCE";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
/*export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";*/

export const getUsersAction = (users) => ({
    type: GET_USERS,
    payload: users
})

export const loginAction = (user) => ({
  type: LOGIN,
  payload: user
})

export const logoutAction = () => ({
    type: LOGOUT,
    payload: {
      username: null,
      id: null,
      token: null
    }
})

/*export const loginSuccess = (user)=>{
  return {
    type: LOGIN_USER_SUCCESS,
    payload: {
      user,
    },
  }
}*/
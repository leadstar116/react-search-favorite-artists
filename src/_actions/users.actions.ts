import { UserInfo } from "../_constants/users.interface"

export const USER_LOADED_SUCCESSFULLY = "USER_LOADED_SUCCESSFULLY"
export const userLoadedSuccessfully = (users: Array<UserInfo>) => ({
    type: USER_LOADED_SUCCESSFULLY,
    payload: { users }
})

export const CLEAR_USERS = "CLEAR_USERS"
export const clearUsers = () => ({
    type: CLEAR_USERS,
    payload: { }
})

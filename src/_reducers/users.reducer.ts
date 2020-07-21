import { USER_LOADED_SUCCESSFULLY, CLEAR_USERS } from "../_actions/users.actions"
import { UserInfo } from "../_constants/users.interface"

const usersState = {
    users: [] as UserInfo[],
}

const usersReducer = (state = usersState, action: any) => {
    const {type, payload} = action

    switch (type) {
        case USER_LOADED_SUCCESSFULLY:
            return {
                ...state,
                users: payload.users
            }
        case CLEAR_USERS:
            return {
                ...state,
                users: []
            }
        default:
            break;
    }
    return state
}

export default usersReducer
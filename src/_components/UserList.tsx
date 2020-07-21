import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { loadUsers } from '../_helpers/user.thunk'
import { UserInfo } from '../_constants/users.interface'
import User from './User'
import { AlertData } from '../_constants/alert.interface'
import { alertSuccess } from '../_actions/alert.actions'
import { clearUsers } from '../_actions/users.actions'

type Props = {
    searchString: string,
    userList: UserData,
    alertState: AlertData,
    callLoadUsers: (username: string) => {},
    clearUsers: () => {},
    showAlert: (message: string) => {}
}
const UserList = ({ callLoadUsers, searchString, showAlert, clearUsers, ...props }: Props) => {

    useEffect(() => {
        console.log(searchString)

        if(searchString) {
            callLoadUsers(searchString)
        } else {
            clearUsers()
            showAlert('Please search artist...')
        }
    }, [callLoadUsers, searchString, showAlert, clearUsers])

    return (
        <div className="p-2">
            {props.alertState !== undefined &&
                <div className={props.alertState.alertClass}>
                    {props.alertState.alertMessage}
                </div>
            }
            {
                props.userList.users.map((user, index) => (
                    <User data={user} key={index}/>
                ))
            }
        </div>
    )
}

interface UserData {
    users: UserInfo[],
}

const mapStateToProps = (state: {
        usersReducer: UserData,
        alertReducer: AlertData,
    }) => ({
    userList: state.usersReducer,
    alertState: state.alertReducer
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
    callLoadUsers: (username = "") => dispatch(loadUsers(username)),
    clearUsers: () => dispatch(clearUsers()),
    showAlert: (message: string) => dispatch(alertSuccess(message)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
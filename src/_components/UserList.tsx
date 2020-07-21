import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { loadUsers } from '../_helpers/user.thunk'
import { UserInfo } from '../_constants/users.interface'
import User from './User'
import { AlertData } from '../_constants/alert.interface'
import { alertSuccess } from '../_actions/alert.actions'

type Props = {
    searchString: string,
    userList: UserData,
    alertState: AlertData,
    callLoadUsers: (username: string) => {},
    showEndAlert: (message: string) => {}
}
const UserList = (props: Props) => {
    const [prevSearch, setPrevSearch] = useState("")
    const [showInitialAlert, setShowInitialAlert] = useState(false)

    useEffect(() => {
        if(showInitialAlert)
            return
        props.showEndAlert('Please search artist...')
        setShowInitialAlert(true)
    }, [props, showInitialAlert, setShowInitialAlert])

    useEffect(() => {
        if(!props.searchString || prevSearch === props.searchString)
            return
        props.callLoadUsers(props.searchString)
        setPrevSearch(props.searchString)
    }, [props, prevSearch, setPrevSearch])

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
    showEndAlert: (message: string) => dispatch(alertSuccess(message)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
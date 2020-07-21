import { UserInfo } from "../_constants/users.interface"
import usersReducer from './users.reducer'
import * as usersActions from '../_actions/users.actions'

describe('users reducer test', () => {
    let initialState = {
        users: [] as UserInfo[],
    }

    const testUserInfo = {
        listeners: "3240875",
        mbid: "83d91898-7763-47d7-b03b-b92132375c47",
        name: "Pink Floyd",
        streamable: "0",
        url: "https://www.last.fm/music/Pink+Floyd",
        image: [
            {
                size: "small",
                '#text': "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png"
            },
            {
                size: "medium",
                '#text': "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png"
            },
            {
                size: "large",
                '#text': "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png"
            },
            {
                size: "extralarge",
                '#text': "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png"
            },
            {
                size: "mega",
                '#text': "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png"
            }
        ]
    } as UserInfo

    test('USER_LOADED_SUCCESSFULLY: should set loaded users to users', () => {
        const users = [ testUserInfo ]
        const expectedState = {
            users: users,
        }
        const action = {
            type: usersActions.USER_LOADED_SUCCESSFULLY,
            payload: { users }
        }
        const newState = usersReducer(initialState, action)
        expect(newState).toEqual(expectedState)
    })

    test('CLEAR_USERS: should set users to empty', () => {
        initialState = {
            users: [ testUserInfo ],
        }
        const expectedState = {
            users: [],
        }
        const action = {
            type: usersActions.CLEAR_USERS,
            payload: {}
        }
        const newState = usersReducer(initialState, action)
        expect(newState).toEqual(expectedState)
    })
})
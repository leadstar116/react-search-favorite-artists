import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { userLoadedSuccessfully } from '../_actions/users.actions';
import { alertClear, alertFailure, alertLoading } from '../_actions/alert.actions';

type MyRootState = {};
type MyExtraArg = undefined;
type MyThunkDispatch = ThunkDispatch<MyRootState, MyExtraArg, Action>;

export const loadUsers = (username: string) => async (dispatch: MyThunkDispatch) => {
    try {
        dispatch(alertLoading('Searching...'))
        let response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${username}&api_key=8dc865ee2144b2d604e03829ecd3df3a&format=json`)
        const result = await response.json()

        if(result.results && result.results.artistmatches.artist.length) {
            dispatch(userLoadedSuccessfully(result.results.artistmatches.artist))
            dispatch(alertClear())
        } else {
            dispatch(userLoadedSuccessfully([]))
            dispatch(alertFailure("Sorry, there's no artist with that name!"))
        }
    } catch(e) {
        dispatch(alertFailure(e))
    }
}

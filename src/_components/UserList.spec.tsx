import configureStore from 'redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import UserList from './UserList'
import { UserInfo } from '../_constants/users.interface';


describe('UserList Component', () => {
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

    const usersState = {
        users: [testUserInfo],
    }

    const mockStore = configureStore();
    let store = mockStore({
        usersReducer: usersState,
    })

    store.dispatch = jest.fn();

    let component = renderer.create(
        <Provider store={store}>
            <UserList searchString=""/>
        </Provider>
    );

    it('should render with given props', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
})
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { UserInfo } from '../_constants/users.interface';
import DetailsModal from './DetailsModal'


describe('Details Component', () => {
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

    let component = renderer.create(
        <BrowserRouter>
            <DetailsModal
                show={false}
                onHide={() => {}}
                user={testUserInfo}
            />
        </BrowserRouter>
    );

    it('should render with given props', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
})
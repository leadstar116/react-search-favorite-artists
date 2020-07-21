export interface UserInfo {
    listeners: string,
    name: string,
    mbid: string,
    streamable: string,
    url: string,
    image: Array<UserPicture>,
}

export interface UserPicture {
    size: string,
    '#text': string,
}

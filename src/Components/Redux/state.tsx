import {v1} from 'uuid';
import {rerender} from '../../Rerender';

export type PostType = {
    id: string;
    title: string;
    like: number;
}
export type ProfilePageType = {
    posts: PostType[],
    newPostText: string,
}
export type DialogType = {
    id: number;
    name: string;
}
export type MessageType = {
    id:string;
    title: string;
}
export type DialogsPageType = {
    dialogs: DialogType[],
    messages: MessageType[]
}
export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
}
let state: StateType = {
    profilePage: {
        posts: [
            {id: v1(), title: 'my first post', like: 23},
            {id: v1(), title: 'my second post', like: 13},
            {id: v1(), title: 'my third post', like: 10},
        ],
        newPostText: '',
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'bob'},
            {id: 2, name: 'nick'},
            {id: 3, name: 'ann'},
            {id: 4, name: 'alex'},
        ],
        messages: [
            {id: v1(), title: 'hello'},
            {id: v1(), title: 'how are you'},
            {id: v1(), title: 'what do you learn?'},
        ]
    }

};

export function addPost(){
    let newPost:PostType={id:v1(),title:state.profilePage.newPostText,like:0}
    state.profilePage.posts.unshift(newPost);
    state.profilePage.newPostText='';
    rerender(state);

}
export function onChange(s:string){
    debugger
    state.profilePage.newPostText=s;
    rerender(state);
}
export default state;

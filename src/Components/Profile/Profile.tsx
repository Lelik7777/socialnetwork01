import React from 'react';
import s from '../../App.module.css';
import {Posts} from './Posts';
import {PostType} from '../Redux/state';


type ProfileType = {
    datePosts: PostType[];
    newPost: string;
    addPost:()=>void;
    onChange:(s:string)=>void;
}
export const Profile: React.FC<ProfileType> = ({datePosts, newPost,addPost,onChange}) => {
    return <div className={s.profile}>
        <Posts datePosts={datePosts} newPost={newPost} addPost={addPost} onChange={onChange}/>
    </div>
}


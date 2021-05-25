import React from 'react';
import s from '../../App.module.css'
import {Post} from './Post';

type PostsType = {}
export const Posts: React.FC<PostsType> = ({}) => {
    return <div className={s.posts}>
        <img src="https://www.istockphoto.com/resources/images/HomePage/Hero/682374404.jpg" alt="forest"/>
        avatar
        <h3>My Posts</h3>
        <input type="text"/>
        <button>add</button>
        <Post/>
        <Post/>
    </div>
}

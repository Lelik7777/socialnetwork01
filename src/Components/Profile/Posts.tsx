import React from 'react';
import s from '../../App.module.css'
import {Post} from './Post';
import {PostType} from '../Redux/state';

type PostsType = {
    datePosts: PostType[];
    newPost: string;
    addPost: () => void;
    onChange: (s: string) => void;
}
export const Posts: React.FC<PostsType> = ({datePosts, newPost, addPost, onChange}) => {
    const newValue = React.createRef<HTMLInputElement>();
    const addPostCurrent = () => {
        addPost();
    };
    const onChangeInput = () => {
        if (newValue.current) {
            onChange(newValue.current?.value);
        }

    };
    return <div className={s.posts}>
        <img src="https://www.istockphoto.com/resources/images/HomePage/Hero/682374404.jpg" alt="forest"/>
        avatar
        <h3>My Posts</h3>
        <input type="text" value={newPost} onChange={onChangeInput} ref={newValue}/>
        <button onClick={addPostCurrent}>add</button>
        {datePosts.map(d => <Post id={d.id} title={d.title} like={d.like}/>)}
    </div>
}

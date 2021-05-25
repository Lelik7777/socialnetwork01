import React from 'react';
import s from '../../App.module.css';
type PostType = {}
export const Post: React.FC<PostType> = ({}) => {
    return <div className={s.post}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMjW6pmo8lMNPil7gwKP7ycEyzUsoeWjzbkQ&usqp=CAU" alt="avatar"/>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem impedit iure molestias neque rem reprehenderit, sint sit, sunt tempore temporibus veritatis vitae! Amet cupiditate harum hic minus nobis quam!</span>
        <div>like</div>
    </div>
}
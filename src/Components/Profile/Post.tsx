import React from 'react';
import s from '../../App.module.css';
import {PostType} from '../Redux/state';

export const Post: React.FC<PostType> = ({id,title,like}) => {
    return <div className={s.post}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMjW6pmo8lMNPil7gwKP7ycEyzUsoeWjzbkQ&usqp=CAU" alt="avatar"/>
        <span>{title}</span>
        <div>like:{like}</div>
    </div>
}
import React from 'react';
import s from '../../App.module.css';
import {Posts} from './Posts';

type ProfileType = {}
export const Profile: React.FC<ProfileType> = ({}) => {
    return <div className={s.profile}>
        <Posts/>
    </div>
}


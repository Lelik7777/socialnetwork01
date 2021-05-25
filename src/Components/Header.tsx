import React from 'react';
import s from '../App.module.css';
type HeaderType = {
    title: string;
}
export const Header: React.FC<HeaderType> = ({title}) => {
    return <div className={s.header}>
        <img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_3.png" alt="logo"/>
        <h2>{title}</h2>
    </div>
}
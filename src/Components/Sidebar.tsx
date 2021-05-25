import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../App.module.css';

type SidebarType = {
    title: string[];
}
export const Sidebar: React.FC<SidebarType> = ({title}) => {
    return <div className={s.sidebar}>
        {title.map(t => {
            return <div>
                <NavLink to={`/${t.toLowerCase()}`} className={s.link} activeClassName={s.active}>{t}</NavLink>
            </div>
        })}
    </div>
}
import React from 'react';
import {NavLink} from 'react-router-dom';
import {DialogType} from '../Redux/state';


export const Dialog: React.FC<DialogType> = ({id, name}) => {
    return <div>
        <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
}
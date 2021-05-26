import React from 'react';
import s from '../../App.module.css';
import {Dialog} from './Dialog';
import {Message} from './Message';
import {DialogsPageType} from '../Redux/state';

type DialogsType = {
    data:DialogsPageType;
}
export const Dialogs: React.FC<DialogsType> = ({data}) => {
    return <div className={s.dialogs} style={{color:'rgba(145,154,132,0.85)'}}>

        <div style={{borderRight:'2px solid rgba(78, 235, 0, 0.97)', marginRight:'10px',}}>
          <span style={{fontSize:'larger',marginBottom:'10px',display:'inline-block'}}>
            {data.dialogs.map(d=><Dialog id={d.id} name={d.name}/>)}
          </span>
        </div>
        <div>
            {data.messages.map(d=><Message id={d.id} title={d.title}/>)}
        </div>
    </div>
}

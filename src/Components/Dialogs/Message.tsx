import React from 'react';
import {MessageType} from '../Redux/state';


export const Message: React.FC<MessageType> = ({id, title}) => {
    return <div style={{display: 'grid', gridTemplateColumns: '70px 1fr', padding: '10px'}}>
        <img src="https://t4.ftcdn.net/jpg/03/32/59/65/360_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg"
             alt="avatar"
             style={{width: '70px'}}
        />
        <span style={{
            display: 'inline-block',
            border: '1px solid rgba(99, 81, 69, 0.97)',
            borderRadius: '10px',
            marginLeft: '30px',
            padding: '5px',
            textAlign: 'center'
        }}>{title}</span>
    </div>
}
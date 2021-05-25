import React from 'react';
import s from './App.module.css';
import {Header} from './Components/Header';
import {Sidebar} from './Components/Sidebar';
import {Route} from 'react-router-dom';
import {Profile} from './Components/Profile/Profile';
import {Dialogs} from './Components/Dialogs/Dialogs';
import {News} from './Components/News';

const sidebarItems = ['Profile', 'Dialogs', 'News', 'Settings'];

function App() {
    return <div className={s.app}>
        <Header title={'header'}/>
        <Sidebar title={sidebarItems}/>
        <div className={s.wrapper}>
            <Route path={`/profile`} render={()=><Profile/>}/>
            <Route path={`/dialogs`} render={()=><Dialogs/>}/>
            <Route path={`/news`} render={()=><News/>}/>
        </div>
    </div>
}

export default App;


import React from 'react';
import s from './App.module.css';
import {Header} from './Components/Header';
import {Sidebar} from './Components/Sidebar';
import {Route, Switch} from 'react-router-dom';
import {Profile} from './Components/Profile/Profile';
import {Dialogs} from './Components/Dialogs/Dialogs';
import {News} from './Components/News';
import {StateType} from './Components/Redux/state';

const sidebarItems = ['Profile', 'Dialogs', 'News', 'Settings'];

type AppType = {
    state: StateType;
    addPost:()=>void;
    onChange:(s:string)=>void;
}

function App(props: AppType) {
    console.log(props.state)
    const renderProfile = () => <Profile
        datePosts={props.state.profilePage.posts}
        newPost={props.state.profilePage.newPostText}
        addPost={props.addPost}
        onChange={props.onChange}
    />
    const renderDialogs=()=><Dialogs data={props.state.dialogsPage}/>
    return <div className={s.app}>
        <Header title={'header'}/>
        <Sidebar title={sidebarItems}/>
        <div className={s.wrapper}>
            <Switch>
                <Route path={`/profile`} render={renderProfile}/>
                <Route path={`/dialogs`} render={renderDialogs}/>
                <Route path={`/news`} render={() => <News/>}/>
            </Switch>
        </div>
    </div>
}

export default App;


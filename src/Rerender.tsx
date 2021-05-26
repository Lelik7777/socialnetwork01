import {StateType} from './Components/Redux/state';
import ReactDOM from 'react-dom';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {addPost} from './Components/Redux/state';
import {onChange} from './Components/Redux/state';

export function rerender(state: StateType) {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} onChange={onChange}/>
            </BrowserRouter>

        </React.StrictMode>,
        document.getElementById('root')
    );
}

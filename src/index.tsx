import reportWebVitals from './reportWebVitals';
import {rerender} from './Rerender';
import state from './Components/Redux/state';


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
rerender(state);
reportWebVitals();

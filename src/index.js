import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';



//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render((
    <Router>
      <React.Fragment>
        <Route exact path="/weather" component={App} />
        <Route exact path="/" component={Login} />
      </React.Fragment>
    </Router>),
    document.getElementById('root')
    // document.getElementById('circle')
  );
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
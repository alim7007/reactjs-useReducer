import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import FetchPage from './FetchPage';
import Async from './async';
import Memo from './memo';
import Callback from './callback';
import LocalStorage from './LocalStorage';
import './App.css'
ReactDOM.render(
  <Router>
    <div className='Links'>
      <Link to="/">App</Link>
      <Link to="/fetchpage">FetchPage</Link>
      <Link to="/memo">memo</Link>
      <Link to="/localstorage">localStorage</Link>
      <Link to="/callback">callback</Link>
      <Link to="/async">Async</Link>
    </div>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/fetchpage' component={FetchPage} />
      <Route path='/localStorage' component={LocalStorage} />
      <Route path='/async' component={Async} />
      <Route path='/memo' component={Memo} />
      <Route path='/callback' component={Callback} />
    </Switch>
  </Router>
  ,
  document.getElementById('root')
);

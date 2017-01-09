import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Router from 'react-router'
import routes from './config/routes'

Router.run(routes, (Root) => {
  ReactDOM.render(
    <Root />,
    document.getElementById('root')
  );
})

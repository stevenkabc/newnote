import React from 'react'
import Main from '../components/Main'
import Home from '../components/Home'
import Profile from '../components/Profile'

import Router from 'react-router'
const Route = Router.Route
const DefaultRoute = Router.DefaultRoute

export default (
  <Route name='app' path='/' handler={Main} >
    <Route name='profile' path='profile/:user' handler={Profile} />
    <DefaultRoute handler={Home} />
  </Route>
)

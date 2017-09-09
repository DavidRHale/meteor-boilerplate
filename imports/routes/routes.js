import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import browserHistory from './history';

import Login from '../ui/Login';
import Signup from '../ui/Signup';
import Dashboard from '../ui/Dashboard';
import NotFound from '../ui/NotFound';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/dashboard'];

const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    browserHistory.replace('/');
  }
};

const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    browserHistory.replace('/');
  }
}

export const onAuthChange = (isAuthenticated) => {
  const pathname = browserHistory.location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isAuthenticated && isUnauthenticatedPage) {
    browserHistory.replace('/dashboard');
  }

  if (!isAuthenticated && isAuthenticatedPage) {
    browserHistory.replace('/');
  }
}

export const routes = (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={() => <Login onEnter={onEnterPublicPage} />} />
      <Route path="/signup" component={() => <Signup onEnter={onEnterPublicPage} />} />
      <Route path="/dashboard" component={() => <Dashboard onEnter={onEnterPrivatePage} />} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

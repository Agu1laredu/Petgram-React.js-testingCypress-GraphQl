import React, { Suspense } from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo';
import { NavBar } from './components/NavBar';

import { Home } from './pages/Home';
import {
  NotRegisteredUser,
  NotRegisteredUserSignUp,
} from './pages/NotRegisteredUser';

import { Redirect, Router } from '@reach/router';
import useAppState from './hooks/useAppState';

const Fav = React.lazy(() => import('./pages/Fav'));
const User = React.lazy(() => import('./pages/User'));
const Detail = React.lazy(() => import('./pages/Detail'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const App = () => {
  const { isAuth } = useAppState();
  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home exact path="/" />
        <Home exact path="/pet/:id" />
        <Detail exact path="/detail/:id" />
        {!isAuth && <NotRegisteredUser path="/signin" />}
        {!isAuth && <NotRegisteredUserSignUp path="/signup" />}
        {!isAuth && <Redirect from="/favs" to="/signin" />}
        {!isAuth && <Redirect from="/user" to="/signin" />}
        {isAuth && <Redirect from="/signin" to="/" />}
        <Fav exact path="/favs" />
        <User exact path="/user" />
      </Router>
      <NavBar />
    </Suspense>
  );
};

export default App;

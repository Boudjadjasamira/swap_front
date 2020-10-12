import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './view/Home/Home.js';
import Erreur404 from './view/Error/Erreur404.js';
import login from './view/Login/Login.js';
import Annonces from './view/Annonces/Annonces.js';

export default function Routes() {
  
  function PrivateRoute({component: Component, authed, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '../../Login/Login', state: {from: props.location}}} />}
      />
    )
  }

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Login" exact component={login} />
      <Route path="/Annonces" exact component={Annonces} />
      {/*<PrivateRoute authed={false} path='/dashboard' component={Home} />*/}
      {/* <Route path='*' exact={true} component={Erreur404} /> */}
    </Switch>
  );
}
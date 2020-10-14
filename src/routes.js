import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './view/Home/Home.js';
import Erreur404 from './view/Error/Erreur404.js';
import login from './view/Login/Login.js';
import Annonces from './view/Annonces/Annonces.js';
import Myprofil from './view/Profil/Myprofil.js';
import Register from './view/Register/Register.js';
import Faq from './view/Faq/Faq.js';
import Account from './view/Account/Account';
import Contact from './view/Contact/Contact';
import SingleAnnonce from './view/SingleAnnonce/SingleAnnonce';
import Publish from './view/Publish/publish.js';
import Invite from './view/Parrainage/Invite.js';
import Services from './view/DisplayService/Services';
import Viewservices from './view/Viewservices/Viewservices.js';
import Trophy from './view/Trophy/Trophy.js';
import Review from './view/Review/Review.js';


export default function Routes() {

  function PrivateRoute({ component: Component, authed, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <Component {...props} />
          : <Redirect to={{ pathname: '../../Login/Login', state: { from: props.location } }} />}
      />
    )
  }

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Login" exact component={login} />
      <Route path="/Annonces" exact component={Annonces} />
      <Route path="/Myprofil" exact component={Myprofil} />
      <Route path="/Register" exact component={Register} />
      <Route path="/Faq" exact component={Faq} />
      <Route path="/Account" exact component={Account} />
      <Route path="/Contact" exact component={Contact} />
      <Route path="/SingleAnnonce" exact component={SingleAnnonce} />
      <Route path="/Publish" exact component={Publish} />
      <Route path="/Invite" exact component={Invite} />
      <Route path="/Services" exact component={Services} />
      <Route path="/Viewservices" exact component={Viewservices} />
      <Route path="/Trophy" exact component={Trophy} />
      <Route path="/Review" exact component={Review} />
      {/*<PrivateRoute authed={false} path='/dashboard' component={Home} />*/}
      {/* <Route path='*' exact={true} component={Erreur404} /> */}
    </Switch>
  );
}
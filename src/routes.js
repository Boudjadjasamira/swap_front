import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './view/Home/Home.js';
import Erreur404 from './view/Error/Erreur404.js';
import login from './view/Login/Login.js';
import logout from './view/Logout/Logout.js';
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
import Trophy from './view/Trophy/Trophy.js';
import Review from './view/Review/Review.js';
import Reward from './view/Reward/Reward.js';
import Dashboard from './view/Dashboard/Dashboard.js';
import AdminAnnonces from './view/Dashboard/AdminAnnonces.js';
import Avis from './view/Dashboard/Avis.js';
import Membres from'./view/Dashboard/Membres.js';
import Categorie from'./view/Categorie/Categorie.js';


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
            <Route path="/Logout" exact component={logout} />
            <Route path="/Annonces" exact component={Annonces} />
            <Route path="/Myprofil" exact component={Myprofil} />
            <Route path="/Register" exact component={Register} />
            <Route path="/Faq" exact component={Faq} />
            <Route path="/Account" exact component={Account} />
            <Route path="/Contact" exact component={Contact} />
            <Route path="/Annonce/:id" exact component={SingleAnnonce} />
            <Route path="/Categorie/:name" exact component={Categorie}/>
            <Route path="/Publish" exact component={Publish} />
            <Route path="/Invite" exact component={Invite} />
            <Route path="/Services" exact component={Services} />
            <Route path="/Trophy" exact component={Trophy} />
            <Route path="/Review" exact component={Review} />
            <Route path="/Reward" exact component={Reward} />
            <Route path="/Dashboard" exact component={Dashboard} />
            <Route path="/Avis" exact component={Avis} />
            <Route path="/AdminAnnonces" exact component={AdminAnnonces} />
            <Route path="/Membres" exact component={Membres} />

            {/*<PrivateRoute authed={false} path='/dashboard' component={Home} />*/}
            <Route path='*' exact={true} component={Erreur404} />
        </Switch>
    );

}
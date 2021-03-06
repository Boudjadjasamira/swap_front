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
import FiltrerAnnonces from './view/FiltrerAnnonces/FiltrerAnnonces.js';
import ConditionsUtilisations from './view/Page-conditions-d-utilisations/ConditionsUtilisations.js';
import MentionsLegales from './view/MentionsLegales/MentionsLegales.js';
import PolitiqueConfidentialite from './view/PolitiqueConfidentialite/PolitiqueConfidentialite.js';
import Messagerie from './view/Messagerie/Messagerie';
import ForgotPassword from './view/ForgotPassword/ForgotPassword';
import Member from './view/Member/Member.js';
import Profil from './view/Member/Profil.js';
import RecoveryPassword from './view/RecoveryPassword/RecoveryPassword';


export default function Routes() {

    function PrivateRoute({ component: Component, ...rest }) {
        return (
            <Route
                {...rest}
                render={props => localStorage.getItem('ID') > 0
                    ? <Component {...props} />
                    : <Redirect to="/Login" />}
            />
        )
    }

    //Verification de connexion
    function isLoggedAdmin(){
        let verifLogged = false;

        //Si je suis connecte et que je suis a true avec isAdmin
        //Alors c'est bon
        if(localStorage.getItem('isAdmin').toString() === "true" && localStorage.getItem('ID') > 0){
            verifLogged = true
        }

        return verifLogged;
    }

    function PrivateRouteAdmin({ component: Component, ...rest }) {
        return (
            <Route
                {...rest}
                render={props => isLoggedAdmin()
                    ? <Component {...props} />
                    : <Redirect to="" />}
            />
        )
    }

    return (
        <Switch>
            
            {/* ROUTE PUBLIQUE */}
            <Route path="/" exact component={Home} />
            <Route path="/Login" exact component={login} />
            <Route path="/Logout" exact component={logout} />
            <Route path="/Annonces" exact component={Annonces} />
            <Route path="/Register" exact component={Register} />
            <Route path="/Faq" exact component={Faq} />
            <Route path="/Contact" exact component={Contact} />
            <Route path="/Annonce-:id" exact component={SingleAnnonce} />
            <Route path="/Categorie/:name" exact component={Categorie}/>
            <Route path="/Filtrer" exact component={FiltrerAnnonces}/>
            <Route path="/Page-conditions-d-utilisations" exact component={ConditionsUtilisations}/>
            <Route path="/Mentions-Legales" exact component={MentionsLegales}/>
            <Route path="/Politique-Confidentialite" exact component={PolitiqueConfidentialite}/>
            <Route path="/ForgotPassword" exact component={ForgotPassword}/>
            <Route path="/Recovery-:token" exact component={RecoveryPassword}/>
            <Route path="/Member" exact component={Member}/>
            <Route path="/Profil-:id" exact component={Profil}/>

            {/* ROUTE SECURE */}
            <PrivateRoute path='/Account' component={Account} />
            <PrivateRoute path='/Myprofil'component={Myprofil} />
            <PrivateRoute path="/Publish" component={Publish} />
            <PrivateRoute path="/Invite" component={Invite} />
            <PrivateRoute path="/Services" component={Services} />
            <PrivateRoute path="/Trophy" component={Trophy} />
            <PrivateRoute path="/Review" component={Review} />
            <PrivateRoute path="/Reward" component={Reward} />
            <PrivateRoute path="/Messagerie" component={Messagerie} />

            {/* ROUTE ADMIN SECURE */}
            <PrivateRouteAdmin path="/Dashboard" component={Dashboard} />
            <PrivateRouteAdmin path="/Dashboard-Avis" component={Avis} />
            <PrivateRouteAdmin path="/Dashboard-AdminAnnonces" component={AdminAnnonces} />
            <PrivateRouteAdmin path="/Dashboard-Membres" component={Membres} />

            {/* AUTRE ROUTE*/}
            <Route path='*' exact={true} component={Erreur404} />
        </Switch>
    );

}
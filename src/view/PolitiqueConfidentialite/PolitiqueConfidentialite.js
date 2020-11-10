import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
import Header from '../../view/Common/Header';
import Footer from '../../view/Common/Footer';



export default class PolitiqueConfidentialite extends Component {
  componentDidMount() {
    document.title = "Politiques de Confidentialité"
  }

  render() {
    return (
      <div className="body" id="bodyHome">

        {/* HEADER */}
        <Header></Header>

            <div className="pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center"><b>Politique de confidentialité :</b></h1>
                            <h3>Sécurité et protection des données personnelles</h3>
                            <h5><u><b>Définitions :</b></u></h5>
                            <p>
                                <b>L'Éditeur :</b> La personne, physique ou morale, qui édite les services de communication au public en ligne. <br/>
                                <b>Le Site :</b> L'ensemble des sites, pages Internet et services en ligne proposés par l'Éditeur.<br/>
                                <b>L'Utilisateur :</b> La personne utilisant le Site et les services.<br/>
                            </p>
           
                        
                            <p className="lead"><b>Nature des données collectées</b></p>
                     
                            <p className="lead"><b>Dans le cadre de l'utilisation des Sites, l\'Éditeur est susceptible de collecter les catégories de données suivantes concernant ses Utilisateurs :</b></p>
                            <p>Informations à caractère personnel (nom, prénom, téléphone, email)</p>
                            <p>Données de localisation (adresse)</p>
                            <p className="lead"><b>Communication des données personnelles à des tiers</b></p>
                            
                            <p>Pas de communication à des tiers<br/>
                                Vos données ne font l'objet d'aucune communication à des tiers. <br/>
                                Vous êtes toutefois informés qu'elles pourront être divulguées en application d'une loi, d'un règlement ou en vertu d'une décision d'une autorité réglementaire ou judiciaire compétente.</p>
                            <p className="lead"><b>Information préalable pour la communication des données personnelles à des tiers en cas de fusion / absorption</b></p>
                            <p className="lead"><b>Information préalable et possibilité d’opt-out avant et après la fusion / acquisition</b></p>
                            <p>Dans le cas où nous prendrions part à une opération de fusion, d’acquisition ou à toute autre forme de cession d’actifs, nous nous engageons à garantir la confidentialité de vos données personnelles et à vous informer avant que celles-ci ne soient transférées ou soumises à de nouvelles règles de confidentialité.</p>
                            <p className="lead"><b>Collecte des données d'identité</b></p>
                            <p className="lead"><b>Consultation libre</b></p>
                            <p>La consultation du Site ne nécessite pas d'inscription ni d'identification préalable. Elle peut s'effectuer sans que vous ne communiquiez de données nominatives vous concernant (nom, prénom, adresse, etc). Nous ne procédons à aucun enregistrement de données nominatives pour la simple consultation du Site.</p>
                            <p className="lead"><b>Collecte des données d'identification</b></p>
                            <p className="lead"><b>Formulaire de contact</b></p>
                            <p>Nous utilisons vos informations du formulaire de contact pour les envoyer par mail à <a href="mailto:contact@swap.fr">contact@swap.fr</a></p>
                            <p className="lead"><b>Collecte des données du terminal</b></p>
                            <p className="lead"><b>Aucune collecte des données techniques</b></p>
                            <p>Nous ne collectons et ne conservons aucune donnée technique de votre appareil (adresse IP, fournisseur d'accès à Internet...).</p>
                            <p className="lead"><b>Cookies</b></p>
                            
                            <p className="lead"><b>Durée de conservation des cookies</b></p>
                            <p>Conformément aux recommandations de la CNIL, la durée maximale de conservation des cookies est de 13 mois au maximum après leur premier dépôt dans le terminal de l'Utilisateur, tout comme la durée de la validité du consentement de l’Utilisateur à l’utilisation de ces cookies. La durée de vie des cookies n’est pas prolongée à chaque visite. Le consentement de l’Utilisateur devra donc être renouvelé à l'issue de ce délai.</p>
                            <p className="lead"><b>Finalité cookies</b></p>
                            <p>Les cookies peuvent être utilisés pour des fins statistiques notamment pour optimiser les services rendus à l'Utilisateur, à partir du traitement des informations concernant la fréquence d'accès, la personnalisation des pages ainsi que les opérations réalisées et les informations consultées.
                            Vous êtes informé que l'Éditeur est susceptible de déposer des cookies sur votre terminal. Le cookie enregistre des informations relatives à la navigation sur le service (les pages que vous avez consultées, la date et l'heure de la consultation...) que nous pourrons lire lors de vos visites ultérieures.</p>
                            <p className="lead"><b>Opt-in pour le dépôt de cookies</b></p>
                            <p>Nous n'utilisons pas de cookies. Si nous devions en utiliser à l’avenir, vous en seriez informé préalablement et auriez la possibilité de désactiver ces cookies.</p>
                            <p className="lead"><b>Conservation des données techniques</b></p>
                            <p className="lead"><b>Durée de conservation des données techniques</b></p>
                            <p>Nous ne conservons aucune données techniques.</p>
                            <p className="lead"><b>Délai de conservation des données personnelles et d'anonymisation</b></p>
                            <p className="lead"><b>Pas de conservation des données</b></p>
                            
                            <p>Nous ne conservons aucune donnée personnelle au delà de votre durée de connexion au service pour les finalités décrites dans les présentes CGU.</p>
                            <p className="lead"><b>Limitation de la responsabilité</b></p>
                            <p>En aucun cas les engagements définis au point ci-dessus relatifs à la notification en cas de faille de sécurité ne peuvent être assimilés à une quelconque reconnaissance de faute ou de responsabilité quant à la survenance de l'incident en question.</p>
                            <p className="lead"><b>Transfert des données personnelles à l'étranger</b></p>
                            <p className="lead"><b>Pas de transfert en dehors de l'Union européenne</b></p>
                            <p>L'Éditeur s'engage à ne pas transférer les données personnelles de ses Utilisateurs en dehors de l'Union européenne.</p>
                            <p className="lead"><b>Modification des CGU et de la politique de confidentialité</b></p>
                            <p className="lead"><b>En cas de modification des présentes CGU, engagement de ne pas baisser le niveau de confidentialité de manière substantielle sans l'information préalable des personnes concernées</b></p>
                            <p>Nous nous engageons à vous informer en cas de modification substantielle des présentes CGU, et à ne pas baisser le niveau de confidentialité de vos données de manière substantielle sans vous en informer et obtenir votre consentement.</p>
                            <p className="lead"><b>Droit applicable et modalités de recours</b></p>
                        
                            <p className="lead"><b>Application du droit français (législation CNIL) et compétence des tribunaux</b></p>
                            <p>Les présentes CGU et votre utilisation du Site sont régies et interprétées conformément aux lois de France, et notamment à la Loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés. Le choix de la loi applicable ne porte pas atteinte à vos droits en tant que consommateur conformément à la loi applicable de votre lieu de résidence. Si vous êtes un consommateur, vous et nous acceptons de se soumettre à la compétence non-exclusive des juridictions françaises, ce qui signifie que vous pouvez engager une action relative aux présentes CGU en France ou dans le pays de l'UE dans lequel vous vivez. Si vous êtes un professionnel, toutes les actions à notre encontre doivent être engagées devant une juridiction en France.</p>
                            <p>En cas de litige, les parties chercheront une solution amiable avant toute action judiciaire. En cas d'échec de ces tentatives, toutes contestations à la validité, l'interprétation et / ou l'exécution des présentes CGU devront être portées même en cas de pluralité des défendeurs ou d'appel en garantie, devant les tribunaux français.</p>
                        </div>
                    </div>
            </div>
        </div> 
   



        

        {/* FOOTER */}
        <Footer></Footer>
    </div>

    );
  }
}

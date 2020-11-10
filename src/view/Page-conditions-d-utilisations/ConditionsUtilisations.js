import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
import Header from '../../view/Common/Header';
import Footer from '../../view/Common/Footer';



export default class ConditionsUtilisations extends Component {
  componentDidMount() {
    document.title = "Conditions d'Utilisations"
  }

  render() {
    return (
<div className="body" id="bodyHome">

        {/* HEADER */}
        <Header></Header>

          <div className="container border">   
            
              <br />
                
              <h2 className="text-center">Préambule</h2>
        <br />
        <p className="text-justify">
            Les présentes conditions générales d'utilisation (ci-après les "Conditions générales d'Utilisation")
            décrivent les termes et conditions dans lesquelles la société Swap (se reporter aux mentions légales) fournit
            un service de création et d'hébergement de pages personnelles sur Internet.<br />
            Le contenu des sites créés sur la plate-forme Swap.fr n'est pas de la responsabilité de la société Swap.
            </p>
        <br />
        <br />
      <h2 className="text-center">Mentions légales</h2>
        <br />
          
            <p className="text-center">Swap.fr est édité par la SARL SWAP:</p>
            <br />
            <p className="text-center">SARL SWAP au capital de 62216€</p>
            <p className="text-center">Siret : 012 345 678 91011</p>
            <p className="text-center">APE : 6201Z</p>
            <p className="text-center">Gérantes : Lara Lecomte et Samira Boudjadja</p>
            <p className="text-center">SWAP</p>
            <p className="text-center">1 rue des martines</p>
            <p className="text-center">Luxembourg</p>
            <p className="text-center">09 01 02 03 04 </p>
            <p className="text-center">(aucun support ne sera assuré sur ce numéro de téléphone)</p>
            <p className="text-center">contact@swap.com</p>
          <br />
          <br />
      <h2 className="text-center">Acceptation des Conditions Générales d'Utilisation</h2>
          <br />
          <p className="text-justify">En vous connectant sur le site www.swap.fr, vous vous engagez à respecter les présentes
            Conditions Générales d'Utilisation du site Swap.fr qui seront susceptibles d'être modifiées librement
            à tout moment. Il vous est donc conseillé de vous référer régulièrement à
            la dernière version des Conditions Générales d'Utilisation disponibles en permanence sur le site.
            Toute personne surfant sur le site www.swap.fr est qualifiée d'"Utilisateur" par les présentes Conditions Générales d'Utilisation,
            et est à ce titre assujettie à son respect.
            <br />
            <br />
            Nos services sont réservés aux personnes juridiquement capables de souscrire des
            contrats en droit français. Nos services ne sont pas disponibles pour les mineurs de moins de 18 ans,
            hormis sous l'autorité et la surveillance expresse de leurs parents ou de leur tuteur légal.
          </p>
          <br />
      <h2 className="text-center">Création de site Internet et contenus</h2>
          <br />
          <p className="text-justify">Swap met à disposition un espace libre pour mettre en ligne des textes et des photos. Ces contenus ne doivent pas :
            Être illégaux au regard de la loi française. Il est entendu par illégal
            les sites traitant du hacking, piratage, warez, téléchargement illégal, incitant à la haine,
            au sexisme, à l'homophobie ou au crime, contenant du matériel pédophile, nazi…
            Être faux, imprécis, mensongers ou frauduleux.
            Porter atteinte aux droits d'auteurs, aux droits des brevets
            ou des marques, aux secrets de fabrication, aux autres droits de propriété intellectuelle,
            au droit de divulgation ou à la vie privée des tiers.
            Être diffamatoires, médisants, calomnieux, discriminatoires ou inciter à la violence
            ou à la haine raciale, religieuse ou ethnique.
            Comporter de contenus obscènes, pornographiques ou pédophiles (même en texte).
            Contenir un programme informatique visant à endommager ou à intercepter
            clandestinement tout système informatique, données ou informations nominatives.
            Proposer à l'internaute de gagner de l'argent avec des méthodes
            soi-disant miracles (systèmes pyramidaux, affiliation, kits e-book, etc.)
            Contenir uniquement de la publicité.
            Augmenter de façon fictive le trafic d'un site
            (ex : autosurf, popup under, barres de surf, etc.).
            Faire l'objet d'attaques de type DDoS (déni de service) qui nuisent à la stabilité
            de la plateforme, à la bonne marche du service et affectent les autres utilisateurs.
            <br />
            <br />
            De manière générale, Swap.fr se réserve le droit de suspendre unilatérallement
            et sans avoir a légitimer sa décision tout site internet hébergé sur sa plateforme.
            Swap se réserve également le droit de modifier sans préavis le contenu, la définition
            et les capacités des outils mis gracieusement à disposition de ses utilisateurs.
          </p>
          <br />
        <h2 className="text-center">Responsabilités</h2>
          <br />
          <p className="text-justify">En cas de litige sur un site d'un utilisateur, la société Swap
            ne pourra pas être considéré comme responsable, seul le propriétaire du compte qui est identifié
            avec un nom d'utilisateur et qui a accepté les présentes conditions générales
            d'utilisation est responsable du contenu de son site. Par le terme "contenu", on désigne
            l'ensemble des textes, images et médias présents sur ses pages hormis les éléments
            de la charte graphique mis au point par Swap.fr. L'utilisateur est aussi responsable des commentaires que peuvent laisser les visiteurs
            sur son site et s'engage donc à vérifier et supprimer tout commentaire litigieux.
            <br />
            <br />
            En cas de non respect des présentes conditions générales d'utilisation,
            Swap se réserve le droit de supprimer le compte et le site de l'utilisateur sans aucun préavis.
            <br />
            <br />
            En cas de trafic trop important  sur le site de l'utilisateur pouvant s'apparenter à
            une attaque DDOS, Swap se réserve le droit de couper l'accès au site, ainsi qu'éventuellement aux autres sites de l'utilisateur, temporairement ou définitivement. L'utilisateur sera prévenu de cet
            état de fait et pourra accéder à un remboursement de ses abonnements en cours au prorata restant
            (en cas de coupure définitive) ou au prorata de la durée de coupure d'accès à son site.
          </p>
          <br />
        <h2 className="text-center">Obligations de l'utilisateur</h2>
        <br />
        <p className="text-justify">L'utilisateur s'engage lors de son inscription à donner des informations
            véridiques, correctes et complètes. En cas de changement de ces informations, l'utilisateur
            est tenu d'en informer immédiatement Swap.
            <br />
            <br />
            L'Utilisateur s'engage à ce que le contenu de son site ainsi que le contenu
            des propos tenus sur le forum et le site de https://www.Swap.fr soit en conformité avec les lois et
            règlements en vigueur. Il est rappelé que seul l'Utilisateur est responsable du contenu qu'
            il diffuse sur Internet et sur son site, en aucun cas Swap ne sera considéré comme responsable du contenu d'un Utilisateur.
            <br />
            <br />
            L'Utilisateur s'engage à ce que le contenu de son site ne porte pas atteinte
            aux droits des tiers. L'utilisateur doit notifier immédiatement à Swap  toute
            décision judiciaire relative au nom de domaine, au contenu ou affectant plus généralement
            les services utilisés et le compte de l'utilisateur.
            <br />
            <br />
            L'Utilisateur autorise Swap à faire la promotion de son site, de quelque
            manière que ce soit et par tout moyen de communication (en particulier la réutilisation de tout
            ou partie du site, du visuel de celui-ci, ajout de liens à partir et vers le site).
            Swap ne peut être considéré comme responsable des dommages liés à cette promotion.
            <br />
            <br />
            L'Utilisateur garantit que toutes les informations, données, fichiers, films,
            photographies, logiciels, ou bases de données lui appartiennent ou sont libres de droit.
            <br />
            <br />
            L'Utilisateur s'engage à ne pas utiliser les outils mis à disposition
            par Swap dans un but autre que la publication de pages personnelles ou professionnelles
            (en particulier à des fins de stockage de données).
            <br />
            <br />
            L'Utilisateur s'engage à ne pas inclure sur son site des adresses ou des liens
            hypertextes renvoyant vers des sites extérieurs qui soient contraires aux lois et
            règlements en vigueur, et qui portent atteinte aux droits des tiers ou
            qui soient contraires aux présentes Conditions d'Utilisation.
            <br />
            L'Utilisateur s’engage à ne pas pratiquer l’envoi de newsletters ou de
            messages non sollicités (spamming ou mailing en masse), ou des usages pouvant
            s'y apparenter, avec ses comptes mails. Swap se réserve le droit de
            désactiver un compte mail en cas de violation de cette règle.
            <br />
            L'Utilisateur s'engage à mettre à jour son site au moins une fois par an.
            Les sites n'étant pas mis à jour depuis plus de 12 mois, n'ayant pas
            d'offre associée et n'ayant pas eu de visiteurs pendant au moins 6 mois seront
            considérés comme inactifs et seront susceptibles d'être supprimés. 
            <br />
            <br />
            L'Utilisateur recevra un courriel sur l'adresse mail renseignée sur son compte Utilisateur.
            Ce courriel l'informe de la suppression du site sous 60 jours si aucune modification n'est apportée
            sur le site inactif dans ce laps de temps.
            <br />
            <br />
            Si le site est supprimé pour inactivité, il pourra encore être restauré
            pendant une période de 30 jours. Dans ce cas, l'Utilisateur doit faire part de son souhait de restaurer
            le site auprès de l'équipe de support technique.
            </p>
          <br />
        <h2 className="text-center">Responsabilités de Swap.fr</h2>
          <br />

          <p className="text-justify">Swap ne peut être considéré comme responsable du contenu des pages de
            l'Utilisateur. L'Utilisateur accepte et reconnaît qu'il est seul responsable des informations, textes,
            images, données, fichiers, programmes contenus dans son site.
            <br />
            <br />
            L'Utilisateur accepte de faire son affaire personnelle et de dégager Swap  de
            toute responsabilité, perte, réclamation, litige, dommage ou dépense, y compris les frais de justice
            et de défense, revendiqués par un tiers ou par un autre Utilisateur du fait de son site ou sa page personnelle.
            <br />
            <br />
            Swap est tenu à une obligation de moyens dans le cadre des présentes Conditions
            d'Utilisation et ne saurait en aucun cas être responsable de toute perte, préjudice ou dommage indirect de quelque
            nature que ce soit résultant de la gestion, l'utilisation, l'exploitation, d'une interruption ou d'un dysfonctionnement du Service.
            <br />
            <br />
            Swap ne peut être considéré comme responsable du contenu des sites extérieurs,
            du fonctionnement de l'accès à ces sites. Swap n'approuve pas et n'est pas responsable
            du contenu, des idées, des opinions, des produits ou services vendus sur ces sites extérieurs.
            <br />
            <br />
            L'Utilisateur reconnaît être seul responsable des liens hypertextes et adresses Internet qu'il inclut
            sur son site et garantit Swap contre tout litige ou toute réclamation relative à ces liens.
            <br />
            <br />
            Swap ne garantit pas contre et ne peut être considéré comme responsable de la perte ou de
            l'altération des fichiers ou données que l'Utilisateur transfère sur son site.
            <br />
            <br />
            L'Utilisateur accepte de transférer ces données et fichiers sous sa seule responsabilité
            et en connaissance de cause. Il incombe à l'Utilisateur d'effectuer toute mesure de sauvegarde qu'il lui semblera nécessaire.
            <br />
            <br />
            Swap se réserve le droit d'inclure un bandeau publicitaire ou une fenêtre surgissante à
            caractère publicitaire sur le site de l'Utilisateur, quel que soit l'annonceur. Cependant Swap s'engage à ne
            diffuser aucune campagne allant contre les règles imposées aux utilisateurs de Swap.fr.
            Ainsi, aucune bannière érotique ou pornographique ne sera diffusée sur le réseau de sites Swap.fr.
            <br />
            <br />
            En aucun cas, l'Utilisateur ne pourra exiger un prix ou une indemnisation de la part de Swap ou de l'annonceur. Swap se réserve
            le droit de supprimer, modifier, déplacer ce bandeau publicitaire sans autorisation préalable de l'Utilisateur.
            <br />
            <br />
            Swap ne pourrait être tenu pour responsable en cas d'interruption de service et
            se réserve la possibilité de suspendre son service pour des raisons de maintenance ou de mise à jour.
            <br />
            <br />
            Swap ne garantit pas une fréquentation minimum du site de l'Utilisateur.
            <br />
            <br />
            Swap ne garantit pas non plus la réalisation d'un quelconque chiffre
            d'affaires ou bénéfice par l'Utilisateur.
            <br />
            <br />
            Swap ne peut notamment être considérée comme responsable :
            <br />
            <br />
                du mauvais fonctionnement, de la discontinuité ou de la mauvaise qualité
                des services proposés sur le site de l'Utilisateur.
                de la non conclusion ou de tout litige dans la conclusion ou l'exécution
                d'un contrat proposé sur le site de l'Utilisateur.
                des vices cachés, de la conformité, de la légalité ou
                de la dangerosité des biens et services proposés sur le site de l'Utilisateur.
                des mensonges, exagérations, dols, violences, réticences dolosives commise par l'Utilisateur.         
          </p>
          <br />
            <br />
          </div>                   

        {/* FOOTER */}
        <Footer></Footer>
        </div>
  
    );
  }
}

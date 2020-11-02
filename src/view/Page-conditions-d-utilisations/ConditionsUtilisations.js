import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

      
<div class="row-container rd-2 page_1 ">
<div class="row-content">
<div class="row" data-role="line">
<div data-role="cell" class="column  " style={{width:"100%"}}>
<div id="cgu_column" class="column-content">
<h2 className="text-center">Pr&eacute;ambule</h2>
<blockquote>
<p className="text-center">Les pr&eacute;sentes conditions g&eacute;n&eacute;rales d&#39;utilisation (ci-apr&egrave;s les &quot;Conditions g&eacute;n&eacute;rales d&#39;Utilisation&quot;) <br /> d&eacute;crivent les termes et conditions dans lesquelles la soci&eacute;t&eacute; Swap&nbsp;(se reporter aux mentions l&eacute;gales) fournit <br /> un service de cr&eacute;ation et d&#39;h&eacute;bergement de pages personnelles sur Internet.</p>
<p className="text-center">Le contenu des sites cr&eacute;&eacute;s sur la plate-forme Swap.fr n&#39;est pas de la responsabilit&eacute; de la soci&eacute;t&eacute; Swap.</p>
</blockquote>
<h2 className="text-center"><a id="mentions-legales" name="mentions-legales">Mentions l&eacute;gales</a></h2>
<blockquote>
<p className="text-center">Swap.fr est &eacute;dit&eacute; par la SARL SWAP.</p>
<p className="text-center">SARL SWAP au capital de&nbsp;62216&euro;<br />
Siret :&nbsp;012 345 678 91011<br />
APE :&nbsp;6201Z<br />
G&eacute;rantes : <a href="">Lara Lecomte et Samira Boudjadja  </a></p>
<p className="text-center">SWAP<br />
1 rue des martines<br />
Luxembourg</p>
<p className="text-center">09 01 02 03 04&nbsp; <br />(<strong>aucun support ne sera assur&eacute; sur ce num&eacute;ro de t&eacute;l&eacute;phone</strong>)<br />
contact@swap.com</p>
</blockquote>
<h2 className="text-center"><a id="acceptation-CGU" name="acceptation-CGU">Acceptation des Conditions G&eacute;n&eacute;rales d&#39;Utilisation</a></h2>
<blockquote>
<p className="text-center">En vous connectant sur le site www.swap.fr, vous vous engagez &agrave; respecter les pr&eacute;sentes <br />Conditions G&eacute;n&eacute;rales d&#39;Utilisation du site Swap.fr qui seront susceptibles d&#39;&ecirc;tre modifi&eacute;es librement <br />&agrave; tout moment. Il vous est donc conseill&eacute; de vous r&eacute;f&eacute;rer r&eacute;guli&egrave;rement &agrave;<br /> la derni&egrave;re version des Conditions G&eacute;n&eacute;rales d&#39;Utilisation disponibles en permanence sur le site.<br /> Toute personne surfant sur le site www.swap.fr est qualifi&eacute;e d&#39;&quot;Utilisateur&quot; par les pr&eacute;sentes Conditions G&eacute;n&eacute;rales d&#39;Utilisation, <br />et est &agrave; ce titre assujettie &agrave; son respect.</p>
<p className="text-center">Nos services sont r&eacute;serv&eacute;s aux personnes juridiquement capables de souscrire des <br />contrats en droit fran&ccedil;ais. Nos services ne sont pas disponibles pour les mineurs de moins de 18 ans, <br />hormis sous l&#39;autorit&eacute; et la surveillance expresse de leurs parents ou de leur tuteur l&eacute;gal.</p>
</blockquote>
<h2 className="text-center"><a id="creation-et-contenu" name="creation-et-contenu">Cr&eacute;ation de site Internet&nbsp;et contenus</a></h2>
<blockquote>
<p className="text-center">Swap met &agrave; disposition un espace libre pour mettre en ligne des textes et des photos. Ces contenus ne doivent pas :</p>
<ul className="text-center">
<li>&Ecirc;tre ill&eacute;gaux au regard de la loi fran&ccedil;aise. Il est entendu par ill&eacute;gal <br />les sites traitant du hacking, piratage, warez, t&eacute;l&eacute;chargement ill&eacute;gal, incitant &agrave; la haine, <br />au sexisme, &agrave; l&#39;homophobie ou au crime, contenant du mat&eacute;riel p&eacute;dophile, nazi&hellip;</li>
<li>&Ecirc;tre faux, impr&eacute;cis, mensongers ou frauduleux.
</li>
<li>Porter atteinte aux droits d&#39;auteurs, aux droits des brevets <br />ou des marques, aux secrets de fabrication, aux autres droits de propri&eacute;t&eacute; intellectuelle, <br />au droit de divulgation ou &agrave; la vie priv&eacute;e des tiers.</li>
<li>&Ecirc;tre diffamatoires, m&eacute;disants, calomnieux, discriminatoires ou inciter &agrave; la violence <br />ou &agrave; la haine raciale, religieuse ou ethnique.</li>
<li>Comporter de contenus obsc&egrave;nes, pornographiques ou p&eacute;dophiles (m&ecirc;me en texte).</li>
<li>Contenir un programme informatique visant &agrave; endommager ou &agrave; intercepter <br />clandestinement tout syst&egrave;me informatique, donn&eacute;es ou informations nominatives.</li>
<li>Proposer &agrave; l&#39;internaute de gagner de l&#39;argent avec des m&eacute;thodes <br />soi-disant miracles (syst&egrave;mes pyramidaux, affiliation, kits e-book, etc.)</li>
<li>Contenir uniquement de la publicit&eacute;.</li>
<li>Augmenter de fa&ccedil;on fictive le trafic d&#39;un site<br /> (ex : autosurf, popup under, barres de surf, etc.).</li>
<li>Faire l&#39;objet d&#39;attaques de type DDoS (d&eacute;ni de service) qui nuisent &agrave; la stabilit&eacute; <br />de la plateforme, &agrave; la bonne marche du service et affectent les autres utilisateurs.</li>
</ul>
<p className="text-center">De mani&egrave;re g&eacute;n&eacute;rale, Swap.fr se r&eacute;serve le droit de suspendre unilat&eacute;rallement<br /> et sans avoir a l&eacute;gitimer sa d&eacute;cision tout site internet h&eacute;berg&eacute; sur sa plateforme. <br />Swap se r&eacute;serve &eacute;galement le droit de modifier sans pr&eacute;avis le contenu, la d&eacute;finition <br />et les capacit&eacute;s des outils mis gracieusement &agrave; disposition de ses utilisateurs.</p>
</blockquote>
<h2 className="text-center"><a id="responsabilites" name="responsabilites">Responsabilit&eacute;s</a></h2>
<blockquote>
<p className="text-center">En cas de litige sur un site d&#39;un utilisateur, la soci&eacute;t&eacute; Swap <br />&nbsp;ne pourra pas &ecirc;tre consid&eacute;r&eacute; comme responsable, seul le propri&eacute;taire du compte qui est identifi&eacute; <br />avec un nom d&#39;utilisateur et qui a accept&eacute; les pr&eacute;sentes conditions g&eacute;n&eacute;rales<br /> d&#39;utilisation est responsable du contenu de son site. Par le terme &quot;contenu&quot;, on d&eacute;signe<br /> l&#39;ensemble des textes, images et m&eacute;dias pr&eacute;sents sur ses pages hormis les &eacute;l&eacute;ments <br />de la charte graphique mis au point par Swap.fr. L&#39;utilisateur est aussi responsable des commentaires que peuvent laisser les visiteurs <br />sur son site et s&#39;engage donc &agrave; v&eacute;rifier et supprimer tout commentaire litigieux.</p>
<p className="text-center">En cas de non respect des pr&eacute;sentes conditions g&eacute;n&eacute;rales d&#39;utilisation,<br /> Swap se r&eacute;serve le droit de supprimer le compte et le site de l&#39;utilisateur sans aucun pr&eacute;avis.</p>
<p className="text-center">En cas de trafic trop important &nbsp;sur le site de l&#39;utilisateur pouvant s&#39;apparenter &agrave;<br /> une attaque DDOS, Swap se r&eacute;serve le droit de couper l&#39;acc&egrave;s au site, ainsi qu&#39;&eacute;ventuellement aux autres sites de l&#39;utilisateur, temporairement ou d&eacute;finitivement. L&#39;utilisateur sera pr&eacute;venu de cet <br />&eacute;tat de fait et pourra acc&eacute;der &agrave; un remboursement de ses abonnements en cours au prorata restant <br />(en cas de coupure d&eacute;finitive) ou au prorata de la dur&eacute;e de coupure d&#39;acc&egrave;s &agrave; son site.</p>
</blockquote>
<h2 className="text-center"><a id="obligations-utilisateur" name="obligations-utilisateur">Obligations de l&#39;utilisateur</a></h2>
<blockquote>
<p className="text-center">L&#39;utilisateur s&#39;engage lors de son inscription &agrave; donner des informations<br /> v&eacute;ridiques, correctes et compl&egrave;tes. En cas de changement de ces informations, l&#39;utilisateur<br /> est tenu d&#39;en informer imm&eacute;diatement Swap.</p>
<p className="text-center">L&#39;Utilisateur s&#39;engage &agrave; ce que le contenu de son site ainsi que le contenu <br />des propos tenus sur le forum et le site de https://www.Swap.fr soit en conformit&eacute; avec les lois et<br /> r&egrave;glements en vigueur. Il est rappel&eacute; que seul l&#39;Utilisateur est responsable du contenu qu&#39;<br />il diffuse sur Internet et sur son site, en aucun cas Swap&nbsp;ne sera consid&eacute;r&eacute; comme responsable du contenu d&#39;un Utilisateur.</p>
<p className="text-center">L&#39;Utilisateur s&#39;engage &agrave; ce que le contenu de son site ne porte pas atteinte <br />aux droits des tiers. L&#39;utilisateur doit notifier imm&eacute;diatement &agrave; Swap &nbsp;toute <br />d&eacute;cision judiciaire relative au nom de domaine, au contenu ou affectant plus g&eacute;n&eacute;ralement <br />les services utilis&eacute;s et le compte de l&#39;utilisateur.</p>
<p className="text-center">L&#39;Utilisateur autorise Swap&nbsp;&agrave; faire la promotion de son site, de quelque <br />mani&egrave;re que ce soit et par tout moyen de communication (en particulier la r&eacute;utilisation de tout <br />ou partie du site, du visuel de celui-ci, ajout de liens &agrave; partir et vers le site). <br />Swap&nbsp;ne peut &ecirc;tre consid&eacute;r&eacute; comme responsable des dommages li&eacute;s &agrave; cette promotion.</p>
<p className="text-center">L&#39;Utilisateur garantit que toutes les informations, donn&eacute;es, fichiers, films,<br /> photographies, logiciels, ou bases de donn&eacute;es lui appartiennent ou sont libres de droit.</p>
<p className="text-center">L&#39;Utilisateur s&#39;engage &agrave; ne pas utiliser les outils mis &agrave; disposition <br />par Swap&nbsp;dans un but autre que la publication de pages personnelles ou professionnelles <br />(en particulier &agrave; des fins de stockage de donn&eacute;es).</p>
<p className="text-center">L&#39;Utilisateur s&#39;engage &agrave; ne pas inclure sur son site des adresses ou des liens<br /> hypertextes renvoyant vers des sites ext&eacute;rieurs qui soient contraires aux lois et <br />r&egrave;glements en vigueur, et qui portent atteinte aux droits des tiers ou<br /> qui soient contraires aux pr&eacute;sentes Conditions d&#39;Utilisation.</p>
<p className="text-center">L&#39;Utilisateur s&rsquo;engage &agrave; ne pas pratiquer l&rsquo;envoi de newsletters ou de <br />messages non sollicit&eacute;s (spamming ou mailing en masse),&nbsp;ou des usages pouvant<br /> s&#39;y apparenter,&nbsp;avec ses comptes mails. Swap se r&eacute;serve le droit de<br /> d&eacute;sactiver un compte mail en cas de violation de cette r&egrave;gle.</p>
<p className="text-center">L&#39;Utilisateur s&#39;engage &agrave; mettre &agrave; jour son site au moins une fois par an.<br /> Les sites n&#39;&eacute;tant pas mis &agrave; jour depuis plus de 12 mois, n&#39;ayant pas <br />d&#39;offre associ&eacute;e et n&#39;ayant pas eu de visiteurs pendant au moins 6 mois seront<br /> consid&eacute;r&eacute;s comme inactifs et seront susceptibles d&#39;&ecirc;tre supprim&eacute;s.&nbsp;<br />
L&#39;Utilisateur recevra un courriel sur l&#39;adresse mail renseign&eacute;e sur son compte Utilisateur. <br />Ce courriel l&#39;informe de la suppression du site sous 60 jours si aucune modification n&#39;est apport&eacute;e<br /> sur le site inactif dans ce laps de temps.<br />
Si le site est supprim&eacute; pour inactivit&eacute;, il pourra encore &ecirc;tre restaur&eacute; <br />pendant une p&eacute;riode de 30 jours. Dans ce cas, l&#39;Utilisateur doit faire part de son souhait de restaurer<br /> le site aupr&egrave;s de l&#39;&eacute;quipe de support technique.</p>
</blockquote>
<h2 className="text-center"><a id="responsabilites-ems" name="responsabilites-ems">Responsabilit&eacute;s de Swap.fr</a></h2>
<blockquote>
<p className="text-center">Swap ne peut &ecirc;tre consid&eacute;r&eacute; comme responsable du contenu des pages de <br />l&#39;Utilisateur. L&#39;Utilisateur accepte et reconna&icirc;t qu&#39;il est seul responsable des informations, textes, <br />images, donn&eacute;es, fichiers, programmes contenus dans son site.</p>
<p className="text-center">L&#39;Utilisateur accepte de faire son affaire personnelle et de d&eacute;gager Swap &nbsp;de<br /> toute responsabilit&eacute;, perte, r&eacute;clamation, litige, dommage ou d&eacute;pense, y compris les frais de justice <br />et de d&eacute;fense, revendiqu&eacute;s par un tiers ou par un autre Utilisateur du fait de son site ou sa page personnelle.</p>
<p className="text-center">Swap&nbsp;est tenu &agrave; une obligation de moyens dans le cadre des pr&eacute;sentes Conditions <br />d&#39;Utilisation et ne saurait en aucun cas &ecirc;tre responsable de toute perte, pr&eacute;judice ou dommage indirect de quelque<br /> nature que ce soit r&eacute;sultant de la gestion, l&#39;utilisation, l&#39;exploitation, d&#39;une interruption ou d&#39;un dysfonctionnement du Service.</p>
<p className="text-center">Swap&nbsp;ne peut &ecirc;tre consid&eacute;r&eacute; comme responsable du contenu des sites ext&eacute;rieurs, <br />du fonctionnement de l&#39;acc&egrave;s &agrave; ces sites. Swap&nbsp;n&#39;approuve pas et n&#39;est pas responsable <br />du contenu, des id&eacute;es, des opinions, des produits ou services vendus sur ces sites ext&eacute;rieurs.</p>
<p className="text-center">L&#39;Utilisateur reconna&icirc;t &ecirc;tre seul responsable des liens hypertextes et adresses Internet qu&#39;il inclut <br />sur son site et garantit Swap&nbsp;contre tout litige ou toute r&eacute;clamation relative &agrave; ces liens.</p>
<p className="text-center">Swap&nbsp;ne garantit pas contre et ne peut &ecirc;tre consid&eacute;r&eacute; comme responsable de la perte ou de<br /> l&#39;alt&eacute;ration des fichiers ou donn&eacute;es que l&#39;Utilisateur transf&egrave;re sur son site.</p>
<p className="text-center">L&#39;Utilisateur accepte de transf&eacute;rer ces donn&eacute;es et fichiers sous sa seule responsabilit&eacute; <br />et en connaissance de cause. Il incombe &agrave; l&#39;Utilisateur d&#39;effectuer toute mesure de sauvegarde qu&#39;il lui semblera n&eacute;cessaire.</p>
<p className="text-center">Swap&nbsp;se r&eacute;serve le droit d&#39;inclure un bandeau publicitaire ou une fen&ecirc;tre surgissante &agrave; <br />caract&egrave;re publicitaire sur le site de l&#39;Utilisateur, quel que soit l&#39;annonceur. Cependant Swap&nbsp;s&#39;engage &agrave; ne <br />diffuser aucune campagne allant contre les r&egrave;gles impos&eacute;es aux utilisateurs de Swap.fr.<br /> Ainsi, aucune banni&egrave;re &eacute;rotique ou pornographique ne sera diffus&eacute;e sur le r&eacute;seau de sites Swap.fr.</p>
<p className="text-center">En aucun cas, l&#39;Utilisateur ne pourra exiger un prix ou une indemnisation de la part de Swap&nbsp;ou de l&#39;annonceur. Swap&nbsp;se r&eacute;serve<br /> le droit de supprimer, modifier, d&eacute;placer ce bandeau publicitaire sans autorisation pr&eacute;alable de l&#39;Utilisateur.</p>
<p className="text-center">Swap&nbsp;ne pourrait &ecirc;tre tenu pour responsable en cas d&#39;interruption de service et <br />se r&eacute;serve la possibilit&eacute; de suspendre son service pour des raisons de maintenance ou de mise &agrave; jour.</p>
<p className="text-center">Swap&nbsp;ne garantit pas une fr&eacute;quentation minimum du site de l&#39;Utilisateur.</p>
<p className="text-center">Swap&nbsp;ne garantit pas non plus la r&eacute;alisation d&#39;un quelconque chiffre<br /> d&#39;affaires ou b&eacute;n&eacute;fice par l&#39;Utilisateur.</p>
<p className="text-center">Swap&nbsp;ne peut notamment &ecirc;tre consid&eacute;r&eacute;e comme responsable :</p>
<ul className="text-center">
<li>du mauvais fonctionnement, de la discontinuit&eacute; ou de la mauvaise qualit&eacute; <br />des services propos&eacute;s sur le site de l&#39;Utilisateur.</li>
<li>de la non conclusion ou de tout litige dans la conclusion ou l&#39;ex&eacute;cution<br /> d&#39;un contrat propos&eacute; sur le site de l&#39;Utilisateur.</li>
<li>des vices cach&eacute;s, de la conformit&eacute;, de la l&eacute;galit&eacute; ou <br />de la dangerosit&eacute; des biens et services propos&eacute;s sur le site de l&#39;Utilisateur.</li>
<li>des mensonges, exag&eacute;rations, dols, violences, r&eacute;ticences dolosives commise par l&#39;Utilisateur.</li>
</ul>
</blockquote>

</div>
</div>
</div>
</div>
</div>
<div class="row-container rd-3 page_1">
<div class="row-content">
<div class="row" data-role="line">
<div data-role="cell" class="column" style={{width:"100%"}}>
<div class="column-content">
</div>
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

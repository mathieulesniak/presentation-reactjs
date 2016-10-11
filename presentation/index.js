// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Counter from "../assets/counter.jsx";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  logoWina: require('../assets/logo-winamax.png'),
  reduxLogoOnly: require('../assets/redux-logo-only.png'),
  reactLogoOnly: require('../assets/react-logo-only.png'),
  avatarJdn: require('../assets/avatar-jdn.jpg'),
  avatarMlk: require('../assets/avatar-mlk.jpg'),
  twitterLogo: require('../assets/twitter-logo.png'),
  reactLogo: require('../assets/react-logo.png'),
  githubLogo: require('../assets/GitHub-Mark-120px-plus.png'),
  eggheadLogo: require('../assets/egghead.png'),
  reactEuropeLogo: require('../assets/reacteurope.png'),
  youtubeLogo: require('../assets/YouTube-icon-full_color.png'),
  difficult: require('../assets/difficult.png'),
  dontBelieve: require('../assets/dontbelieve.gif'),
  scuTab: require('../assets/scu-tableau.png'),
  scuBad: require('../assets/scu-bad.png'),
  scuGood: require('../assets/scu-good.png'),
  beamMeUp: require('../assets/keep-calm-and-beam-me-up-scotty-19.png'),
  reduxLogo: require('../assets/redux-logo.png'),
  reduxCycle: require('../assets/redux-cycle.svg'),
  virtualDom: require('../assets/virtual-dom-update.png'),
  flux: require('../assets/flux.png'),
  coke: require('../assets/coke.jpg'),
  mentos: require('../assets/mentos.jpg'),
  cokementos: require('../assets/mentoscoke.gif'),
  functional: require('../assets/functional.png'),
  reduxMiddleware: require('../assets/middleware.png'),
  delorean: require('../assets/delorean.jpg'),
  minusCortex: require('../assets/minus-cortex.jpg'),
  reactNative: require('../assets/reactnative.png'),

  logo: require("../assets/formidable-logo.svg"),
};

preloader(images);

const theme = createTheme({
  primary: "#F0F0F0",
  secondary: "black",
  quartenary: "black"
}, {
  primary: "Open Sans Condensed",
  secondary: "Open Sans Condensed",
  tertiary: "monospace"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Layout>
              <Fill>
                <Image src={images.reactLogoOnly.replace("/", "")} height="200px" margin="-80px 0px 0px 0px"/>
              </Fill>
              <Fill>
                <Image src={images.reduxLogoOnly.replace('/', '')} height="180px" margin="-70px 0px 0px 0px"/>
              </Fill>
            </Layout>
            <Layout>
              <Fill>
                <Text textSize="3em" bold>React</Text>
              </Fill>
              <Fill>
                <Text textSize="3em" bold>Redux</Text>
              </Fill>
            </Layout>
            <Heading size={1} fit caps textColor="secondary" margin="50px 0px 0px 0px">
              Découverte et mise en œuvre @ Winamax
            </Heading>


          </Slide>
          <Slide>
            <Heading textColor="secondary">Qui sommes nous ?</Heading>
            <Layout>
              <Fill>
                <b>Mathieu Lesniak</b>
                <br/><Image src={images.twitterLogo.replace("/", "")} height="0.8em" margin="0"/>@mathieulesniak
                <br/><Image src={images.avatarMlk.replace("/", "")} height="150px"/>
                <br/>Développements frontend & betting
              </Fill>
              <Fill>
                <b>Julien Déléan</b>
                <br/><Image src={images.twitterLogo.replace("/", "")} height="0.8em" margin="0"/>@Chabou69
                <br/><Image src={images.avatarJdn.replace("/", "")} height="150px"/>
                <br/>Développements applicatifs clients
              </Fill>
            </Layout>
          </Slide>

          <Slide notes="3 millions de comptes, 1,5 milliards de mains">
            <Heading textColor="secondary">Winamax</Heading>
            <List>
              <ListItem>Leader sur le poker en France</ListItem>
              <Appear><ListItem>C++, PHP, NodeJS, Ruby, Erlang, LUA | AS3, Javascript</ListItem></Appear>
              <Appear><ListItem>L'innovation comme ADN</ListItem></Appear>
              <Appear><ListItem>2010 : Ouverture du marché français</ListItem></Appear>
              <Appear><ListItem>2011 : Applications mobiles</ListItem></Appear>
              <Appear><ListItem>2013 : Expresso</ListItem></Appear>
              <Appear><ListItem>2014 : Application mobile JS</ListItem></Appear>
              <Appear><ListItem>2014 : Paris Sportifs</ListItem></Appear>
              <Appear><ListItem>2016 : Premiers projets React</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <br/><Image src={images.reactLogo.replace("/", "")} height="150px"/>
            <List>
              <ListItem>Fin 2011, création ReactJS en interne Facebook</ListItem>
              <ListItem>Avril 2012 rachat d'Instagram.com</ListItem>
              <ListItem>Refonte / intégration au sein de Facebook</ListItem>
              <ListItem>Juin 2013, open source React</ListItem>
              <ListItem>Utilisation interne à FB (messenger)</ListItem>
            </List>
          </Slide>
          <Slide notes="Migration récente de Wallmart qui a publié ses outils / electrode.io">
            <Heading textColor="secondary">Qui l'utilise ?</Heading>
            <List>
              <ListItem>Apple (developer portal)</ListItem>
              <ListItem>Wallmart</ListItem>
              <ListItem>AirBNB</ListItem>
              <ListItem>Netflix</ListItem>
              <ListItem>Yahoo Mail</ListItem>
              <ListItem>Reddit Mobile</ListItem>
              <ListItem>Dropbox, Facebook, Github, IG, Wired</ListItem>
              <ListItem>... et Winamax !</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading textColor="secondary" fit>React ne fait que le V de MVC</Heading>
            <Appear>
              <Heading textColor="secondary" size={2} fit>React n'a pas de :</Heading>
            </Appear>
            <Appear>
              <List>
                <ListItem>Controllers</ListItem>
                <ListItem>Directive</ListItem>
                <ListItem>Templates</ListItem>
                <ListItem>Global event listener</ListItem>
              </List>
            </Appear>
            <Appear>
              <Heading textColor="secondary" size={3}>Seulement... des composants</Heading>
            </Appear>
          </Slide>

          <Slide>
            <Heading textColor="secondary" fit>Et donc, c'est difficile ?</Heading>
            <Image src={images.difficult.replace('/', '')} width="80%"/>
          </Slide>

          <Slide notes="On peut bien sur ajouter plein d'autres methodes React ou propres">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/jsx.example")}
              margin="20px auto"
            />
            <Heading textColor="secondary" size={3}>Une seule méthode obligatoire : render()</Heading>
          </Slide>

          <Slide notes="Note sur HTML / JSX, pas du vrai HTML, React transforme">
            <Heading textColor="secondary" fit size={2}>Faites des composants, pas des templates,</Heading>
            <Heading textColor="secondary" fit size={2}>Encapsulez-les et réutilisez-les</Heading>
          </Slide>

          <Slide>
            <Layout>
              <Fill>
                <CodePane
                  lang="jsx"
                  source={require("raw!../assets/jsx.example")}
                />
              </Fill>
              <Fill> </Fill>
              <Fill>
                <CodePane
                  lang="jsx"
                  source={require("raw!../assets/jsx2.example")}
                />
              </Fill>
            </Layout>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/jsx-composed.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide>
            <Heading textColor="secondary" fit>Le passage de variable ?</Heading>
            <Heading textColor="secondary" fit>Une solution : les props</Heading>
          </Slide>

          <Slide>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/jsx-props1.example")}
              margin="20px auto"
            />
            <CodePane
              lang="jsx"
              source={require("raw!../assets/jsx-props2.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide>
            <Heading textColor="black" fit>Les props sont "immutable"</Heading>
            <Heading textColor="black" fit>les composants enfants ne peuvent les modifier</Heading>
          </Slide>

          <Slide notes="On ne stocke pas le données calculées, on ne duplique pas les données => Single Source of Truth<br/>State = mutable par opposition aux props">
            <Heading textColor="black" size={2}>Les composants sont des machines à état</Heading>
            <List>
              <ListItem>Le state contient les données modifiables par le composant</ListItem>
              <ListItem>setState(data, callback) définit cet état</ListItem>
              <ListItem>render() redessine la vue à partir ce nouvel état</ListItem>
            </List>
          </Slide>

          <Slide>
            <Layout>
              <Fill>
                <CodePane
                  lang="jsx"
                  source={require("raw!../assets/counter.example")}
                  margin="20px auto"
                />
              </Fill>
              <Fill>
                <Counter />
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Heading textColor="secondary" fit>Render() à chaque update</Heading>
          </Slide>

          <Slide>
            <Heading textColor="secondary" fit>On nous aurait donc menti ?</Heading>
            <Image src="/dontbelieve.gif" width="70%" />
          </Slide>

          <Slide>
            <Heading textColor="secondary" fit>Rappel sur les best practices pour le DOM</Heading>
            <List>
              <Appear><ListItem>On n'effectue pas de grosses opérations sur le DOM</ListItem></Appear>
              <Appear><ListItem>On limite les accès au DOM</ListItem></Appear>
              <Appear><ListItem>On modifie des éléments avant de les ajouter au DOM</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading textColor="secondary" textColor="secondary">Virtual DOM</Heading>
            <List>
                <ListItem>DOM allégé (pour être belle en maillot cet été)</ListItem>
                <ListItem>Diff entre la nouvelle version et l'ancienne</ListItem>
                <ListItem>Calcul des modifications à apporter au véritable DOM</ListItem>
                <ListItem>Application en batch des modifications</ListItem>
              </List>
          </Slide>

          <Slide>
            <Image src={images.virtualDom.replace('/', '')} />
          </Slide>

          <Slide>
            <Heading textColor="secondary" fit>Cycle de vie des composants</Heading>
            <List>
              <ListItem>componentWillMount</ListItem>
              <ListItem>componentDidMount</ListItem>
              <ListItem>componentWillReceiveProps</ListItem>
              <ListItem>componentWillUpdate</ListItem>
              <ListItem><b>shouldComponentUpdate</b></ListItem>
            </List>
          </Slide>

          <Slide note="Exemple simple, 100 lignes sur le tableau, 40% de différence">
            <Heading textColor="secondary" fit>shouldComponentUpdate()</Heading>
            <Image src={images.scuTab.replace('/', '')} />
            <Layout>
              <Fill>
                <Text>Avant</Text>
                <Image src={images.scuBad.replace('/', '')} />
              </Fill>
              <Fill>
                <Text>Après</Text>
                <Image src={images.scuGood.replace('/', '')} />
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Heading textColor="secondary" size={4} fit>Donc, nous avons un modèle descendant</Heading>
            <Image src={images.beamMeUp.replace('/', '')} width="40%"/>
            <Heading size={4} textColor="secondary" fit >Mais comment fait-on pour remonter ?</Heading>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading textColor="secondary" textColor="secondary">Flux Pattern</Heading>
            <Text>(Unidirectional Data Flow)</Text>
            <Appear><Image src={images.flux.replace('/', '')} width="100%"/></Appear>
            <List>
              <Appear><ListItem>Pas de library officielle, uniquement le Dispatcher</ListItem></Appear>
              <Appear><ListItem><Text>Flummox, Alt, Reflux, MartyJS, Delorean, Fluxxor...</Text></ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Image src={images.reduxLogo.replace('/', '')} width="40%"/>
            <List>
              <ListItem>Expérimentation de Dan Abramov (ReactEurope 2015)</ListItem>
              <Appear><ListItem>Inspiration d'ELM (langage purement fonctionnel)</ListItem></Appear>
              <Appear><ListItem>L'objectif ?</ListItem></Appear>
            </List>
            <Layout>
              <Appear><Fill>
                <Image src={images.coke.replace('/','')} width="50%" margin="-25px 0 0 0"/>
                <Text>Mutabilité</Text>
              </Fill></Appear>
              <Appear><Fill>
                <Image src={images.mentos.replace('/','')} width="50%" margin="-25px 0 0 0"/>
                <Text>Asynchronisme</Text>
              </Fill></Appear>
            </Layout>
          </Slide>

          <Slide>
            <Text>Mutablité + Asynchronisme =</Text>
            <Image src="/mentoscoke.gif" width="60%"/>
          </Slide>

          <Slide>
            <Heading textColor="secondary" size={4}>3 principes</Heading>
            <Layout fit>
              <Appear><Fill>
                Single source of truth: State
                <CodePane
                  lang="js"
                  source={require("raw!../assets/state.example")}

                />
              </Fill></Appear>
              <Appear><Fill>
                State read-only: Actions
                <CodePane
                  lang="js"
                  source={require("raw!../assets/actions.example")}
                  margin="0px 0px 0px 2px"
                />
              </Fill></Appear>
              <Appear><Fill>
                Pure functions: Reducers
                <CodePane
                  lang="js"
                  source={require("raw!../assets/reducers.example")}
                  margin="0px 0px 0px 4px"
                />
              </Fill></Appear>
            </Layout>
          </Slide>

          <Slide>
            <Heading textColor="secondary">Fonctionnement</Heading>
            <Image src={images.reduxMiddleware.replace('/', '')} width="850px"/>
            <Text textSize={14}>source: visual-engin.com</Text>
          </Slide>

          <Slide>
            <Heading textColor="secondary">Middlewares</Heading>
            <Layout>
              <Fill>
                Logger
                <CodePane
                  lang="js"
                  source={require("raw!../assets/middlewareLogger.example")}
                />
              </Fill>
              <Appear><Fill>
                Delay
                <CodePane
                  lang="js"
                  source={require("raw!../assets/middlewareDelay.example")}
                  margin="0px 0px 0px 2px"
                />
              </Fill></Appear>
            </Layout>
          </Slide>

          <Slide>
            <Heading textColor="secondary" size={4} margin="-20px 0 0 0">React-Redux</Heading>
            <Layout>
              <Fill>
                <CodePane
                  lang="jsx"
                  source={require("raw!../assets/counter.example")}
                  margin="0px 0px 0px -25px"
                />
              </Fill>
              <Fill>
                <CodePane
                  lang="jsx"
                  source={require("raw!../assets/counter-redux.example")}
                  margin="0px 0px 0px 2px"
                />
              </Fill>
            </Layout>
          </Slide>

          <Slide notes="Haskell, OCaml, Erlang, Scala, Elm">
            <Heading textColor="secondary">Avantages</Heading>
            <Appear><div><Text margin="30px 0 0 0" >Paradigme fonctionnel</Text><Image src={images.functional.replace('/', '')} width="850px"/></div></Appear>
          </Slide>

          <Slide>
            <Heading textColor="secondary">Avantages</Heading>
            <List>
              <ListItem>Léger (2KB) et sans magie noire</ListItem>
              <Appear><ListItem>Pas une library mais une philosophie (redux.net, redux.rb)</ListItem></Appear>
              <Appear><ListItem>Parfait complément de React (Immutabilité)</ListItem></Appear>
              <Appear><ListItem>Comportement déterministe et prédictible</ListItem></Appear>
              <Appear><ListItem>Tests unitaires triviaux</ListItem></Appear>
              <Appear><ListItem>Architecture modulaire (plugins)</ListItem></Appear>
              <Appear><ListItem>Bugtracking / Voyage dans le temps</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading textColor="secondary">Redux Dev Tools</Heading>
            <Image src={images.delorean.replace('/', '')} margin="30px 0 0 0" width="650px"/>
          </Slide>

          <Slide>
            <Heading textColor="secondary">Et demain ?</Heading>
            <Image src={images.minusCortex.replace('/', '')} width="75%"/>
          </Slide>

          <Slide>
            <Heading textColor="secondary">En avant vers le mobile :</Heading>
            <Image src={images.reactNative.replace('/', '')} />
          </Slide>

          <Slide notes="vjeux = Christopher Chedeau - Promo 2012">
            <Heading textColor="secondary">Références</Heading>
            <List>
              <ListItem><Image src={images.eggheadLogo.replace("/", "")} height="0.8em" margin="0"/> EggHead.io</ListItem>
              <ListItem><Image src={images.githubLogo.replace("/", "")} height="0.8em" margin="0"/> Create React App <span style={{fontSize:"0.7em"}}>https://github.com/facebookincubator/create-react-app</span></ListItem>
              <ListItem><Image src={images.twitterLogo.replace("/", "")} height="0.8em" margin="0"/> @reactjs, @dan_abramov, @Vjeux, @sebmarkbage</ListItem>
              <ListItem><Image src={images.reactEuropeLogo.replace("/", "")} height="0.8em" margin="0"/> ReactEurope</ListItem>
              <ListItem><Image src={images.youtubeLogo.replace("/", "")} height="0.8em" margin="0"/> MUST SEE: Render 2016: Lee Byron</ListItem>
              <ListItem><Image src={images.githubLogo.replace("/", "")} height="0.8em" margin="0"/> Cette présentation <span style={{fontSize:"0.7em"}}>https://github.com/mathieulesniak/presentation-reactjs</span></ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading textColor="secondary">Merci !</Heading>
            <Text>Venez nous voir, chez Winamax, nous adorons ReactJS.
            <br/>Nous avons plein de projets sympas à réaliser !</Text>
            <video src="/winamax.mp4" width="800px" autoPlay controls loop muted/>
          </Slide>


        </Deck>
      </Spectacle>
    );
  }
}

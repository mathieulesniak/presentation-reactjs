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
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  logoWina: require('../assets/logo-winamax.png'),
  avatarJdn: require('../assets/avatar-jdn.jpg'),
  avatarMlk: require('../assets/avatar-mlk.jpg'),
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
  reduxMiddleware: require('../assets/middleware.png'),
  catConquer: require('../assets/cat-conquer.jpg'),
  reactNative: require('../assets/reactnative.png'),

  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
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
          <Image src={images.logoWina.replace("/", "")} margin="0px auto 40px" height="121px"/>
            <Heading size={1} fit caps lineHeight={2} textColor="black">
              ReactJS / Redux
            </Heading>
            <Heading size={1} fit caps textColor="secondary">
              Découverte et mise en œuvre @ Winamax
            </Heading>


          </Slide>
          <Slide>
            <Heading textColor="secondary">Qui sommes nous ?</Heading>
            <Layout>
              <Fill>
                Julien Déléan
                <br/>@Chabou69
                <br/><Image src={images.avatarJdn.replace("/", "")} height="150px"/>
                <br/>Développements applicatifs clients
              </Fill>
              <Fill>
                Mathieu Lesniak
                <br/>@mathieulesniak
                <br/><Image src={images.avatarMlk.replace("/", "")} height="150px"/>
                <br/>Développements frontend & betting
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Heading textColor="secondary" caps>Timeline</Heading>
            <List>
              <ListItem>Avril 2012 rachat d'Instagram.com</ListItem>
              <ListItem>Refonte / intégration au sein de Facebook</ListItem>
              <ListItem>Juin 2013, open source React</ListItem>
              <ListItem>Utilisation interne à FB (messenger)</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading textColor="secondary">Qui l'utilise ?</Heading>
            <List>
              <ListItem>Apple (developer portal)</ListItem>
              <ListItem>Wallmart</ListItem>
              <ListItem>AirBNB</ListItem>
              <ListItem>Netflix</ListItem>
              <ListItem>BBC (module de recherche)</ListItem>
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
            <Image src={images.difficult.replace('/', '')} />
          </Slide>

          <Slide>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/jsx.example")}
              margin="20px auto"
            />
            <Appear>
              <Heading textColor="secondary" size={3}>Une seule méthode obligatoire : render()</Heading>
            </Appear>
          </Slide>

          <Slide>
            <Heading textColor="secondary" fit size={2}>Faites des composants, pas des templates,</Heading>
            <Heading textColor="secondary" fit size={2}>Encapsulez-les et réutilisez-les</Heading>
          </Slide>

          <Slide>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/jsx.example")}
              margin="20px auto"
            />
            <CodePane
              lang="jsx"
              source={require("raw!../assets/jsx2.example")}
              margin="20px auto"
            />
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


          <Slide>
            <Heading textColor="secondary">Render() à chaque update</Heading>
          </Slide>

          <Slide>
            <Heading textColor="secondary" fit>On nous aurait donc menti ?</Heading>
            <Image src={images.dontBelieve.replace('/', '')} />
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
              <ListItem><b>shouldComponentUpdate</b></ListItem>
              <ListItem>componentWillUpdate</ListItem>
            </List>
          </Slide>

          <Slide>
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
            <Text>(Unidirectionnal Data Flow)</Text>
            <Appear><Image src={images.flux.replace('/', '')} width="100%"/></Appear>
            <List>
              <Appear><ListItem>Pas de librairie officielle, uniquement le Dispatcher</ListItem></Appear>
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
            <Layout fit>
              <Appear><Fill>
                <Image src={images.coke.replace('/','')} width="50%"/>
                <Text>Mutabilité</Text>
              </Fill></Appear>
              <Appear><Fill>
                <Image src={images.mentos.replace('/','')} width="50%"/>
                <Text>Asynchronisme</Text>
              </Fill></Appear>
            </Layout>
          </Slide>

          <Slide>
            <Image src={images.cokementos.replace('/','')} width="60%"/>
            <Text>Mutablité + Asynchronisme</Text>
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
                />
              </Fill></Appear>
              <Appear><Fill>
                Pure functions: Reducers
                <CodePane
                  lang="js"
                  source={require("raw!../assets/reducers.example")}
                />
              </Fill></Appear>
            </Layout>
          </Slide>

          <Slide>
            <Heading textColor="secondary">Fonctionnement</Heading>
            <Image src={images.reduxMiddleware.replace('/', '')} />
            <Text>source: visual-engin.com</Text>
          </Slide>

          <Slide>
            <Heading textColor="secondary">Middlewares</Heading>
            <Layout fit>
              <Appear><Fill>
                Logger
                <CodePane
                  lang="js"
                  source={require("raw!../assets/middlewareLogger.example")}
                />
              </Fill></Appear>
              <Appear><Fill>
                CrashReport
                <CodePane
                  lang="js"
                  source={require("raw!../assets/middlewareCrashreporter.example")}
                />
              </Fill></Appear>
              <Appear><Fill>
                Delay
                <CodePane
                  lang="js"
                  source={require("raw!../assets/middlewareDelay.example")}
                />
              </Fill></Appear>
            </Layout>
          </Slide>

          <Slide>
            <Heading textColor="secondary">Et demain ?</Heading>
            <Image src={images.catConquer.replace('/', '')} />
          </Slide>

          <Slide>
            <Heading textColor="secondary">En avant vers le mobile :</Heading>
            <Image src={images.reactNative.replace('/', '')} />
          </Slide>

          <Slide>
            <Image src={images.logoWina.replace("/", "")} margin="0px auto 40px" height="121px"/>
            <Heading textColor="secondary">Merci !</Heading>
            <Text>Venez nous voir, chez Winamax, nous adorons ReactJS, et nous avons pleins de projets sympas à réaliser</Text>
            <Text><br/>PS : cette présentation a été réalisée sous ReactJS ;)</Text>
          </Slide>


        </Deck>
      </Spectacle>
    );
  }
}

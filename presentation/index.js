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
  difficult: require('../assets/difficult.png'),
  dontBelieve: require('../assets/dontbelieve.gif'),
  reduxLogo: require('../assets/redux-logo.png'),
  reduxCycle: require('../assets/redux-cycle.svg'),
  virtualDom: require('../assets/virtual-dom-update.png'),
  flux: require('../assets/flux.png'),
  coke: require('../assets/coke.jpg'),
  mentos: require('../assets/mentos.jpg'),
  cokementos: require('../assets/mentoscoke.gif'),
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
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
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
              </Fill>
              <Fill>
                Mathieu Lesniak
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
              <ListItem>AirBNB, </ListItem>
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
              <Appear><ListItem>On n'effectue pas de grosse opérations sur le DOM</ListItem></Appear>
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
            <Heading textColor="secondary" fit>ShouldComponentUpdate()</Heading>
          </Slide>

          <Slide>
            <Heading textColor="secondary" size={4} fit>Donc, nous avons un modèle descendant</Heading>
            <Heading size={4} textColor="secondary" fit lineHeight={4}>Mais comment fait-on pour remonter ?</Heading>
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
            <Image src={images.reduxLogo.replace('/', '')} />
            <List>
              <ListItem>Expérimentation de Dan Abramov (ReactEurope 2015)</ListItem>
              <Appear><ListItem>Inspiration d'ELM (langage purement fonctionnel)</ListItem></Appear>
              <Appear><ListItem>L'objectif ?</ListItem></Appear>
            </List>
            <Layout fit>
              <Appear><Fill>
                <Image src={images.coke.replace('/','')} width="80%"/>
                <Text>Mutabilité</Text>
              </Fill></Appear>
              <Appear><Fill>
                <Image src={images.mentos.replace('/','')} width="80%"/>
                <Text>Asynchronisme</Text>
              </Fill></Appear>
              <Appear><Fill>
                <Image src={images.cokementos.replace('/','')} width="80%"/>
                <Text>Les 2</Text>
              </Fill></Appear>
            </Layout>
          </Slide>

          <Slide>
            <Heading textColor="secondary">3 principes</Heading>
            <Layout fit>
              <Appear><Fill>
                <Text>State</Text>
                <CodePane
                  lang="js"
                  source={require("raw!../assets/state.example")}
                />
              </Fill></Appear>
              <Appear><Fill>
                <Text>Actions</Text>
                <CodePane
                  lang="js"
                  source={require("raw!../assets/actions.example")}
                />
              </Fill></Appear>
              <Appear><Fill>
                <Text>Reducers</Text>
                <CodePane
                  lang="js"
                  source={require("raw!../assets/reducers.example")}
                />
              </Fill></Appear>
            </Layout>
          </Slide>


          <Slide>
            <Heading textColor="secondary" size={4}>Le principe : </Heading>
            <CodePane
              lang="jsx"
              source="(previousState, action) => newState"
              margin="20px auto"
            />
          </Slide>

          <Slide>
            <Image src={images.reduxCycle.replace('/', '')} />
            <Text>source: css-tricks.com</Text>
          </Slide>

          <Slide>
            <Heading textColor="secondary" caps>Store : single source of Truth</Heading>
          </Slide>



          <Slide>
            <Heading textColor="secondary">Merci !</Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Wait what?
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

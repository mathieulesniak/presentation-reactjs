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
  reduxLogo: require('../assets/redux-logo.png'),
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#F0F0F0",
  secondary: "black",
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
            <Heading size={1} fit caps textColor="black">
              Découverte et mise en œuvre @ Winamax
            </Heading>

            
          </Slide>
          <Slide>
            <Heading textColor="black">Qui sommes nous ?</Heading>
          </Slide>

          <Slide>
            <Heading textColor="black" caps>Timeline</Heading>
            <List>
              <ListItem>Avril 2012 rachat d'Instagram.com</ListItem>
              <ListItem>Refonte / intégration au sein de Facebook</ListItem>
              <ListItem>Juin 2013, open source React</ListItem>
              <ListItem>Utilisation interne à FB (messenger)</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading textColor="black">Qui l'utilise ?</Heading>
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
            <Heading textColor="black" fit>Et donc, c'est difficile ?</Heading>
            <Image src={images.difficult.replace('/', '')} />
          </Slide>

          <Slide>
            <Heading>build components, not templates</Heading>
          </Slide>

          <Slide>
            <Heading textColor="black" size={4} fit>Donc, nous avons un modèle descendant</Heading>
            <Heading size={4} textColor="black" fit lineHeight={4}>Mais comment fait-on pour remonter ?</Heading>
          </Slide>

          <Slide transition={["slide"]}>
            <Image src={images.reduxLogo.replace('/', '')} />
          </Slide>





          <Slide>
            <Heading textColor="black">Merci !</Heading>
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

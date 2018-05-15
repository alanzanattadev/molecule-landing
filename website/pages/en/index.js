/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button
              href={docUrl('getting-started-introduction.html', language)}
            >
              Get Started
            </Button>
          </PromoSection>
          <img src={docUrl('assets/molecule-showcase.png')} />
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const WhyUse = props => (
  <Block>
  {[
    {
      content: 'While Atom is popular because of its intuitive, customizable approach, Molecule adds to these qualities the expected features of an IDE:',
      image: imgUrl('molecule.png'),
      imageAlign: 'top',
      title: 'Why should I use Molecule?',
    },
  ]}
  </Block>
);

const Features = props => (
  // Icons from https://icons8.com/ - used with permission
  <Block layout="twoColumn">
    {[
      {
        title: 'Centralized Toolbox',
        content: 'As developers, we all want an efficient workflow. We\'ve all been in a situation where every time we get to work, we have to start a large number of tools in X terminals spread over Y work-spaces. This is where Molecule takes root: we create a single, unified toolbox from which you will be able to access all your tools with ease.',
        image: imgUrl('icons8-toolbox-filled-100.png'),
        imageAlign: 'top',
      },
      {
        title: 'Unified Execution',
        content: 'Executing your tools has never been simpler. You will be able to configure as many ways to execute your tool as you like & save them as \'Plans\'. A \'plan\' is a simple button which will execute your tool with the corresponding configuration.',
        image: imgUrl('icons8-settings-filled-100.png'),
        imageAlign: 'top',
      },
      {
        title: 'Clear Information Flow',
        content: 'Molecule aspires have an information readability nothing short of revolutionary: we wish to offer you a clear and simple way of navigating through your tools\' logs. Information is displayed through entities we call Diagnostics. A diagnostic can be a signle error for a tool and a group of five warnings for another, but it\'s always easy to read, to help you understand your tools and fix the problems that pop up.',
        image: imgUrl('icons8-list-filled-100.png'),
        imageAlign: 'top',
      },
      {
        title: 'A first tool set for web developers',
        content: 'We currently provide you a tool set for web development, but Molecule will target way more stacks! We\'ll support mobile, devops and back-end development in the future too! We\'re also making the plugin system flexible to let you integrate your own tools, whether they\'re proprietary or not, and the API is always evolving to allow you to create more complete plugins.',
        image: imgUrl('icons8-support-filled-100.png'),
        imageAlign: 'top',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"Who's Using This?"}</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
        </div>
      </div>
    );
  }
}

module.exports = Index;

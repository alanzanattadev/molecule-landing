"use babel";
// @flow
import React, { Component } from "react";
import LandingHeader from "./components/organisms/LandingHeader";
import {
  ScrollableLayout,
  CenterLayout,
  VerticalLayout,
  StretchLayout,
} from "./components/nucleons/layouts";
import Step from "./components/atoms/Step";
import OnVisibleAnimation from "./components/atoms/OnVisibleAnimation";
import SubTitle from "./components/atoms/SubTitle";
import Footer from "./components/atoms/Footer";
import Screen from "./components/atoms/Screen";
import Description from "./components/atoms/Description";
import Logo from "./components/atoms/Logo";
import Detail from "./components/atoms/Detail";
import Mask from "./components/atoms/Mask";
import MoleculeScreenshot from "./components/atoms/MoleculeScreenshot";
import Link from "./components/atoms/Link";
import NewsLetterBar from "./components/organisms/NewsLetterBar";
import TwitterTimeline from "./components/atoms/TwitterTimeline";
import TwitterFollow from "./components/atoms/TwitterFollow";
import Smooch from "smooch";
import MediumFeed from "./components/ecosystems/MediumFeed";
import ExplainedFeature from "./components/organisms/ExplainedFeature";
import ChangelogFeed from './components/ecosystems/ChangelogFeed';
import "./App.css";

class App extends Component {
  componentDidMount() {
    Smooch.init({ appToken: "48dllw59ia1vrotft27sb231o" });
  }

  render() {
    return (
      <VerticalLayout>
        <NewsLetterBar />
        <LandingHeader />
        {/* <Step>
          <OnVisibleAnimation>
            <CenterLayout stretched>
            </CenterLayout>
            <VerticalLayout margin="40px 20px">
              <CenterLayout>
                <VerticalLayout>
                  <CenterLayout>
                    <SubTitle centered>Centralize your entire toolbox</SubTitle>
                  </CenterLayout>
                  <CenterLayout>
                    <Description centered>
                      Molecule let you get access to your toolbox simply and quickly.
                      Whenever you launch molecule, you're ready to start working with all your tools integrated in
                      a single platform.
                    </Description>
                  </CenterLayout>
                </VerticalLayout>
              </CenterLayout>
            </VerticalLayout>
          </OnVisibleAnimation>
        </Step>
        <Step>
          <OnVisibleAnimation>
            <CenterLayout stretched>
            </CenterLayout>
            <VerticalLayout margin="40px 20px">
              <CenterLayout>
                <VerticalLayout>
                  <CenterLayout>
                    <SubTitle centered>Keep control with ergonomy</SubTitle>
                  </CenterLayout>
                  <CenterLayout>
                    <Description centered>
                      Molecule provides you a powerful configuration system, we give you the control of where and how things
                      are running. Select remote development to execute the tools of your choice on another machine or VM.
                      Each configuration will create an execution plan linked to a a button, allowing reuse of one click exec.
                    </Description>
                  </CenterLayout>
                </VerticalLayout>
              </CenterLayout>
            </VerticalLayout>
          </OnVisibleAnimation>
        </Step>
        <Step>
          <OnVisibleAnimation>
            <CenterLayout stretched>
            </CenterLayout>
            <VerticalLayout margin="40px 20px">
              <CenterLayout>
                <VerticalLayout>
                  <CenterLayout>
                    <SubTitle centered>Never scroll endlessly again</SubTitle>
                  </CenterLayout>
                  <CenterLayout>
                    <Description centered>
                      The centralized tooling allows centralized diagnostics. Keep tracks of what happens during development : errors, warnings,
                      infos and successes, grouped by tasks. Navigate throughout them quickly with the organized mode. We also provide you
                      the classical logging output, with a searchbar to find informations quickly. It's up to you, as always.
                    </Description>
                  </CenterLayout>
                </VerticalLayout>
              </CenterLayout>
            </VerticalLayout>
          </OnVisibleAnimation>
        </Step> */}
        <CenterLayout>
          <StretchLayout margin="20" minWidth="250px">
            <CenterLayout>
              <SubTitle>Blog</SubTitle>
            </CenterLayout>
            <MediumFeed name="alanzanattadev"/>
          </StretchLayout>
          <StretchLayout margin="20" minWidth="250px">
            <CenterLayout>
              <SubTitle>Changelogs</SubTitle>
            </CenterLayout>
            <CenterLayout>
              <ChangelogFeed/>
            </CenterLayout>
          </StretchLayout>
        </CenterLayout>
        <ExplainedFeature
          title="An Atom plugin"
          description=""
          features={[
            "Provides extensibility",
            "Keep the editor you already love",
            "Active community",
          ]}
          images={[
            "atom-logo-256.png",
          ]}
          imageHero
          imageStyle={{height: '124px', width: '124px'}}
        />
        <ExplainedFeature
          title="Centralized Toolbox"
          description="As developers thriving for efficiency during labor, we all ended up in a situation where
  every time you want to work, you have to start a numerous amount of tools in X terminals spread over Y work-spaces.
  This is where Molecule takes root, we create a toolbox from which you will be able to access all your tools easily."
          features={[
            "End of countless terminals and work-spaces",
            "Easy access to your toolbox in a dock panel",
            "Everything a click away",
          ]}
          images={[
            "molecule-dock.png",
          ]}
        />
        <ExplainedFeature
          title="Unified Execution"
          description="Your tools execution has never been simpler, you will be able to configure
  as much way to execute your tool as you like &amp; save them as 'Plans'.
  A 'plan' is a simple button which will execute your tool with the corresponding configuration."
          features={[
            "Current tool state execution quickly visible",
            "Beautiful and ergonomic UI",
            "Real time visual notifications of important events",
          ]}
          images={[
            "molecule-plans.png",
            "molecule-planconfig.png"
          ]}
        />
        <ExplainedFeature
          title="Clear Information Flow"
          description="Molecule aspires to be revolutionary in terms of information readability, we wish to offer you a clear
  and simple way of navigating through your tools' logs. Diagnostic is the name we gave to a log entity,
  a diagnostic can be 1 error for a tool and a group of 5 warnings for some other tool. The point is no matter the tool,
  a diagnostic is easy to read for a better understanding of the problem and can lead to an easy fix."
          features={[
            "New way of reading information through Molecule's diagnostics",
            "Organized / Logs mode",
            "Automatic sorting of output",
          ]}
          images={[
            "molecule-diagnostics-summaries.png",
            "molecule-diagnostics-panel.png",
          ]}
        />
        <ExplainedFeature
          title="A first tool set for web developers"
          images={[
            "gulp-logo.svg",
            "webpack-logo.svg",
            "npm-logo.png",
            "chrome-logo.png",
            "eslint-logo.png",
            "flow-logo.png",
            "testcafe-logo.png",
            "jest-logo.png",
            "nightwatch-logo.png",
            "terminal-logo.png"
          ]}
          imageStyle={{height: '45px', width: '45px'}}
          imageHero
          description="We provide you a first tool set for web development, but Molecule will target way more stacks ! We'll support mobile, devops and back-end development in the future too ! We're also making the plugin system flexible to let you integrate your own tools, whether they're propriotary or not. Keep in mind current integrations are partials, it will evolve."
          features={[
            "Web development pack included",
            "10 famous tools partially integrated",
            "Way more soon !"
          ]}
        />
        <CenterLayout>
          <SubTitle>Follow us</SubTitle>
        </CenterLayout>
        <CenterLayout>
          <TwitterFollow />
        </CenterLayout>
        <CenterLayout stretched>
          <TwitterTimeline />
        </CenterLayout>
        {/* <MediumFeed name="" /> */}
        <Screen margin="20px 0px">
          <CenterLayout stretched>
            <VerticalLayout>
              <CenterLayout>
                <SubTitle centered>We need feedback</SubTitle>
              </CenterLayout>
              <Description centered>
                Molecule is in early development stage, and we need to
                ensure our users like our vision of what an IDE should be.
                We love hearing your feedbacks so don't hesitate to talk to us,
                we're opened to every ideas and issues you have.
              </Description>
            </VerticalLayout>
          </CenterLayout>
        </Screen>
        <Screen margin="20px 0px">
          <CenterLayout stretched>
            <VerticalLayout>
              <CenterLayout>
                <SubTitle centered>And even more</SubTitle>
              </CenterLayout>
              <CenterLayout margin="30px">
                <Mask height="200px" width="200px" />
              </CenterLayout>
              <Description centered>
                We're a small team strongly active and we need you to give back freedom to makers.
                We use Atom.io as a base for Molecule and we hope its community will enjoy what we do
                to bring the most advanced IDE as an opened platform. We are opened.
              </Description>
            </VerticalLayout>
          </CenterLayout>
        </Screen>
        <Screen>
          <CenterLayout stretched>
            <VerticalLayout>
              <CenterLayout>
                <SubTitle>Our vision</SubTitle>
              </CenterLayout>
              <Description>
                At Molecule we think that you shouldn't have to adapt your workflow to your IDE but
                the IDE to your methods, whether you're using cutting edge tooling or advanced workflows,
                we provide you a flexible and easy to use tool that will become your artboard.
              </Description>
              <Description>
                Open Source is at the core of our thinking and we want to listen and help our community
                to create the best and most modern development platform for your last innovations.
              </Description>
              <CenterLayout margin="50px 50px">
                <Logo height="200px" width="200px" />
              </CenterLayout>
            </VerticalLayout>
          </CenterLayout>
        </Screen>
        <Footer>
          <CenterLayout stretched>
            <Detail>
              By
              {" "}
              <Link href="https://github.com/alanzanattadev" blank>
                @alanzanattadev
              </Link>
              ,
              Atom.io plugins creator and React ecosystem contributor.
              Follow me on
              {" "}
              <Link href="https://twitter.com/alanzanattadev" blank>
                twitter
              </Link>
              .
            </Detail>
            <Detail>An Epitech Innovative Project</Detail>
          </CenterLayout>
        </Footer>
      </VerticalLayout>
    );
  }
}

export default App;

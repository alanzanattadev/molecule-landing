'use babel';
// @flow
import React, {Component} from 'react';
import LandingHeader from './components/organisms/LandingHeader';
import {ScrollableLayout, CenterLayout, VerticalLayout} from './components/nucleons/layouts';
import Step from './components/atoms/Step';
import OnVisibleAnimation from './components/atoms/OnVisibleAnimation';
import SubTitle from './components/atoms/SubTitle';
import Footer from './components/atoms/Footer';
import Screen from './components/atoms/Screen';
import Description from './components/atoms/Description';
import Logo from './components/atoms/Logo';
import Detail from './components/atoms/Detail';
import Mask from './components/atoms/Mask';
import MoleculeScreenshot from './components/atoms/MoleculeScreenshot';
import Link from './components/atoms/Link';
import NewsLetterBar from './components/organisms/NewsLetterBar';
import TwitterTimeline from './components/atoms/TwitterTimeline';
import TwitterFollow from './components/atoms/TwitterFollow';
import Smooch from 'smooch';
import './App.css';

class App extends Component {
  componentDidMount() {
    Smooch.init({ appToken: '48dllw59ia1vrotft27sb231o' });
  }

  render() {
    return (
      <VerticalLayout>
        <NewsLetterBar/>
        <LandingHeader/>
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
          <SubTitle>Follow us</SubTitle>
        </CenterLayout>
        <CenterLayout>
          <TwitterFollow/>
        </CenterLayout>
        <CenterLayout stretched>
          <TwitterTimeline/>
        </CenterLayout>
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
                <SubTitle centered>Contribute</SubTitle>
              </CenterLayout>
              <CenterLayout margin="30px">
                <Mask height="200px" width="200px"/>
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
                <Logo height="200px" width="200px"/>
              </CenterLayout>
            </VerticalLayout>
          </CenterLayout>
        </Screen>
        <Footer>
          <CenterLayout stretched>
            <Detail>
              By <Link href="https://github.com/alanzanattadev" blank>@alanzanattadev</Link>,
              Atom.io plugins creator and React ecosystem contributor.
              Follow me on <Link href="https://twitter.com/alanzanattadev" blank>twitter</Link>.
            </Detail>
            <Detail>An Epitech Innovative Project</Detail>
          </CenterLayout>
        </Footer>
      </VerticalLayout>
    );
  }
}

export default App;

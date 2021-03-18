import React, { useEffect, useState } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import './AuthorizationPage.scss';
import styled from 'styled-components';
// import LogInPage from './LogInPage/LogInPage';
import {
  SocialBefore,
  AlertError,
  BackButton,
  Wrapper,
  Content,
  ContentHeader,
  ContentWrapper,
} from '../../Components/styledComponents';
import { ReactComponent as ArrowLeft } from '../../public/arrow-left.svg';
import langData from '../../langData/langData.json';
import LogInContainer from './LogInPage/LogInContainer';
import SignInContainer from './SignInPage/SiginInContainer';

const Header = styled.div`
  @media only screen and (max-width: 767px) and (min-width: 0) {
    min-height: 32px;
  }
`;

const AuthorizationPage = ({ language }) => {
  const addBodyClass = (className: string): void =>
    document.body.classList.add(className);
  const removeBodyClass = (className: string): void =>
    document.body.classList.remove(className);
  const [isErrorSignIn, setErrorSignIn] = useState(false);

  useEffect(() => {
    addBodyClass('body');
    return () => {
      removeBodyClass('body');
    };
  }, []);

  const toggleErrorComponent = (isError: boolean): void => {
    setErrorSignIn(isError);
  };

  return (
    <Wrapper>
      <Content>
        <Header>
          <BackButton to="/">
            <ArrowLeft />
            <span>{langData[language].autorizationPage_goTo_travelApp}</span>
          </BackButton>
        </Header>
        <ContentHeader>
          <div>
            <NavLink exact className="tabsItem" to="/authorization">
              {langData[language].autorizationPage_login}
            </NavLink>
            <NavLink className="tabsItem" to="/authorization/registration">
              {langData[language].autorizationPage_sign_in}
            </NavLink>
          </div>
        </ContentHeader>
        <ContentWrapper>
          {isErrorSignIn && (
            <AlertError>
              {' '}
              {langData[language].autorizationPage_invalidPassw}
            </AlertError>
          )}
          <Switch>
            <Route
              exact
              path="/authorization"
              render={() => (
                <LogInContainer
                  onToggleErrorComponent={toggleErrorComponent}
                  language={language}
                  langData={langData}
                />
              )}
            />
            <Route path="/authorization/registration"  render={() =>
                <SignInContainer
                  language={language}
                  langData={langData}
                />
              } />
          </Switch>
          <SocialBefore>
            {langData[language].autorizationPage_social_reg}
          </SocialBefore>
        </ContentWrapper>
      </Content>
    </Wrapper>
  );
};

export default AuthorizationPage;

import React, { useEffect, useState } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import './AuthorizationPage.scss';
import styled from 'styled-components';
import LogInPage from './LogInPage/LogInPage';
import SignInPage from './SignInPage/SignInPage';
import { SocialBefore, AlertError, BackButton, Wrapper, Content, ContentHeader, ContentWrapper } from '../../Components/styledComponents';
import { ReactComponent as ArrowLeft } from '../../public/arrow-left.svg';

const Header = styled.div`
@media only screen and (max-width: 767px) and (min-width: 0) {
    min-height: 32px;
  }
`;

// interface AuthorizationPageProps {
//   onToggleEnterUser: (isUser: boolean) => void;
// }

const AuthorizationPage: React.FC = () => {
  const addBodyClass = (className: string): void => document.body.classList.add(className);
  const removeBodyClass = (className: string): void => document.body.classList.remove(className);
  const [isErrorSignIn, setErrorSignIn] = useState(false);

  useEffect(() => {
    addBodyClass('body');

    return () => {
      removeBodyClass('body');
    }
  }, []);

  const toggleErrorComponent = (isError: boolean): void => {
    setErrorSignIn(isError);
  }

  return (
    <Wrapper>
      <Content>
        <Header>
          <BackButton to="/">
            <ArrowLeft />
            <span>Travel App</span>
          </BackButton>
        </Header>
        <ContentHeader>
          <div>
            <NavLink exact className="tabsItem" to="/authorization">LogIn</NavLink>
            <NavLink className="tabsItem" to="/authorization/registration">SignIn</NavLink>
          </div>
        </ContentHeader>
        <ContentWrapper>
          {isErrorSignIn
            && (<AlertError> Invalid E-mail or password!</AlertError>)
          }
          <Switch>
            <Route exact path="/authorization" render={() => <LogInPage onToggleErrorComponent={toggleErrorComponent} />} />
            <Route path="/authorization/registration" component={SignInPage} />
          </Switch>
          <SocialBefore>sign in via social networks</SocialBefore>
        </ContentWrapper>
      </Content>
    </Wrapper>
  );
};

export default AuthorizationPage;

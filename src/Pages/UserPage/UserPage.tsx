import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { BackButton } from '../../Components/styledComponents';
import ProfileMenu from './ProfileMenu';
import UserContentPage from './UserContentPage';
import UserPasswordPage from './UserPasswordPage';
import { ReactComponent as ArrowLeft } from '../../public/arrow-left.svg';

const Header = styled.header`
  display: block;
`;

const BackButtonStyled = styled(BackButton)`
  color: rgba(0,0,0,0.48);
  text-decoration: none;
  padding-left: 16px;

  &:hover {
    color: rgba(0,0,0,0.8);
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1008px;
  box-sizing: border-box;
  margin: 0 auto 24px auto;
  padding: 0 24px;
  flex: 1;
`;

const Section = styled.div`
  display: flex;
`;

const Aside = styled.aside<{ isDisplay: boolean }>`
  flex: 0 0 auto;
  width: 208px;
  padding-top: 48px;

  @media only screen and (max-width: 767px) and (min-width: 0) {
    width: 100%;
    display: ${({ isDisplay }) => (isDisplay ? 'block' : 'none')};
  }
`;

const Content = styled.div<{ isDisplay: boolean }>`
  flex: 1 1 auto;
  padding-left: 48px;
  overflow: hidden;

  @media only screen and (max-width: 767px) and (min-width: 0) {
    padding: 0 16px;
    display: ${({ isDisplay }) => (isDisplay ? 'none' : 'block')};
  }
`;

const UserPage: React.FC = () => {
  const addBodyClass = (className: string): void => document.body.classList.add(className);
  const removeBodyClass = (className: string): void => document.body.classList.remove(className);
  const [isDisplay, setDisplay] = useState(true);

  useEffect(() => {
    addBodyClass('user-console');

    return () => {
      removeBodyClass('user-console');
    }
  }, []);

  const toggleActivePage = (): void => {
    setDisplay(!isDisplay);
  }

  return (
    <>
      <Header>
        <BackButtonStyled to="/">
          <ArrowLeft />
          <span>Travel-app</span>
        </BackButtonStyled>
      </Header>
      <Container>
        <Section>
          <Aside isDisplay={isDisplay}>
            <ProfileMenu toggleDisplay={toggleActivePage} />
          </Aside>
          <Content isDisplay={isDisplay}>
            <Switch>
              <Route path='/user/account' render={() => <UserContentPage toggleDisplay={toggleActivePage} />} />
              <Route exact path='/user/password' render={() => <UserPasswordPage toggleDisplay={toggleActivePage} />} />
            </Switch>
          </Content>
        </Section>
      </Container>
    </>
  );
};

export default UserPage;

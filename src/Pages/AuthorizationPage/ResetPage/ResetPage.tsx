import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  AlertError,
  InputText,
  ButtonSave,
  Form,
  Wrapper,
  Content,
  ContentHeader,
  ContentWrapper,
} from '../../../Components/styledComponents';
import svgArrowLeft from '../../../public/arrow-left.svg';
import langData from '../../../langData/langData.json';

const StyledNav = styled(NavLink)`
  margin-top: -4px;
  margin-left: -8px;
  margin-right: 16px;
  width: 32px;
  height: 32px;
  display: inline-block;
  float: left;
  background: rgba(0, 0, 0, 0.08) url(${svgArrowLeft}) no-repeat center center;
  background-size: 24px 24px;
  border-radius: 50%;
  transition: background-color 0.2s ease-in-out;
  transform: rotateY(180deg);

  &:hover {
    background-color: rgba(0, 0, 0, 0.16);
  }
`;

const PageTitle = styled.div`
  padding-bottom: 16px;
  color: #000;
  font-size: 24px;
  line-height: 26px;
  font-weight: 500;
  margin: 0;
`;

const FormInfo = styled.div`
  margin-top: 20px;
`;

interface ResetPageProps {
  language: string;
}

const ResetPage: React.FC<ResetPageProps> = ({ language }) => {
  const addBodyClass = (className: string): void =>
    document.body.classList.add(className);
  const removeBodyClass = (className: string): void =>
    document.body.classList.remove(className);
  const [isErrorSignIn, setErrorSignIn] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    addBodyClass('body');

    return () => {
      removeBodyClass('body');
    };
  }, []);

  const changeUserEmail = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setEmail(event.target.value);
  };

  const clickSendBtnHandler = (): void => {
    const minEmailLength = 5;

    if (
      !email ||
      email.trim().length < minEmailLength ||
      !email.includes('@') ||
      !email.split('@')[1].includes('.')
    ) {
      setErrorSignIn(`${langData[language].resetPage_invalid_emale}`);
    } else {
      // reset pass
      // onResetPassword('You should receive an email with further instructions shortly.');
      // setTimeout(() => onResetPassword(''), 2000);
      // }).catch((error) => {
      //   setErrorSignIn(error.message);
      // });
    }
  };

  return (
    <Wrapper>
      <Content>
        <ContentHeader>
          <StyledNav exact to="/authorization" />
          <PageTitle>
            {langData[language].resetPage_password_recovery}
          </PageTitle>
        </ContentHeader>
        <ContentWrapper>
          {isErrorSignIn && <AlertError>{isErrorSignIn}</AlertError>}
          <Form>
            <FormInfo>{langData[language].resetPage_send_to_email}</FormInfo>
            <InputText
              type="text"
              name="username"
              placeholder={langData[language].resetPage_placeholder_emale}
              autoFocus
              onChange={changeUserEmail}
            />
            <ButtonSave
              type="button"
              value="Send"
              onClick={clickSendBtnHandler}
            >
              {langData[language].resetPage_btn_send}
            </ButtonSave>
          </Form>
        </ContentWrapper>
      </Content>
    </Wrapper>
  );
};

export default ResetPage;

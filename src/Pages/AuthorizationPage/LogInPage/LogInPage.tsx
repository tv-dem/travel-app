import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink, useHistory } from 'react-router-dom';
import {
  Form,
  InputText,
  FormField,
  TogglePassword,
  InputBtnSignIn,
  AlertError,
} from '../../../Components/styledComponents';

const InputPassword = styled(InputText)`
  padding-right: 48px;
`;

const FormOptions = styled.div`
  margin: 16px 0 0 0;
  font-size: 15px;
  text-align: right;

  & div {
    display: none;
  }

  & a {
    color: #0095cc;
    text-decoration: none;
  }
`;

// interface LogInPageProps {
//   onToggleErrorComponent: (isError: boolean) => void;
//   language:string,
//   langData:any,
// }

const LogInPage = ({ onToggleErrorComponent,language,langData,onFetch, isError,removeLogInError,isLogIn, clearState }:any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShow, setShow] = useState(false);

  useEffect(()=> () => clearState(), [clearState])

  const toggleVisiblePassword = (): void => {
    setShow((state) => (!state));
  };

  const handleChangeInputPassword = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(target.value);
    removeLogInError();
    onToggleErrorComponent(false);
  };

  const handleChangeInputEmail = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(target.value);
    removeLogInError();
    onToggleErrorComponent(false);
  };

  const logInAccount = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onFetch(email, password)
  };

  const toggleChecked = (): void => {
    console.log(1);
  };

  // componentDidMount = (): void => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     this.setState({ isSignIn: !!user });
  //     this.props.toggleEnterUser(!!user);
  //   });
  // }
  const history = useHistory();
  useEffect(()=>{

    if(isLogIn) {
      history.push('/');
    }
  }, [isLogIn, history])

  return (
      <>
    <Form onSubmit={logInAccount}>
      {isError && <AlertError>{isError}</AlertError>}
      <FormField>
        <InputText
          tab-index="0"
          id="email"
          name="username"
          placeholder={langData[language].loginPage_emale}
          type="text"
          autoComplete="off"
          onChange={handleChangeInputEmail}
          value={email}
        />
      </FormField>
      <FormField>
        <InputPassword
          tab-index="0"
          id="password"
          name="password"
          placeholder={langData[language].loginPage_password}
          type={isShow ? "text" : "password"}
          autoComplete="off"
          onChange={handleChangeInputPassword}
          value={password}
        />
        <TogglePassword
          onClick={toggleVisiblePassword}
        />
      </FormField>
      <FormOptions>
        <div>
          <label htmlFor="rememberMe">
            <input
              tab-index="0"
              id="rememberMe"
              name="rememberMe"
              type="checkbox"
              checked
              onChange={toggleChecked}
            />
              {langData[language].loginPage_remembeMe}
            </label>
        </div>
        <NavLink to="/reset">{langData[language].loginPage_forgot_password}</NavLink>
        <InputBtnSignIn
          tab-index="0"
          type="submit"
          value={langData[language].loginPage_log_in}
          name="login"
        />
      </FormOptions>
    </Form>
      </>
  );
};

export default LogInPage;

import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Form, InputText, FormField, TogglePassword, InputBtnSignIn } from '../../../Components/styledComponents';

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

interface LogInPageProps {
  onToggleErrorComponent: (isError: boolean) => void;
  // toggleEnterUser: (value: boolean) => void;
}

const LogInPage: React.FC<LogInPageProps> = ({ onToggleErrorComponent }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShow, setShow] = useState(false);

  const toggleVisiblePassword = (): void => {
    setShow((state) => (!state));
  };

  const handleChangeInputPassword = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(target.value);
    onToggleErrorComponent(false);
  };

  const handleChangeInputEmail = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(target.value);
    onToggleErrorComponent(false);
  };

  const logInAccount = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
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

  return (
    <Form onSubmit={logInAccount}>
      <FormField>
        <InputText
          tab-index="0"
          id="email"
          name="username"
          placeholder="E-mail"
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
          placeholder="Password"
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
              Remember Me
            </label>
        </div>
        <NavLink to="/reset">Forgot password?</NavLink>
        <InputBtnSignIn
          tab-index="0"
          type="submit"
          value="LogIn"
          name="login"
        />
      </FormOptions>
    </Form>
  );
};

export default LogInPage;

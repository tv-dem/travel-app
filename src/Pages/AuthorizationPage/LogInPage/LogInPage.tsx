import React from 'react';
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

interface LogInPageState {
  email: string;
  password: string;
  isOpenPassword: boolean;
}

export default class LogInPage extends React.Component<LogInPageProps, LogInPageState> {
  constructor(props: LogInPageProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isOpenPassword: false,
    };
  }

  toggleVisiblePassword = (): void => {
    this.setState(({ isOpenPassword }) => ({
      'isOpenPassword': !isOpenPassword,
    }));
  }

  handleChangeInput = ({ target: { value, id } }: React.ChangeEvent<HTMLInputElement>): void => {
    const { onToggleErrorComponent } = this.props;
    this.setState({
      [id]: value,
    });
    onToggleErrorComponent(false);
  }

  logInAccount = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
  }

  toggleChecked = (): void => {
    console.log(1);
  };

  // componentDidMount = (): void => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     this.setState({ isSignIn: !!user });
  //     this.props.toggleEnterUser(!!user);
  //   });
  // }

  render(): JSX.Element {
    const { isOpenPassword, email, password } = this.state;
    return (
      <Form onSubmit={this.logInAccount}>
        <FormField>
          <InputText
            tabIndex="0"
            id="email"
            name="username"
            placeholder="E-mail"
            type="text"
            autocomplete="off"
            onChange={this.handleChangeInput}
            value={email}
          />
        </FormField>
        <FormField>
          <InputPassword
            tabIndex="0"
            id="password"
            name="password"
            placeholder="Password"
            type={isOpenPassword ? "text" : "password"}
            autocomplete="off"
            onChange={this.handleChangeInput}
            value={password}
          />
          <TogglePassword
            onClick={this.toggleVisiblePassword}
          />
        </FormField>
        <FormOptions>
          <div>
            <label htmlFor="rememberMe">
              <input
                tabIndex="0"
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                checked
                onChange={this.toggleChecked}
              />
              Remember Me
            </label>
          </div>
          <NavLink to="/reset">Forgot password?</NavLink>
          <InputBtnSignIn
            tabIndex="0"
            type="submit"
            value="LogIn"
            name="login"
          />
        </FormOptions>
      </Form>
    );
  }
};

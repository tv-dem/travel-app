import React, { useState } from 'react';
import { Form, InputText, FormField, TogglePassword, InputBtnSignIn, FormFieldCaption, AlertError } from '../../../Components/styledComponents';

const SignInPage: React.FC = () => {
  const [isError, setError] = useState('');
  const [isOpenPassword, setOpenPassword] = useState(false);
  const [isOpenConfirmPassword, setOpenConfirmPassword] = useState(false);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    newPassword: '',
    confirmedPassword: '',
  });

  const toggleVisibleConfirmPassword = (): void => {
    setOpenConfirmPassword((pass) => !pass);
  };

  const toggleVisiblePassword = (): void => {
    setOpenPassword((pass) => !pass);
  };

  const changeName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserData(() => ({ ...userData, 'firstName': event.target.value.trim() }));
    setError('');
  };

  const changeLastName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserData(() => ({ ...userData, 'lastName': event.target.value.trim() }));
    setError('');
  };

  const changeEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserData(() => ({ ...userData, 'email': event.target.value.trim() }));
    setError('');
  };

  const handleSetNewPassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserData(() => ({ ...userData, 'newPassword': event.target.value.trim() }));
    setError('');
  };

  const handleConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserData(() => ({ ...userData, 'confirmedPassword': event.target.value.trim() }));
    setError('');
  };

  const signInAccount = (): void => {
    const { firstName, lastName, email, newPassword, confirmedPassword } = userData;
    const minNameLength = 3;
    const minLengthPassword = 8;
    const regExp = new RegExp(`^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([^_])([a-zA-Z0-9]){${minLengthPassword},}$`);

    switch (true) {
      case (!firstName || firstName.trim().length < minNameLength || firstName[0].match(/\d/)): {
        setError('Name should be at least 4 symbols, don\'t starts with decimal!');
        break;
      }
      case (!lastName || lastName.trim().length < minNameLength || lastName[0].match(/\d/)): {
        setError('LastName should be at least 4 symbols, don\'t starts with decimal!');
        break;
      }
      case (!email || email.trim().length < minNameLength || !email.includes('@') || !email.split('@')[1].includes('.')): {
        setError('Email should be at least 4 symbols, must contain @, and contain ends with "."');
        break;
      }
      case (!newPassword.match(regExp)): {
        setError('Password must contains a lowercase letters, an uppercase letters, number and be at least 8 characters.');
        break;
      }
      case (confirmedPassword !== newPassword): {
        setError('Passwords do not match');
        break;
      }
      default: {
        // authentification
      }
    }
  }

  return (
    <>
      <Form>
        <InputText
          type="text"
          placeholder="Enter your name"
          name="firstName"
          onChange={changeName}
        />
        <InputText
          type="text"
          placeholder="Enter lastname"
          name="lastName"
          onChange={changeLastName}
        />
        <InputText
          type="text"
          placeholder="Enter E-mail"
          name="email"
          autoComplete="on"
          onChange={changeEmail}
        />
        <FormField>
          <InputText
            type={isOpenPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            autoComplete="on"
            onChange={handleSetNewPassword}
          />
          <TogglePassword onClick={toggleVisiblePassword} />
        </FormField>
        <FormFieldCaption>
          Password must contains a lowercase letters, an uppercase letters, number and be at least 8 characters.
        </FormFieldCaption>
        {isError && <AlertError>{isError}</AlertError>}
        {/* {isSuccess && <AlertSuccess>{isSuccess}</AlertSuccess>} */}
        <FormField>
          <InputText
            type={isOpenConfirmPassword ? "text" : "password"}
            placeholder="Password confirm"
            name="password-confirm"
            onChange={handleConfirmPassword}
          />
          <TogglePassword onClick={toggleVisibleConfirmPassword} />
        </FormField>
        <InputBtnSignIn
          type="button"
          value="Register"
          onClick={signInAccount}
        />
      </Form>
    </>
  );
};

export default SignInPage;

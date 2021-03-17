import React, { useState } from 'react';
import { Form, InputText, FormField, TogglePassword, InputBtnSignIn, FormFieldCaption, AlertError } from '../../../Components/styledComponents';

interface SignInPageProps {
  language:string,
  langData:any,
}

const SignInPage: React.FC<SignInPageProps> = ({language,langData}) => {
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
        setError(`${langData[language].signinPage_invalid_name}`);
        break;
      }
      case (!lastName || lastName.trim().length < minNameLength || lastName[0].match(/\d/)): {
        setError(`${langData[language].signinPage_invalid_LastName}`);
        break;
      }
      case (!email || email.trim().length < minNameLength || !email.includes('@') || !email.split('@')[1].includes('.')): {
        setError(`${langData[language].signinPage_invalid_emale}`);
        break;
      }
      case (!newPassword.match(regExp)): {
        setError(`${langData[language].signinPage_invalid_password}`);
        break;
      }
      case (confirmedPassword !== newPassword): {
        setError(`${langData[language].signinPage_invalid_password_confirme}`);
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
          placeholder={langData[language].signinPage_placeholder_name}
          name="firstName"
          onChange={changeName}
          value={userData.firstName}
        />
        <InputText
          type="text"
          placeholder={langData[language].signinPage_placeholder_lastname}
          name="lastName"
          onChange={changeLastName}
          value={userData.lastName}
        />
        <InputText
          type="text"
          placeholder={langData[language].signinPage_placeholder_emale}
          name="email"
          autoComplete="on"
          onChange={changeEmail}
          value={userData.email}
        />
        <FormField>
          <InputText
            type={isOpenPassword ? "text" : "password"}
            placeholder={langData[language].signinPage_placeholder_password}
            name="password"
            autoComplete="on"
            onChange={handleSetNewPassword}
            value={userData.newPassword}
          />
          <TogglePassword onClick={toggleVisiblePassword} />
        </FormField>
        <FormFieldCaption>
        {langData[language].signinPage_invalid_password}
        </FormFieldCaption>
        {isError && <AlertError>{isError}</AlertError>}
        {/* {isSuccess && <AlertSuccess>{isSuccess}</AlertSuccess>} */}
        <FormField>
          <InputText
            type={isOpenConfirmPassword ? "text" : "password"}
            placeholder={langData[language].signinPage_placeholder_password_confirm}
            name="password-confirm"
            onChange={handleConfirmPassword}
            value={userData.confirmedPassword}
          />
          <TogglePassword onClick={toggleVisibleConfirmPassword} />
        </FormField>
        <InputBtnSignIn
          type="button"
          value={langData[language].signinPage_btn_register}
          onClick={signInAccount}
        />
      </Form>
    </>
  );
};

export default SignInPage;

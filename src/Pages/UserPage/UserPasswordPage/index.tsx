import React, { useState } from 'react';
import styled from 'styled-components';
import {
  ContentTitle,
  UserForm,
  FormField,
  InputText,
  TogglePassword,
  FormFieldCaption,
  ButtonSave,
  AlertError,
  AlertSuccess,
} from '../../../Components/styledComponents';

const InputPassword = styled(InputText)`
  padding-right: 48px;
`;

const ButtonCancel = styled(ButtonSave)`
  color: #000;
  background-color: rgba(0, 0, 0, 0.04);
`;

interface UserPasswordPageProps {
  toggleDisplay: () => void;
  language: string;
  langData: any;
  mail: string;
  onFetch: (mail: any, password: string) => void,
  message: string,
}

const UserPasswordPage: React.FC<UserPasswordPageProps> = ({
  toggleDisplay,
  language,
  langData,
  mail,
  onFetch,
  message
}) => {
  const [isOpenPassword, setOpenPassword] = useState(false);
  const [isError, setError] = useState('');
  const [isSuccess, setSuccess] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const toggleVisiblePassword = (): void => {
    setOpenPassword(state => !state);
  };

  const handleSetNewPassword = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setNewPassword(event.target.value.trim());
    setError('');
  };

  const handleConfirmPassword = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setConfirmedPassword(event.target.value.trim());
    setError('');
  };

  const handleBtnSaveClick = (): void => {
    const minLengthPassword = 8;
    const regExp = new RegExp(
      `^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([^_])([a-zA-Z0-9]){${minLengthPassword},}$`,
    );

    if (!newPassword.match(regExp)) {
      setError(`${langData[language].userPage_passwordPage_invalid_password}`);
    } else if (confirmedPassword !== newPassword) {
      setError(
        `${langData[language].userPage_passwordPage_invalid_password_confirme}`,
      );
      setSuccess(
        `${langData[language].userPage_passwordPage_password_changed}`,
      );
    } else {
      onFetch(mail, newPassword);

      setTimeout(() => setSuccess(message), 3000);
    }
  };

  return (
    <>
      <ContentTitle>
        {langData[language].userPage_passwordPage_password_title}
      </ContentTitle>
      <UserForm>
        <FormField>
          <InputPassword
            type={isOpenPassword ? 'text' : 'password'}
            id="password-new"
            name="password-new"
            autoComplete="on"
            placeholder={
              langData[language].userPage_passwordPage_placeholder_new_password
            }
            value={newPassword}
            onChange={handleSetNewPassword}
          />
          <TogglePassword onClick={toggleVisiblePassword} />
        </FormField>
        <FormFieldCaption>
          {langData[language].userPage_passwordPage_invalid_password}
        </FormFieldCaption>
        <FormField>
          <InputPassword
            type={isOpenPassword ? 'text' : 'password'}
            id="password-confirm"
            name="password-new"
            autoComplete="on"
            placeholder={
              langData[language]
                .userPage_passwordPage_placeholder_new_password_confirm
            }
            value={confirmedPassword}
            onChange={handleConfirmPassword}
          />
          <TogglePassword onClick={toggleVisiblePassword} />
        </FormField>
        {isError && <AlertError>{isError}</AlertError>}
        {isSuccess && <AlertSuccess>{isSuccess}</AlertSuccess>}
        <ButtonSave
          type="button"
          name="submitAction"
          value="Save"
          onClick={handleBtnSaveClick}
        >
          {langData[language].userPage_passwordPage_btn_save}
        </ButtonSave>
        <ButtonCancel
          type="button"
          name="submitAction"
          value="Cancel"
          onClick={toggleDisplay}
        >
          {langData[language].userPage_passwordPage_btn_cancel}
        </ButtonCancel>
      </UserForm>
    </>
  );
};

export default UserPasswordPage;

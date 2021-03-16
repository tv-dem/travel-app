import React, { useState } from 'react';
import styled from 'styled-components';
import { ContentTitle, UserForm, FormField, InputText, TogglePassword, FormFieldCaption, ButtonSave, AlertError, AlertSuccess } from '../../../Components/styledComponents';

const InputPassword = styled(InputText)`
  padding-right: 48px;
`;

const ButtonCancel = styled(ButtonSave)`
  color: #000;
  background-color: rgba(0,0,0,0.04);
`;

interface UserPasswordPageProps {
  toggleDisplay: () => void;
}

const UserPasswordPage: React.FC<UserPasswordPageProps> = ({ toggleDisplay }) => {
  const [isOpenPassword, setOpenPassword] = useState(false);
  const [isError, setError] = useState('');
  const [isSuccess, setSuccess] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const toggleVisiblePassword = (): void => {
    setOpenPassword((state) => !state);
  };

  const handleSetNewPassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNewPassword(event.target.value.trim());
    setError('');
  };

  const handleConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setConfirmedPassword(event.target.value.trim());
    setError('');
  };

  const handleBtnSaveClick = (): void => {
    const minLengthPassword = 8;
    const regExp = new RegExp(`^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([^_])([a-zA-Z0-9]){${minLengthPassword},}$`);

    if (!newPassword.match(regExp)) {
      setError('Password must contains a lowercase letters, an uppercase letters, number and be at least 8 characters.');
    }

    if (confirmedPassword !== newPassword) {
      setError('Passwords do not match');
      setSuccess('Password changed');
    }

    // update password backend
    // user.updatePassword(newPassword).then(() => {
    // setSuccess('Password changed');

    //   setTimeout(() => setSuccess(''), 1000);
    // }).catch((error) => {
    //   setError(error.message);
    // });
  };

  return (
    <>
      <ContentTitle>
        Password
      </ContentTitle>
      <UserForm>
        <FormField>
          <InputPassword
            type={isOpenPassword ? "text" : "password"}
            id='password-new'
            name='password-new'
            autoComplete='on'
            placeholder='New password'
            value={newPassword}
            onChange={handleSetNewPassword}
          />
          <TogglePassword onClick={toggleVisiblePassword} />
        </FormField>
        <FormFieldCaption>
          Password must contains a lowercase letters, an uppercase letters, number and be at least 8&nbsp;characters.
        </FormFieldCaption>
        <FormField>
          <InputPassword
            type={isOpenPassword ? "text" : "password"}
            id='password-confirm'
            name='password-new'
            autoComplete='on'
            placeholder='Confirm new password'
            value={confirmedPassword}
            onChange={handleConfirmPassword}
          />
          <TogglePassword onClick={toggleVisiblePassword} />
        </FormField>
        {isError && <AlertError>{isError}</AlertError>}
        {isSuccess && <AlertSuccess>{isSuccess}</AlertSuccess>}
        <ButtonSave
          type='button'
          name='submitAction'
          value='Save'
          onClick={handleBtnSaveClick}
        >
          Save
          </ButtonSave>
        <ButtonCancel
          type='button'
          name='submitAction'
          value='Cancel'
          onClick={toggleDisplay}
        >
          Cancel
          </ButtonCancel>
      </UserForm>
    </>
  );
};

export default UserPasswordPage;


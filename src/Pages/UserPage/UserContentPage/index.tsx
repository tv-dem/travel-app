import React, { useState } from 'react';
import styled from 'styled-components';
import { ContentTitle, UserForm, FormField, ButtonSave, AlertError, AlertSuccess } from '../../../Components/styledComponents';

const UserPhotoWrapper = styled.div`
  display: flex;
  max-width: 100px;
  max-height: 100px;
`;

const UserPhoto = styled.img`
  display: inline-block;
  width: 100%;
`;

const FormInput = styled.input`
  border-radius: 2px;
  border: 1px solid rgba(0,0,0,0.16);
  padding: 12px 16px;
  font-size: 15px;
  line-height: 22px;
  height: 48px;
  margin-top: 20px;
  color: #000;
  width: 100%;
  background-clip: padding-box;
`;

const FormFields = styled.div`
  display: flex;
`;

const ButtonCancel = styled(ButtonSave)`
  color: #000;
  background-color: rgba(0,0,0,0.04);
`;

interface UserContentPageProps {
  toggleDisplay: () => void;
  language: string,
  langData: any,
  mail: string,
  userName: string,
  lastName: string,
  photoUrl: string,
  onFetch: (mail: any, username: any, lastname: any, photoUrl: any) => void,
  err: string,
}

const UserContentPage: React.FC<UserContentPageProps> = ({ toggleDisplay, language, langData, mail, userName, lastName, photoUrl, onFetch, err }) => {
  const [stateUser, setStateUser] = useState({
    'fName': userName,
    'lName': lastName,
    'e-mail': mail,
  });

  const [isPhoto, setPhoto] = useState(photoUrl);
  const [isError, setError] = useState(err);
  const [isSuccess, setSuccess] = useState('');

  const changeName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setStateUser(() => ({ ...stateUser, 'fName': event.target.value.trim() }));
    setError('');
  };

  const changeLastName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setStateUser(() => ({ ...stateUser, ...{ 'lName': event.target.value.trim() } }));
    setError('');
  };

  const changeEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setStateUser(() => ({ ...stateUser, ...{ 'e-mail': event.target.value.trim() } }));
    setError('');
  };

  const handleBtnSaveClick = (): void => {
    const minNameLength = 3;
    if (!stateUser.fName || stateUser.fName.trim().length < minNameLength || stateUser.fName[0].match(/\d/)) {
      setError(`${langData[language].userPage_userContentPage_invalid_name}`);
    } else if (!stateUser.lName || stateUser.lName.trim().length < minNameLength || stateUser.lName[0].match(/\d/)) {
      setError(`${langData[language].userPage_userContentPage_invalid_LastName}`);
    } else if (!stateUser['e-mail'] || stateUser['e-mail'].trim().length < minNameLength || !stateUser['e-mail'].includes('@') || !stateUser['e-mail'].split('@')[1].includes('.')) {
      setError(`${langData[language].userPage_userContentPage_invalid_emale}`);
    } else {
      onFetch(stateUser['e-mail'], stateUser.fName, stateUser.lName, isPhoto);
    }

    setSuccess(`${langData[language].userPage_userContentPage_persInf_changed}`);

    setTimeout(() => {
      setSuccess('');
      toggleDisplay();
    }, 1000);
  };

  const handleBtnCancelClick = (): void => {
    setStateUser({
      'fName': '',
      'lName': '',
      'e-mail': ''
    });
    toggleDisplay();
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (!event.target.files) return;

    const selectedFile = event.target!.files[0]!;
    const reader = new FileReader();

    if (!selectedFile.type.match('image.*')) {
      setError(`${langData[language].userPage_userContentPage_invalid_image}`);
    }

    reader.onload = function (e) {
      const b64 = ((e.target as FileReader)!.result as string)!.split(',')[1];
      const byteCharacters = atob(decodeURIComponent(b64));
      const byteNumbers = new Array(byteCharacters.length);

      for (let i = 0; i < byteCharacters.length; i += 1) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }

      // Upload file
      setPhoto(reader.result as string);
    };
    reader.readAsDataURL(selectedFile);
  }

  return (
    <>
      <UserPhotoWrapper>
        <UserPhoto
          src={isPhoto}
          alt={`${stateUser.fName} ${langData[language].userPage_userContentPage_photo}`}
        />
      </UserPhotoWrapper>
      <ContentTitle>
        {langData[language].userPage_userContentPage_personal_info}
      </ContentTitle>
      <UserForm>
        <FormField>
          <FormInput
            type='text'
            id='firstName'
            placeholder={langData[language].userPage_userContentPage_placeholder_name}
            name='firstName'
            value={stateUser.fName}
            onChange={changeName}
          />
        </FormField>
        {isError && <AlertError>{isError}</AlertError>}
        <FormField>
          <FormInput
            type='text'
            id='lastName'
            placeholder={langData[language].userPage_userContentPage_placeholder_lastName}
            name='lastName'
            value={stateUser.lName}
            onChange={changeLastName}
          />
        </FormField>
        <FormField>
          <FormInput
            type='text'
            id='user-email'
            placeholder={langData[language].userPage_userContentPage_placeholder_emale}
            name='email'
            value={stateUser['e-mail']}
            onChange={changeEmail}
            disabled
          />
        </FormField>
        {isSuccess && <AlertSuccess>{isSuccess}</AlertSuccess>}
        <FormField>
          <FormInput
            type='file'
            id='user-photo'
            placeholder={langData[language].userPage_userContentPage_placeholder_addFoto}
            name='userPhoto'
            accept='image/*'
            onChange={handleFileSelect}
          />
        </FormField>
        <FormFields>
          <ButtonSave
            type='button'
            name='submitAction'
            value='Save'
            onClick={handleBtnSaveClick}
          >
            {langData[language].userPage_userContentPage_btn_save}
          </ButtonSave>
          <ButtonCancel
            type='button'
            name='submitAction'
            value='Cancel'
            onClick={handleBtnCancelClick}
          >
            {langData[language].userPage_userContentPage_btn_cancel}
          </ButtonCancel>
        </FormFields>
      </UserForm>
    </>
  );
};

export default UserContentPage;

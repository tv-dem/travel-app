import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ExitButton } from '../styledComponents';
import { ReactComponent as IconUserHeader } from '../../public/icon-user-header.svg';
import { ReactComponent as IconLogOut } from '../../public/icon-log-out.svg';

const WrapperModal = styled.div`
  inset: 48px 0px auto auto;
  transform-origin: right top;
  width: 250px;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,.32);
  border-radius: 2px;
  background-color: #fff;
  will-change: transform;
  z-index: 10;
}
`;

const UserBarLink = styled(NavLink)`
  display: flex;
  width: 100%;
  background-color: #fff;
  padding: 12px 48px 12px 56px;
  border-top: 1px solid rgba(0,0,0,.08);
  transition-duration: .12s;
  transition-timing-function: ease-in-out;
  transition-property: background-color;
  position: relative;
  color: #000;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  cursor: pointer;
  text-align: left;

  &:hover {
    background-color: rgba(0,0,0,.04);
  }

  & .user-bar__icon {
    width: 24px;
    height: 24px;
    min-width: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    
    & svg {
      fill: rgba(0,0,0,0.48);
    }
  }
`;

interface UserBarProps {
  language: string;
  langData: any;
}

const UserBar: React.FC<UserBarProps> = ({language,langData}) => (
  <WrapperModal>
    <UserBarLink to="/user/account">
      <span className="user-bar__icon">
        <IconUserHeader />
      </span>
      {langData[language].userViewPage_userBar_profile}
      </UserBarLink>
    <ExitButton onClick={() => console.log('log out backend')}>
      <IconLogOut />
      {langData[language].userViewPage_userBar_exit}
      </ExitButton>
  </WrapperModal>
);

export default UserBar;

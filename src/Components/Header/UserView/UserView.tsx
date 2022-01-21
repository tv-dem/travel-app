import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import Dialog from '@material-ui/core/Dialog';
import { DialogContent } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import UserBar from '../../UserBar';
import langData from '../../../langData/langData.json'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    dialog:{
    },
    dialogContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '50px',
      textAlign:"center"
    },
    aaa:{
      color: 'black',
      fontWeight: 200,
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    settings: {
      cursor: 'pointer',
    }
  }),
);
//
// interface UserViewProps {
//   language: string;
//   name: string;
//   lastname: string;
//   photoUrl: string;
// }

const UserView = ({language, name, lastname, photoUrl, logout}:any) => {
  const [showUserBar, setUserBar] = useState(false);
  const s = useStyles();
  return (
    <div className={s.root}>
      <Dialog
        open={showUserBar}
        onClose={()=>{setUserBar(false)}}
      >
        <DialogContent className={s.dialogContent}>
          <DialogTitle><h2>{langData[language].userViewPage_title}</h2></DialogTitle>
          <UserBar logout={logout} langData={langData} language={language}/>

        </DialogContent>
      </Dialog>
        <Avatar src={photoUrl} className={s.large}/>
        <h4 className={s.aaa}>{name} {lastname}</h4>
        <SettingsIcon className={s.settings} onClick={()=>setUserBar(!showUserBar)}/>
    </div>
  );
};

export default UserView;

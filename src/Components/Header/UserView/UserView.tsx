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

interface UserViewProps {
  language: string;
}

const UserView:React.FC<UserViewProps> = ({language}) => {
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
          <UserBar langData={langData} language={language}/>
        </DialogContent>
      </Dialog>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={s.large}/>
        <h4 className={s.aaa}>Tatyana Demchuk</h4>
        <SettingsIcon className={s.settings} onClick={()=>setUserBar(!showUserBar)}/>
    </div>
  );
};

export default UserView;

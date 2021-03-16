import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Video from '../../Video/Video';
import Gallery from '../../Gallery/Gallery';

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`a11y-tabpanel-${index}`}
      aria-labelledby={`a11y-tab-${index}`}
    >
      {value === index && (
        <Box p={1}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

interface TabsProps {
  labelId: string;
  onChange: (event: unknown, value: number) => void;
  selectionFollowsFocus: boolean;
  value: number;
}

function TabsPanel(props: TabsProps) {

  const { labelId, onChange, selectionFollowsFocus, value } = props;

  return (
    <AppBar position="static" color="default">
      <Tabs
        indicatorColor="primary"
        textColor="primary"

        aria-labelledby={labelId}
        onChange={onChange}
        selectionFollowsFocus={selectionFollowsFocus}
        value={value}
      >
        <Tab label="Photo gallery" aria-controls="a11y-tabpanel-0" id="a11y-tab-0" />
        <Tab label="Video" aria-controls="a11y-tabpanel-1" id="a11y-tab-1" />
      </Tabs>
    </AppBar>
  );
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function AccessibleTabs({videoUrl}:any): JSX.Element {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event: unknown, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>

      <TabsPanel

        labelId="demo-a11y-tabs-automatic-label"
        selectionFollowsFocus
        onChange={handleChange}
        value={value}
      />


      <TabPanel value={value} index={0}>
        <Gallery/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Video url={videoUrl}/>
      </TabPanel>
    </div>
  );
}

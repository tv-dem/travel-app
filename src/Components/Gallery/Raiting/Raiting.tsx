import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import withStyles from '@material-ui/core/styles/withStyles';

const StyledRating = withStyles({
  iconFilled: {
    color: '#2a57b5',
  },
  iconHover: {
    color: '#2a57b5',
  },
})(Rating);

const customIcons: { [index: string]: { icon: React.ReactElement; label: string } } = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props: any) {
  const { value, ...other } = props;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <span {...other}>{customIcons[value].icon}</span>;
}

const SimpleRating = ({currentRating, onSetRating}) => (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <StyledRating
          name="simple-controlled"
          getLabelText={(value: number) => customIcons[value].label}
          IconContainerComponent={IconContainer}
          value={currentRating}
          onChange={(event, newValue) => {
            onSetRating(newValue);
          }}
        />
      </Box>
    </div>
  );

export default SimpleRating;

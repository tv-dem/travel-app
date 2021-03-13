import ON_TIME_CHANGE from './actionTypes';

const onDateChangeAC = (utf:number) => {
  const date = new Date();
  const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
  const NewZealandTime = new Date(utcTime + (3600000 * utf));
  return {
    type: ON_TIME_CHANGE,
    date: NewZealandTime,
  };
};

export default onDateChangeAC;

import React from 'react';
import { connect } from 'react-redux';
import changeInputFieldAC from '../../../Redux/MainPage/actions';
import Search from './Search';

const mapStateToProps = (state:any) => {
  console.log(state);
  return {
  input: state.mainPage.input,
}};

const mapDispatchToProps = (dispatch: any) => ({
  onChangeInput: ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeInputFieldAC(target.value));
  },
});

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);


export default SearchContainer;

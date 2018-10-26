// @flow
import * as React from "react";
import { Item, Input, Icon, Toast, Form } from "native-base";
import { Field, reduxForm } from "redux-form";
import Login from "../../stories/screens/Login";
import {connect} from "react-redux";

export interface Props {
  navigation: any;
}
export interface State {}


const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { navigation } = ownProps;
  return {
    ...stateProps,
    getAuthToken: (action) => dispatch(action),
    login: () => navigation.navigate("Home")
  }
}

const mapStateToProps = state => ({
    token: state.authReducer.token
});

export default connect(mapStateToProps, null, mergeProps )(Login);

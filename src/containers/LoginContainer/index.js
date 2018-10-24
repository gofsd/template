// @flow
import * as React from "react";
import { Item, Input, Icon, Toast, Form } from "native-base";
import { Field, reduxForm } from "redux-form";
import Login from "../../stories/screens/Login";
import {connect} from "react-redux";
import FlatList from "../../stories/components/List";

export interface Props {
  navigation: any;
}
export interface State {}


const mapDispatchToProps = (dispatch) => ({
    getAuthToken: (action) => dispatch(action),
})

const mapStateToProps = state => ({
    token: state.authReducer.token
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

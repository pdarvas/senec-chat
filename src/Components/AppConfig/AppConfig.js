import React, { Component } from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import {Authorizer} from "./Authorizer";

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = 'jss-insertion-point';

export class AppConfig extends Component {
  render() {
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <Authorizer auth={this.props.auth} db={this.props.db}>
          {this.props.children}
        </Authorizer>
      </JssProvider>
    );
  }
}

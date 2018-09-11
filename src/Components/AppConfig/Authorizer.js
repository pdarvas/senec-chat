import React, { Component } from 'react';

export class Authorizer extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

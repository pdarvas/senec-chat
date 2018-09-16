import React, { Component } from 'react';
import styled from 'styled-components';


const MessagesContainer = styled.div`
  height: calc(100% - 114px);
  overflow: auto;
  background-color: #fbfbfb;
`;

const MessagesEnd = styled.div`
  float: left;
  clear: both;
`;

export class MessagesList extends Component {

  componentDidUpdate() {
    this.messagesEnd.scrollIntoView();
  }

  render() {

    return (
      <MessagesContainer>
        {this.props.children}
        <MessagesEnd innerRef={(el) => this.messagesEnd = el} />
      </MessagesContainer>
    );
  }
}



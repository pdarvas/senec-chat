import React, { Component } from 'react';
import styled from 'styled-components';
import {CustomBar} from "../CustomBar";
import {MessageBar} from "./MessageBar";
import {MessageBalloon} from "./MessageBaloon";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  border: solid 2px red;
  box-sizing: border-box;
  position: relative;
`;

const MessagesWrapper = styled.div`
  height: calc(100% - 114px);
  overflow: auto;
`;

const messages = [
  {
    text: 'Eaee',
    isMine: true
  },
  {
    text: 'Salve',
    isMine: false
  },
  {
    text: 'Como vai',
    isMine: false
  },
  {
    text: 'Hoje foi um dia muito longo que eu nao sei mais o que fazer e estou somente esperando ele acabar pq estou com muito sono e quero dormir.',
    isMine: true
  },
  {
    text: 'HAHAHAHAHAHAHAH',
    isMine: false
  },
  {
    text: 'Nao tem graca',
    isMine: true
  },
  {
    text: 'Eu acho engracado',
    isMine: false
  },

];

export class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages
    }
  }

  sendMessage(message) {
    this.setState({messages: [...this.state.messages, {text: message, isMine: true}]})
  }

  componentDidUpdate() {
    this.messagesEnd.scrollIntoView();
  }

  render() {
    const { selectedContact } = this.props;
    return (
      <Wrapper>
        <CustomBar text={selectedContact.name} avatar={selectedContact.avatar}/>
        <MessagesWrapper>
          {
            selectedContact.name && this.state.messages.map(message => <MessageBalloon message={message.text} isMine={message.isMine}/>)
          }
          <div style={{float: 'left', clear: 'both'}} ref={(el) => { this.messagesEnd = el; }} />
        </MessagesWrapper>
        {selectedContact.name && <MessageBar sendMessage={(message) => this.sendMessage(message)}/>}
      </Wrapper>
    );
  }
}



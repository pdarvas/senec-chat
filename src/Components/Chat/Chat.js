import React, { Component } from 'react';
import styled from 'styled-components';
import {CustomBar} from "../CustomBar";
import {MessageBar} from "./MessageBar";
import {MessageBalloon} from "./MessageBaloon";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
`;

const MessagesWrapper = styled.div`
  height: calc(100% - 114px);
  overflow: auto;
  background-color: #fbfbfb;
`;

export class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      chatId: undefined
    }
  }

  componentWillUpdate(nextProps, nextState) {
    const {
      uid,
      selectedContact,
      db
    } = this.props;

    if (selectedContact.key !== nextProps.selectedContact.key) {
      db.fetch(`users/${uid}/chats/${nextProps.selectedContact.key}`, {
        then: (data) => {
          if (typeof data === 'string')
            this.setState({chatId: data});
          else {
            this.createChat();
          }
        }
      });
    }

    if ((this.state.chatId !== nextState.chatId) && nextState.chatId) {
      if (this.sync) db.removeBinding(this.sync);
      this.sync = db.syncState(`chats/${nextState.chatId}`, {
        context: this,
        state: 'messages',
        asArray: true
      });
    }
  }

  sendMessage(message) {
    this.setState({messages: [...this.state.messages, {text: message, author: this.props.uid}]})
  }

  setChatId(data) {

  }

  createChat() {
    const {
      uid,
      selectedContact,
      db
    } = this.props;

    const chatId = db.push(`chats`, {
      data: {}
    }).key;

    db.post(`users/${uid}/chats/${selectedContact.key}`, {
      data: chatId
    });

    db.post(`users/${selectedContact.key}/chats/${uid}`, {
      data: chatId
    });

    this.setState({chatId})
  }

  componentDidUpdate() {
    this.messagesEnd.scrollIntoView();
  }

  render() {
    const { selectedContact } = this.props;
    return (
      <Wrapper>
        <CustomBar text={selectedContact.name} photo={selectedContact.photo}/>
        <MessagesWrapper>
          {
            selectedContact.name && this.state.messages.map(message => <MessageBalloon message={message.text} isMine={message.author === this.props.uid}/>)
          }
          <div style={{float: 'left', clear: 'both'}} ref={(el) => { this.messagesEnd = el; }} />
        </MessagesWrapper>
        {selectedContact.name && <MessageBar sendMessage={(message) => this.sendMessage(message)}/>}
      </Wrapper>
    );
  }
}



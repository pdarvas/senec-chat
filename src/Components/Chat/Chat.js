import React, { Component } from 'react';
import styled from 'styled-components';
import {CustomBar} from "../CustomBar";
import {MessageBar} from "./MessageBar";
import {MessageBalloon} from "./MessageBaloon";

const ChatContainer = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
`;

const MessagesContainer = styled.div`
  height: calc(100% - 114px);
  overflow: auto;
  background-color: #fbfbfb;
`;

const MessagesEnd = styled.div`
  float: left;
  clear: both;
`;

export class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    }
  }

  componentWillUpdate(nextProps, nextState) {
    const {
      uid,
      selectedContact,
      db
    } = this.props;

    if (selectedContact.key !== nextProps.selectedContact.key) {
      const chatIdPath = `users/${uid}/chats/${nextProps.selectedContact.key}`;

      db.fetch(chatIdPath, {
        then: this.parseChatId
      });
    }
  }

  sendMessage = (message) => {
    const newMessage = {
      text: message,
      author: this.props.uid
    };

    this.setState({messages: [...this.state.messages, newMessage]})
  };

  parseChatId = (chatId) => {
    if (typeof chatId === 'string')
      this.syncChat(chatId);
    else {
      this.createChat();
    }
  };

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

    this.syncChat(chatId)
  }

  syncChat(chatId) {
    const {
      db
    } = this.props;

    const chatPath = `chats/${chatId}`;

    if (this.sync) db.removeBinding(this.sync);

    this.sync = db.syncState(chatPath, {
      context: this,
      state: 'messages',
      asArray: true
    });
  }

  componentDidUpdate() {
    this.messagesEnd.scrollIntoView();
  }

  render() {
    const {
      selectedContact,
      uid
    } = this.props;

    const {
      messages
    } = this.state;

    return (
      <ChatContainer>
        <CustomBar
          text={selectedContact.name}
          photo={selectedContact.photo}/>
        <MessagesContainer>
          {
            messages.map(message => (
              <MessageBalloon
                message={message.text}
                isMine={message.author === uid}
              />
            ))
          }
          <MessagesEnd innerRef={(el) => this.messagesEnd = el} />
        </MessagesContainer>
        <MessageBar sendMessage={this.sendMessage} />
      </ChatContainer>
    );
  }
}



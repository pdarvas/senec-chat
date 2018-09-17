import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MessagesList } from './MessagesList';
import { MessageBar } from './MessageBar';
import { MessageBalloon } from './MessageBaloon';
import { CustomBar } from '../CustomBar';

const ChatContainer = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
  border: 1px solid red;
`;

const messagesMock = [
  {
    text: 'Oi, tudo bem?',
    author: ''
  },
  {
    text: 'Você sabia que',
    author: ''
  },
  {
    text: 'O Palmeiras não tem mundial?',
    author: ''
  }
];

export class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: messagesMock,
    };
  }

  componentDidUpdate(lastProps) {
    const {
      uid,
      selectedContact,
      db
    } = this.props;

    if (lastProps.selectedContact.key !== selectedContact.key) {
      this.fetchChatId(selectedContact.key);
    }
  }

  fetchChatId = (contactId) => {
    // Essa funcao recebe o id de um contato e deve buscar o id do chat seu com esse contato.
    const {
      db,
      uid
    } = this.props;

    db.fetch(`users/${uid}/chats/${contactId}`, {}).then(this.parseChatId);
  }

  sendMessage = (text) => {
    // Essa funcao recebe uma mensagem como string e deve adiciona-la ao estado "messages"
    // Não esquecer que a mensagem na verdade é um objeto com um text, que contem o texto, e um author, que contem seu uid

    const {
      uid
    } = this.props;

    const {
      messages
    } = this.state;

    const newMessage = {
      text: text,
      author: uid
    };

    this.setState({messages: messages.concat(newMessage)});

  };

  parseChatId = (chatId) => {
    // Essa funcao será chamada pelo firebase quando o "fetch" acabar.
    // Ela recebe um chatId como string. Caso ele nao exista, recebe um objeto vazio.
    // Ela deve verificar se o chatId é uma string. Caso positivo, deve fazer o sync do chat. Caso negativo, deve criar um novo chat.
    
    if(typeof chatId === 'string') {
      this.syncChat(chatId);
    } else {
      this.createChat();
    }
  };

  createChat() {
    // Essa funcao deve fazer 3 coisas:
    // 1. Criar um novo chatId aleatório.
    // 2. Adicionar o chatId à lista de chats dos dois usuários na conversa.
    // 3. Fazer o sync do chat.

    const {
      uid,
      selectedContact,
      db
    } = this.props;

    console.log('createChat');
  }

  syncChat(chatId) {
    // Essa função recebe um chatId e deve realizar a sincronização do estado "messages" com o chat do firebase.
    const {
      db
    } = this.props;

    console.log('syncChat', chatId);

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
        {/* Esse componente deve conter uma CustomBar com o nome e a foto do contato selecionado,
            uma MessagesList, que contem a lista de mensagens, utilizando MessageBaloon, e uma MessageBar.*/}
            <CustomBar text={selectedContact.name} photo={selectedContact.photo} />
            <MessagesList>
              {messages.map(message => <MessageBalloon message={message.text} isMine={uid === message.author} />)}
            </MessagesList>
            <MessageBar sendMessage={this.sendMessage}/>
      </ChatContainer>

    );
  }
}

Chat.propTypes = {
  db: PropTypes.any,
  uid: PropTypes.string,
  selectedContact: PropTypes.shape({
    name: PropTypes.string,
    photo: PropTypes.string,
    key: PropTypes.string
  })
};

Chat.defaultProps = {
  selectedContact: {},
  uid: ''
};
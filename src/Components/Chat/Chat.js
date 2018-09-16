import React, { Component } from 'react';
import styled from 'styled-components';

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

const messagesMock = [
  {
    text: 'asadfaf',
    author: ''
  },
  {
    text: 'adfadsfaf',
    author: ''
  },
  {
    text: 'afdadfadsf',
    author: ''
  },
  {
    text: 'adfadsf',
    author: ''
  },
  {
    text: 'afsdafaf',
    author: ''
  },
  {
    text: 'adsfafd',
    author: ''
  },
  {
    text: 'adsfadfsaf',
    author: ''
  },
  {
    text: 'adsfaf',
    author: ''
  },
  {
    text: 'asdfadsfaf',
    author: ''
  }
];

export class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: messagesMock,
    }
  }

  componentWillUpdate(nextProps, nextState) {
    const {
      uid,
      selectedContact,
      db
    } = this.props;

    if (selectedContact.key !== nextProps.selectedContact.key) {
      // a variavel chatIdPath deve conter o caminho para o id do chat com o contato selecionado atual
      const chatIdPath = ``;

      db.fetch(chatIdPath, {
        then: this.parseChatId
      });
    }
  }

  sendMessage = (message) => {
    // Essa funcao recebe uma mensagem como string e deve adiciona-la ao estado "messages"

    const {
      uid
    } = this.props;

    // A mensagem deve estar em um objeto como o seguinte
    const newMessage = {
      text: '',
      author: ''
    };

  };

  parseChatId = (chatId) => {
    // Essa funcao recebe um chatId como string. Caso ele nao exista, recebe um objeto vazio.
    // Ela deve verificar se o chatId é uma string. Caso positivo, deve fazer o sync do chat. Caso negativo, deve criar um novo chat.
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

  }

  syncChat(chatId) {
    // Essa função recebe um chatId e deve realizar a sincronização do estado "messages" com o chat do firebase.
    const {
      db
    } = this.props;

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
        {/* Aqui deve entrar uma CustomBar com o nome e a foto do contato selecionado. */}

        <MessagesContainer>
          {/* Aqui deve entrar a lista de mensagens, utilizando o componente MessageBaloon para cada mensagem. */}
          <MessagesEnd innerRef={(el) => this.messagesEnd = el} />
        </MessagesContainer>

        {/* Aqui deve entrar o componente MessageBar. */}
      </ChatContainer>
    );
  }
}



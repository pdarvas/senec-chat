import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContactListContainer = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
`;


const contactsMock = [
  {
    name: 'Usuario 1',
    photo: 'https://media.licdn.com/dms/image/C560BAQGkTSO7NpWTdg/company-logo_200_200/0?e=2159024400&v=beta&t=-m8lTrxptwTCLqdXf-HwthWYf1rAyjbsWxDRD04qddg',
    key: '0'
  },
  {
    name: 'Usuario 2',
    photo: 'https://media.licdn.com/dms/image/C560BAQGkTSO7NpWTdg/company-logo_200_200/0?e=2159024400&v=beta&t=-m8lTrxptwTCLqdXf-HwthWYf1rAyjbsWxDRD04qddg',
    key: '1'
  },
  {
    name: 'Usuario 3',
    photo: 'https://media.licdn.com/dms/image/C560BAQGkTSO7NpWTdg/company-logo_200_200/0?e=2159024400&v=beta&t=-m8lTrxptwTCLqdXf-HwthWYf1rAyjbsWxDRD04qddg',
    key: '2'
  },
  {
    name: 'Usuario 4',
    photo: 'https://media.licdn.com/dms/image/C560BAQGkTSO7NpWTdg/company-logo_200_200/0?e=2159024400&v=beta&t=-m8lTrxptwTCLqdXf-HwthWYf1rAyjbsWxDRD04qddg',
    key: '3'
  },
  {
    name: 'Usuario 5',
    photo: 'https://media.licdn.com/dms/image/C560BAQGkTSO7NpWTdg/company-logo_200_200/0?e=2159024400&v=beta&t=-m8lTrxptwTCLqdXf-HwthWYf1rAyjbsWxDRD04qddg',
    key: '4'
  },
  {
    name: 'Usuario 6',
    photo: 'https://media.licdn.com/dms/image/C560BAQGkTSO7NpWTdg/company-logo_200_200/0?e=2159024400&v=beta&t=-m8lTrxptwTCLqdXf-HwthWYf1rAyjbsWxDRD04qddg',
    key: '5'
  },
  {
    name: 'Usuario 7',
    photo: 'https://media.licdn.com/dms/image/C560BAQGkTSO7NpWTdg/company-logo_200_200/0?e=2159024400&v=beta&t=-m8lTrxptwTCLqdXf-HwthWYf1rAyjbsWxDRD04qddg',
    key: '6'
  },
  {
    name: 'Usuario 8',
    photo: 'https://media.licdn.com/dms/image/C560BAQGkTSO7NpWTdg/company-logo_200_200/0?e=2159024400&v=beta&t=-m8lTrxptwTCLqdXf-HwthWYf1rAyjbsWxDRD04qddg',
    key: '7'
  },
];

export class ContactList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: contactsMock
    };
  }

  componentDidMount() {
    this.fetchContacts();
  }

  parseContacts = (contacts) => {
    // Essa funcao será chamada pelo firebase quando o "fetch" dos contatos acabar
    // Ela receberá um array de contatos, e deverá coloca-lo no estado "contatos". Sugestao: filtrar a lista para remover seu próprio contato.
    const {
      uid
    } = this.props;
  }

  fetchContacts = () => {
    // Essa funcao deve buscar a lista de usuários como um array, e passar como tratamento a funcao parseContacts.
    const {
      db
    } = this.props;


  };

  render() {
    const {
      uid
    } = this.props;

    const {
      contacts
    } = this.state;

    return (
      <ContactListContainer>
        {/* Esse componente deve conter uma CustomBar contendo o nome do Aplicativo e uma lista de contatos. */}
        {/* A referência para a lista encontra-se no link https://material-ui.com/demos/lists/ */}
      </ContactListContainer>
    );
  }
}

ContactList.propTypes = {
  db: PropTypes.any,
  uid: PropTypes.string,
  selectContact: PropTypes.func
};

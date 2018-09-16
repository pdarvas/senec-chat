import React, { Component } from 'react';
import {AppConfig} from "./Components/AppConfig/AppConfig";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedContact: {},
      uid: undefined
    };
  }

  selectContact = (contact) => {
    // Essa função recebe um contato e deve coloca-lo no estado "selectedContact".
  };

  render() {
    const {
      selectedContact,
      uid
    } = this.state;

    const {
      auth,
      db
    } = this.props;

    return (
      <AppConfig
        auth={auth}
        db={db}
        setUid={(uid) => this.setState({uid})}
      >
        {/*Esse componente deve conter os componentes ContactList e Chat.*/}

      </AppConfig>
    );
  }
}

export default App;

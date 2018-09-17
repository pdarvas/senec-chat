import React, { Component } from 'react';
import {AppConfig} from "./Components/AppConfig/AppConfig";
import Grid from '@material-ui/core/Grid';
import {ContactList} from "./Components/ContactList/ContactList";
import {Chat} from "./Components/Chat/Chat";

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
        {/* Esse componente deve conter os componentes ContactList e Chat, dentro de um Grid */}
        {/* https://material-ui.com/layout/grid/ */}

        <Grid container>
          <Grid item xs={3}>
            <ContactList/>
          </Grid>
          <Grid item xs={9}>
            <Chat/>
          </Grid>
        </Grid>

      </AppConfig>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {AppConfig} from "./Components/AppConfig/AppConfig";
import Grid from '@material-ui/core/Grid';
import {ContactList} from "./Components/ContactList/ContactList";
import {Chat} from "./Components/Chat/Chat";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedContact: {}
    }
  }

  selectContact(contact) {
    this.setState({selectedContact: contact})
  }

  render() {
    const {selectedContact} = this.state;

    const {
      auth,
      db
    } = this.props;

    return (
      <AppConfig auth={auth} db={db}>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <ContactList
              selectContact={(contact) => this.selectContact(contact)}
              selectedContact={selectedContact}
              uid={auth.currentUser && auth.currentUser.uid}
              db={db}
            />
          </Grid>
          <Grid item xs={9}>
            <Chat selectedContact={selectedContact}/>
          </Grid>
        </Grid>
      </AppConfig>
    );
  }
}

export default App;

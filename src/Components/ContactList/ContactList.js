import React, { Component } from 'react';
import styled from 'styled-components';
import {CustomBar} from "../CustomBar";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const ContactListContainer = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
`;

export class ContactList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: []
    }
  }

  componentDidMount() {
    const {
      db
    } = this.props;

    db.bindToState(`users`, {
      context: this,
      state: 'contacts',
      asArray: true
    })

  }

  render() {
    const { uid } = this.props;
    return (
      <ContactListContainer>
        <CustomBar text={'Contatos'}/>
        <List>
        {this.state.contacts.filter(contact => contact.key !== uid).map(contact => (
          <ListItem
            button
            onClick={() => this.props.selectContact(contact)}
          >
            <Avatar src={contact.photo} />
            <ListItemText primary={contact.name} />
          </ListItem>
        ))
        }
        </List>
      </ContactListContainer>
    );
  }
}



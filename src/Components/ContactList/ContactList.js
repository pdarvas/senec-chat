import React, { Component } from 'react';
import styled from 'styled-components';
import {CustomBar} from "../CustomBar";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  border: solid 2px red;
  box-sizing: border-box;
`;

const contacts = [
  {
    name: 'Pedro Darvas',
    avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Avatar_Aang.png/220px-Avatar_Aang.png'
  },
  {
    name: 'Joao Golias',
    avatar: 'https://res.cloudinary.com/teepublic/image/private/s--IqzQs_jj--/t_Preview/b_rgb:484849,c_limit,f_jpg,h_630,q_90,w_630/v1507163967/production/designs/1949854_1.jpg'
  },
  {
    name: 'Rebecca Arantes',
    avatar: 'https://vignette.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest?cb=20120311133235'
  },
  {
    name: 'Gabriel Minossi',
    avatar: 'https://lh3.googleusercontent.com/Vrih2E_NJQGj-vEQiZYupsmBIvQ71Njg7WBVgf5AKvmb5XSMB4if7yICeMJSxV9wJR2t-fYsaGNtdEc1'
  },
];

export class ContactList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: {},
      contacts: []
    }
  }


  componentDidUpdate() {
    const {
      uid,
      db
    } = this.props;

    db.bindToState(`users`, {
      context: this,
      state: 'contacts',
      asArray: 'true'
    })

  }

  selectContact(contact) {
    this.props.selectContact(contact)
  }

  render() {
    return (
      <Wrapper>
        <CustomBar text={'Contatos'}/>
        <List>
        {this.state.contacts.map(contact => (
          <ListItem
            button
            onClick={() => this.selectContact(contact)}
            selected={this.props.selectedContact.name === contact.name}
          >
            <Avatar src={contact.user} />
            <ListItemText primary={contact.name} />
          </ListItem>
        ))
        }
        </List>
      </Wrapper>
    );
  }
}



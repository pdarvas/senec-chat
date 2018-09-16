import React, { Component } from 'react';
import {LoginDialog} from "./LoginDialog";
import {SignInDialog} from "./SignInDialog";

export class Authorizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: false,
      signin: false
    }
  }

  componentWillMount() {
    this.props.auth.onAuthStateChanged(user => {
      if (user) {
        if (!user.displayName) {
          this.setState({login: false, signin: true});
        }
        else {
          this.setState({login: false});
        }
        this.props.setUid(user.uid);
      } else {
        this.setState({login: true});
      }
    })
  }

  login = (email, password) => {
    const { auth } = this.props;

    auth.signInAndRetrieveDataWithEmailAndPassword(email, password)
      .catch(err => {
        console.log('err: ', err);
        if (err.code === 'auth/user-not-found') {
          this.signin(email, password);
        } else {
          this.setState({error: err.message});
        }
      })
  };

  signin = (email, password) => {
    const { auth } = this.props;

    auth.createUserAndRetrieveDataWithEmailAndPassword(email, password)
      .catch(err => {
        console.log('Erro', err);
      })
  };

  setUserInfo = (name, photo) => {
    const { db, auth } = this.props;
    auth.currentUser.updateProfile({displayName: name, photoURL: photo})
      .then(() => {
        db.post(`users/${auth.currentUser.uid}`, {
          data: {
            name,
            photo
          },
          then: () => {
            this.setState({signin: false})
          }
        })
      })
  };

  render() {
    const {login, signin} = this.state;
    return (
      <div>
        <LoginDialog open={login} login={this.login}/>
        <SignInDialog open={signin} newUser={this.setUserInfo}/>
        {this.props.auth.currentUser && this.props.children}
      </div>
    );
  }
}

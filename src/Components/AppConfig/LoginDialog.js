import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export class LoginDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleLogin = () => {
    const {email, password} = this.state;

    if (email && password) {
      this.props.login(email, password);
    }
  };

  handleSignIn = () => {
    const {email, password} = this.state;

    if (email && password) {
      this.props.signin(email, password);
    }
  };

  render() {
    const {email, password} = this.state;

    return (
      <Dialog
        open={this.props.open}
        disableBackdropClick
      >
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Coloque seu e-mail (não precisa ser de verdade) e senha ou clique em cadastrar para criar um novo usuário com esse e-mail e senha!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="E-mail"
            type="email"
            fullWidth
            value={email}
            onChange={(event) => this.setState({email: event.target.value})}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Senha"
            type="password"
            fullWidth
            value={password}
            onChange={(event) => this.setState({password: event.target.value})}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleLogin} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
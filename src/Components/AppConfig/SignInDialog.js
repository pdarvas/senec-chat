import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export class SignInDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      photo: ''
    }
  }

  handleSave = () => {
    const {name, photo} = this.state;

    if (name) {
      this.props.newUser(name, photo);
    }
  };

  render() {
    const {name, photo} = this.state;

    return (
      <Dialog
        open={this.props.open}
        disableBackdropClick
      >
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Coloque seu nome e o link de uma foto para te identificar!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Nome"
            fullWidth
            value={name}
            onChange={(event) => this.setState({name: event.target.value})}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Foto"
            fullWidth
            value={photo}
            onChange={(event) => this.setState({photo: event.target.value})}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleSave} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
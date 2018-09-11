import React, { Component } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import Grid from "@material-ui/core/Grid/Grid";


const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  background-color: #f1f1f1;
`;

const CustomTextField = styled(TextField)`
  margin: 3px 10px;
  div {
    font-size: 25px;
  }
`;

export class MessageBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }
  }

  sendMessage(e){
    if (e) e.preventDefault();

    this.props.sendMessage(this.state.text);

    this.setState({text: ''})
  }

  render() {
    return (
      <Wrapper>
        <form onSubmit={(e) => this.sendMessage(e)}>
          <Grid container spacing={0}>
            <Grid item xs={11}>
              <CustomTextField
                placeholder="Escreva sua mensagem"
                fullWidth
                margin="normal"
                value={this.state.text}
                onChange={(event) => this.setState({text: event.target.value})}
              />
            </Grid>
            <Grid item xs={1}>
              <IconButton onClick={() => this.sendMessage()}>
                <SendIcon/>
              </IconButton>
            </Grid>
          </Grid>
        </form>
      </Wrapper>
    );
  }
}



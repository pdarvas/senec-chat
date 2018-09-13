import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components'

const CustomAvatar = styled(Avatar)`
  margin-right: 10px;
`;

export function CustomBar(props) {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        {props.photo && <CustomAvatar src={props.photo} />}
        <Typography variant="title" color="inherit">
          {props.text}
        </Typography>
      </Toolbar>
    </AppBar>
  );

}



import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const CustomAvatar = styled(Avatar)`
  margin-right: 10px;
`;

export function CustomBar(props) {
  // Esse componente deve retornar uma AppBar customizada com um Avatar.
  // A referência para a AppBar encontra-se no link https://material-ui.com/demos/app-bar/
  // O Avatar utilizado deve ser o CustomAvatar acima, que já possui a margem necessária.
  return (
    <AppBar position="static" color="default">
        <Toolbar>
          {props.photo && <CustomAvatar src={props.photo}/>}
          <Typography variant="title" color="inherit">
            {props.text}
          </Typography>
        </Toolbar>
      </AppBar>
  );
}


CustomBar.propTypes = {
  text: PropTypes.string,
  photo: PropTypes.string
};
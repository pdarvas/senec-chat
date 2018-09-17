import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const BalloonTip = styled.div`
  width: 0;
  height: 0;
  border-top: 15px solid ${({isMine}) => isMine ? '#7FFFBE' : '#91c7ff'};
  border-left:15px solid transparent;
  border-right: 15px solid transparent;
  position: absolute;
  float: inherit;
  ${({isMine}) => isMine ? 'right' : 'left'}: -15px;
`;

const Balloon = styled.div`
  float: ${({isMine}) => isMine ? 'right' : 'left'};
  position: relative;
  background-color: ${({isMine}) => isMine ? '#7FFFBE' : '#91c7ff'};
  min-height: 40px;
  width: 50%;
  clear: both;
  margin: 10px 20px 10px 20px;
  border-radius: 5px;
`;

const CustomText = styled.p`
  margin: 15px;
`;

export function MessageBalloon(props) {
  return (
    <Balloon isMine={props.isMine}>
      <BalloonTip isMine={props.isMine}/>
      <CustomText>{props.message}</CustomText>
    </Balloon>
  );

}

MessageBalloon.propTypes = {
  isMine: PropTypes.boolean,
  message: PropTypes.string
};

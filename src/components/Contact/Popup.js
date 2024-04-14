import React from 'react';
import styled from 'styled-components';

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Message = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color:black;
`;

const CloseButton = styled.button`
  background-color: #00ffaa;
  color: #000;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

const Popup = ({ message, onClose }) => {
  return (
    <PopupContainer>
      <PopupCard>
        <Message>{message}</Message>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </PopupCard>
    </PopupContainer>
  );
};

export default Popup;

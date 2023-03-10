
import styled from 'styled-components';

export const ModalOverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContentStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  width: 100%;
  max-width: 750px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

export const ModalHeaderStyled = styled.div`
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const ModalBodyStyled = styled.div`
  padding: 20px;
`;

export const ModalFooterStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
`;

export const ButtonStyled = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  background-color: teal;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #008080;
  }
`;



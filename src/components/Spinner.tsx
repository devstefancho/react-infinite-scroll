import { FC } from 'react';
import styled, { keyframes } from 'styled-components';

const Spinner: FC = () => {
  return (
    <>
      <StyledOverlay></StyledOverlay>
      <StyledSpinnerContainer>
        <StyledSpinner></StyledSpinner>
      </StyledSpinnerContainer>
    </>
  );
};

const spin = keyframes`
  from {
    transform: rotate(0deg)
  } to {
    transform: rotate(360deg)
  }
`;

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0000002b;
  width: 100vw;
  height: 100vh;
`;

const StyledSpinnerContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledSpinner = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid lightblue;
  width: 50px;
  height: 50px;
  animation: ${spin} 2s linear infinite;
  -webkit-animation: ${spin} 2s linear infinite;
`;

export default Spinner;

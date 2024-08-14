import React from 'react';
import { 
    Onboarding2styled,
    Onboarding2Text,
    ButtonContainer,
    Buttonstyle
 } from './Onboarding2.style';

const Onboarding2 = () => {
  return (
    <Onboarding2styled>
      <img src='/images/smiling woman on background with communication  icons.png' alt=''/>
      <Onboarding2Text>
        <h2>Stay informed with Real-Time Updates</h2>
        <p>Receive instant notifications about the status of your vehicle during the repair process.</p>
        <ButtonContainer>
            <Buttonstyle to="/onboarding6">Skip</Buttonstyle>
            <Buttonstyle to="/onboarding3">Next</Buttonstyle>
        </ButtonContainer>
      </Onboarding2Text>
    </Onboarding2styled>
  );
}

export default Onboarding2;

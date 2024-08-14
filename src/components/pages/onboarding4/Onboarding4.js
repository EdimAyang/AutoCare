import {
     Onboarding4style,
     Onboarding4Text,
     Linkstyle,
     ButtonContainer
     } from "./Onboarding4.style"

const Onboarding4 = () => {
  return (
    <Onboarding4style>
      <img src="/images/Biometric security on mobile phone.png" alt=""/>
      <Onboarding4Text>
        <h2>Secure and convenient payments</h2>
        <p>Make payments easily with bank transfers or in-app options and get instant confirmations.</p>
  <ButtonContainer>
   <Linkstyle to="/onboarding6">Skip</Linkstyle>
    <Linkstyle to="/onboarding5">Next</Linkstyle>
  </ButtonContainer>
</Onboarding4Text>
    </Onboarding4style>
  )
}

export default Onboarding4


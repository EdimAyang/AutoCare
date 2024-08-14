import {
    Onboarding5style,
    Onboarding5Text,
    Linkstyle,
    ButtonContainer
    } from "./Onboarding5.style"

const Onboarding5 = () => {
 return (
   <Onboarding5style>
     <img src="/images/flying delivery robot holding mail box.png" alt=""/>
     <Onboarding5Text>
       <h2>Convenient pick-up or Delivery</h2>
       <p>Choose to pick up your vehicle or have it delivered to your door step once the repairs are complete.</p>
 <ButtonContainer>
  <Linkstyle to="/onboarding6">Skip</Linkstyle>
   <Linkstyle to="/onboarding6">Next</Linkstyle>
 </ButtonContainer>
</Onboarding5Text>
   </Onboarding5style>
 )
}

export default Onboarding5
import {
    Onboarding6style,
    Onboarding6Text,
    Linkstyle,
    ButtonContainer
    } from "./Onboarding6.style"

const Onboarding5 = () => {
 return (
   <Onboarding6style>
    <img src="/images/man crossing the finish line with the ribbon on his chest.png" alt=""/>
     <Onboarding6Text>
       <h2>Convenient pick-up or Delivery</h2>
       <p>Choose to pick up your vehicle or have it 
delivered to your door step once the repairs are 
complete.</p>
 <ButtonContainer>
   <Linkstyle to="/onboarding1">completed</Linkstyle>
 </ButtonContainer>
</Onboarding6Text>
   </Onboarding6style>
 )
}

export default Onboarding5
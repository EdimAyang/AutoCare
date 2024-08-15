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
       <h2>Ready to Experience Hassle-Free Repairs?</h2>
       <p>Sign up now and enjoy a seamless vehicle maintenance experience.</p>
 <ButtonContainer>
   <Linkstyle to="/onboarding1">completed</Linkstyle>
 </ButtonContainer>
</Onboarding6Text>
   </Onboarding6style>
 )
}

export default Onboarding5
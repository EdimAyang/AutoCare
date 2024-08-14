import { 
  Onboarding3style ,
  Onboarding3Text,
  ButtonContainer,
  Linkstyle,
} from "./Onboarding3.style";

const Onboarding3 = () => {
  return (
    <Onboarding3style>
      <img src="/images/smartphone screen with video content.png" alt="" />
      <Onboarding3Text>
        <h2>Report issues Effortlessly</h2>
        <p>Describe vehicle problems and upload photos or videos directly from your phone.</p> 
        <ButtonContainer>
         <Linkstyle to="/onboarding6">Skip</Linkstyle>
          <Linkstyle to="/onboarding4">Next</Linkstyle>
        </ButtonContainer>
      </Onboarding3Text>
    </Onboarding3style>
  );
}

export default Onboarding3;

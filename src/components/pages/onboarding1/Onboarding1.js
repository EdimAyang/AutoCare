import { Onboarding1Styled } from "../onboarding1/Onboarding1.style";
import { ImageContainer } from "../onboarding1/Onboarding1.style";
import { TextContainer } from "../onboarding1/Onboarding1.style";
import { Linkstyle ,ButtonContainer} from "../onboarding1/Onboarding1.style";
import { Container } from "../../Container";

const Onboarding1 = () => {
  return (
    <Onboarding1Styled>
        <ImageContainer />
        <TextContainer>
            <Container>
                <h2>welcome to Autocare workshop</h2>
                <p>Your trusted partner for seemless vehicle repair and  maintenance.</p>
                <ButtonContainer>
                  <Linkstyle to="/onboarding2">Get started</Linkstyle>
                </ButtonContainer>
            </Container>
        </TextContainer>
    </Onboarding1Styled>
  );
}

export default Onboarding1;

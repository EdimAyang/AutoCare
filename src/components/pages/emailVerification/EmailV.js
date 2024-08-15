import { StyleEmailV } from "./EmailV.style";
import { Container } from "../../Container";
import { TextWrapper } from "./EmailV.style";
import { Link } from "react-router-dom";


const EmailV = () => {
    const email= "jacksonprince590@gmail.com";
    const middleNum= email.slice(5);
    const maskNum=middleNum.padStart(email.length, "*").slice()
    
  return (
    <StyleEmailV>
      <Container>
        <img src='/images/Ellipse 7.png' alt=''/>
      </Container>
        <TextWrapper>
            <h2>Email Verification</h2>
            <p>We have sent a verification link to</p>
            {maskNum}.
            <p>Click on the link to complete registration</p>
            <Link to="/emailVerification"><button>Continue</button></Link>
            <p>Verify through <span>Phone Number OTP</span></p>
        </TextWrapper>
    </StyleEmailV>
  );
}

export default EmailV;

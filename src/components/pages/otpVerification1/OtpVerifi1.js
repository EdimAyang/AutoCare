import { StyleOptV1 ,TextWrapper,InputsWrapper} from "./OtpVerifi.style1";
import { Container } from "../../Container";
import { Link } from "react-router-dom";

const OtpVerifi1 = () => {
    const number= "09136794977";
    const middleNum= number.slice(4);
    const maskNum=middleNum.padStart(number.length, "*").slice()
        
  return (
    <StyleOptV1>
        <Link>
        <i className="fa-solid fa-arrow-left"></i>
        </Link>
        <Container>
            <img src='/images/Ellipse 7.png' alt=''/>
        </Container>

        <TextWrapper>
            <h2>OTP Verification</h2>
            <p>Please enter the verification pin we sent to this number {maskNum}       </p>
        <InputsWrapper>
            <input type="number"/>
            <input type="number"/>
            <input type="number"/>
            <input type="number"/>
        </InputsWrapper>
            <button>Continue</button>
            <div>
                <p>Change phone number</p>
                <span>Didn't receive OTP? <Link>Resend</Link></span>
            </div>
        </TextWrapper>
    </StyleOptV1>
  );
}

export default OtpVerifi1;

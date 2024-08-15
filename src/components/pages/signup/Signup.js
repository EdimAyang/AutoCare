import { StyleSignup } from "./Signup.style";
import { Container } from "../../Container";
import { StyleForm } from "./Signup.style";
import { PersonalInfo } from "./Signup.style";
import { VehicleInfo } from "./Signup.style";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <StyleSignup>
      <Container>
        <img src='/images/Ellipse 7.png' alt=''/>
      </Container>
        <h2>Create Account</h2>

        
        <StyleForm>
        <div>
            <PersonalInfo>
                <label>Full name</label>
                <input type="text" name="name"  />

                <label>Email Address</label>
                <input type="email" name="email"  />

                <label>Password</label>
                <input type="password" name=""  />
            </PersonalInfo>
            <VehicleInfo>
                <label>Phone Number</label>
                <input type="number" name="number"  />

                <label>Vehicle Reg Number</label>
                <input type="number" name="number"  />

                <label>Vehicle Model</label>
                <input type="text" name="text"/>
            </VehicleInfo>
            </div>
            <button type="submit">Create Account</button>
            <p>Already have an account ? <span><Link to="/login">LOG IN</Link></span></p>
        </StyleForm>

    </StyleSignup>
  );
}

export default Signup;

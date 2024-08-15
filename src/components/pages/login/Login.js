import { Loginstyle } from "./Login.style";
import { LoginForm} from "./Login.style";
import { Link } from "react-router-dom";
import { PersonalInfo } from "../signup/Signup.style";
import { Container } from "../../Container";

const Login = () => {
  return (
    <Loginstyle>
        <Container>
            <img  src='/images/Ellipse 7.png' alt=''/>
        </Container>
        <h2>Log in</h2>
      <LoginForm>
        <PersonalInfo>
            <label>Email Address</label>
            <input type="email" name="email"  />

            <label>Password</label>
            <input type="password" name=""  />
        </PersonalInfo>
        <button type="submit">Log In</button>
        <p>Don't have an account ? <span><Link to="/signup">Create New Account</Link></span></p>
      </LoginForm>
    </Loginstyle>
  );
}

export default Login;

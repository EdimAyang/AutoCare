import styled from "styled-components";
import { StyleForm} from "../signup/Signup.style";

export const Loginstyle=styled.div`
    padding:30px;
    height:100vh;

    h2{
    margin:20px auto;
    } 
`
export const  LoginForm=styled(StyleForm)`
    width:30%;
    button{
        width:100%;
    }

    &>div{
        input{
           margin:0;
        }
    }
`

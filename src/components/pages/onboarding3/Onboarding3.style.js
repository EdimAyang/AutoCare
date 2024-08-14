import styled from "styled-components";
import { Link } from "react-router-dom";

export const Onboarding3style = styled.div`
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#000;
img{
    width:50%;
    transform:scale(0.5);
    background-color:#000;
}
`
export const Onboarding3Text =styled.div`
    width:30%;
    text-align:center;
    padding:5px;
    background-color:#000;

    h2{
        background-color:#000;
        color:#fff;
    }

    p{
        font-weight:400;
        margin-top:20px;
        line-height:2rem;
        color:#fff;
        background-color:#000;
    }
`
export const ButtonContainer=styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
    margin:15px auto;
    background-color:#000;
`
export const Linkstyle=styled(Link)`
    padding:10px;
    width:45%;
    padding:10px;
    border-radius:5px;
    font-weight:600;
    background-color:#000;
    color:#fff;
    border:1px solid #fff;
    cursor: pointer;
    text-decoration:none;

    a{
        text-decoration:none;
        
    }

    &:focus{
        color:#000;
        background-color:#fff;
    }
`

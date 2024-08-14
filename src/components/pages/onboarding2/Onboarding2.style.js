import styled from "styled-components";
import { Link } from "react-router-dom";

export const Onboarding2styled =styled.div`
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;

    img{
        width:50%;
        transform:scale(0.5)
    }

`
export const Onboarding2Text =styled.div`
    width:30%;
    text-align:center;
    padding:5px;

    p{
        font-weight:400;
        margin-top:20px;
        line-height:2rem;
    }
`
export const ButtonContainer=styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
    margin:15px auto;
`
export const Buttonstyle=styled(Link)`
    padding:10px;
    width:45%;
    padding:10px;
    border-radius:5px;
    font-weight:600;
    background-color:#fff;
    color:#000;
    border:1px solid black;
    cursor: pointer;
    text-decoration:none;

    &:focus{
        color:#fff;
        background-color:#000;
    }
`

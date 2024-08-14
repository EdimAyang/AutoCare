import styled from "styled-components";
import { Link } from "react-router-dom";

export const Onboarding6style=styled.div`
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#fff;
img{
    width:50%;
    transform:scale(0.5);
    background-color:#fff;
}
`
export const Onboarding6Text =styled.div`
    width:30%;
    text-align:center;
    padding:5px;
    background-color:#fff;

    h2{
        background-color:#fff;
        color:#000;
    }

    p{
        font-weight:400;
        margin-top:20px;
        line-height:2rem;
        color:#000;
        background-color:#fff;
    }
`
export const ButtonContainer=styled.div`
    width:100%;
    margin:15px auto;
    background-color:#fff;
    display:flex;
    justify-content:center;

`
export const Linkstyle=styled(Link)`
    width:60%;
    padding:10px;
    border-radius:5px;
    font-weight:600;
    background-color:#fff;
    color:#000;
    border:1px solid #000;
    cursor: pointer;
    text-decoration:none;

    a{
        text-decoration:none;
        
    }

    &:focus{
        color:#fff;
        background-color:#000;
    }
    `
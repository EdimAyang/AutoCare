
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Onboarding1Styled=styled.div`
    height:100vh;
    display:flex;
    align-items:center;
    gap:5px;

    `
export const ImageContainer =styled.div`
    width:50%;
    height:100%;
    background-image:url("/images/Rectangle 13.png");
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;

`
export const TextContainer =styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;

    & >div{
        text-align:center;
    }

    p{
        font-weight:400;
        margin:20px;
    }
`
export const ButtonContainer=styled.div`
width:100%;
margin:15px auto;
background-color:#fff;
display:flex;
justify-content:center;

`

export const Linkstyle =styled(Link)`
    width:35%;
    padding:10px;
    border-radius:5px;
    font-weight:600;
    background-color:#fff;
    color:#000;
    border:1px solid black;
    text-decoration:none;
    cursor: pointer;
    text-decoration:none;


    &:focus{
        background-color:#000;
        color:#fff;
    }
`

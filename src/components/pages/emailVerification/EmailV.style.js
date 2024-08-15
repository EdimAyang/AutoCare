import styled from "styled-components";

export const StyleEmailV=styled.div`
    height:100vh;
    padding:30px;

    h2{
        margin:20px;
    }
    p{
        margin:10px;
    }
    &>div{
        text-align:center;
        position:relative;
        top:15%;
    }
`
export const TextWrapper=styled.div`
    width:40%;
    margin:20px auto;

    button{
    width:60%;
    margin-top:50px ;
    margin-bottom:10px;
    padding:15px;
    border-radius:5px;
    border:none;
    background-color:#000;
    color:#fff;
    font-weight:700;
    }

    span{
        font-weight:600;
        color:red;
    }

    p{

    }
`
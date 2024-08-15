import styled from "styled-components";

export const StyleOptV1=styled.div`
    height:100vh;
    padding:30px;

    &>div{
    text-align:center;
    position:relative;
    top:15%;
}
`

export const TextWrapper=styled.div`
    width:40%;
    margin:20px auto;
    padding:10px;

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

    p{
        width:60%;
        margin:10px auto;
        line-height:2em;
    }

    a{
        font-weight:600;
        color:red;
        text-decoration:none;
    }

    &>div{
        display:flex;
        justify-content:center;
        justify-content:space-around;
        align-items:center;
        gap:0px;
        padding:0px 10px;
        margin-top:15px;
        
        p{
            color:red;
        }
        span{
            width:50%;
        }
    }
`

export const InputsWrapper=styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
    justify-content:space-between;
    width:70%;
    margin:0 auto;

    input{
    height:60px;
    width:70px;
    border-radius:20%;
    outline:none;
    border:1px solid;
    padding:10px;
    text-align:center;
    font-size:20px;
    font-weight:bold;
    }

`

import styled from "styled-components";

export const StyleSignup=styled.div`
    padding:30px;
    height:100vh;
    h2{
        margin:10px auto;
    }
`

export const StyleForm=styled.form`
    display:flex;
    justify-content:center;
    align-items:center;
    justify-content:space-between;
    flex-direction:column;
    padding:10px;
    width:50%;
    margin:10px auto;
    gap:15px;
    
   button{
        width:60%;
        margin:20px auto;
        padding:15px;
        border-radius:5px;
        border:none;
        background-color:#000;
        color:#fff;
    }
    a{
        text-decoration:none;
        color:red;
        font-weight:600;
    }
    &>div{
        width:100%;
        display:flex;
        gap:18px;
    }
`

export const PersonalInfo=styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    
    input{
        border:1px solid;
        outline:none;
        border-radius:5px;
        height:50px;
        padding:5px;
        font-size:18px;
        margin:15px 0px ;
    }
    label{
        
    }

`
export const VehicleInfo=styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    position: relative;

    input{
    border:1px solid;
    outline:none;
    border-radius:5px;
    height:50px;
    padding:5px;
    font-size:18px;
    margin:15px 0px ;
    
}
`
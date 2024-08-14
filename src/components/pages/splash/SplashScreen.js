import React from 'react';
import { Splash } from '../splash/Splash.style';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const SplashScreen = () => {
  const navigate=useNavigate();
  useEffect(()=>{
    setTimeout(()=>{
      navigate("/onboarding1")
    },4000)
  },[])
  return (
    <Splash>
      <img src='/images/Ellipse 7.png' alt=''/>
    </Splash>
  );
}

export default SplashScreen;

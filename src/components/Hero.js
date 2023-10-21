import React from 'react';
import "./HeroStyles.css";

function Hero(props) {
  return (<> 
    <div className={props.cName}>
      <img alt='HeroImg' src={props.heroImg} />

      <div>
        <h1>Your Journey Your Story</h1>
        <p>Choose Your Favourite Destination. </p>
        <a href='/'>
          Travel Plan
        </a>
      </div>
    </div>
    </>
   
  )
}

export default Hero;

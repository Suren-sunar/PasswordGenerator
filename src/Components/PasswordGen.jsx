import React from 'react';
import './PasswordGen.css'; // Import your CSS file


const PasswordGen = () => {
  return (
    <>
    <div className='container'>
    <h1>Generate a Strong Password !</h1>
    <div className='inp'>
        <input type="text" name="" id="inp"  />
     
       
    </div>
    
    <div className="password-generator-container">
      <div className="password-generator-input">
        <label>
          Password Length:
          <input type="number" id='size'min={8} max={100}/>
        </label>
      </div>

      <div className="password-generator-option">
        <label>
        Include  UpperCase :
          <input type="checkbox" />
        </label>
      </div>

      <div className="password-generator-option">
        <label>
        Include  LowerCase :
          <input type="checkbox" />
        </label>
      </div>

      <div className="password-generator-option">
        <label>
        Include  Number :
          <input type="checkbox" />
        </label>
      </div>

      <div className="password-generator-option">
        <label>
        Include  Symbol :
          <input type="checkbox" />
        </label>
      </div>

      <div className="password-generator-button">
        <button className='generate' type="Submit">Generate Random Password</button>
      </div>
    </div>
    </div>
    </>
  );
};

export default PasswordGen;

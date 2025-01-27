import React, { useState } from "react";
import "./PasswordGen.css";

const PasswordGen = () => {
  const [passwordlength, setpasswordlength] = useState(8);
  const [includeuppercase, setincludeuppercase] = useState(true);
  const [includelowercase, setincludelowercase] = useState(true);
  const [includenumber, setincludenumber] = useState(true);
  const [includesymbol, setincludesymbol] = useState(true);
  const [generatedPassword, setgeneratedpassword] = useState("");

  const generatePassword = (
    passwordlength,
    includeuppercase,
    includelowercase,
    includenumbers,
    includesymbols
  ) => {
    let charset = "";

    if (includeuppercase) {
      charset = charset + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (includelowercase) {
      charset = charset + "abcdefghijklmnopqrstuvwxyz";
    }

    if (includenumbers) {
      charset = charset + "0123456789";
    }

    if (includesymbols) {
      charset = charset + "!@#$%^&*()_-+=<>?";
    }

    let password = "";
    for (let i = 0; i < passwordlength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password = password + charset.charAt(randomIndex);
    }
    return password;
  };

  const handlepasswordgenerator = () => {
    const password = generatePassword(
      passwordlength,
      includeuppercase,
      includelowercase,
      includenumber,
      includesymbol
    );
    setgeneratedpassword(password);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(generatedPassword);
  };

  return (
    <>
      <div className="container">
        <h1>Generate a Strong Password !</h1>
        <div className="inp">
          <input value={generatedPassword} type="text" name="" id="inp" />
        </div>
        <button onClick={handleCopyToClipboard} className="copy-to-clipboard">
          copy{" "}
        </button>
        <div className="password-generator-container">
          <div className="password-generator-input">
            <label>
              Password Length:
              <input
                defaultValue={passwordlength}
                type="number"
                id="size"
                min={8}
                max={100}
                onChange={(e) => setpasswordlength(e.target.value)}
              />
            </label>
          </div>

          <div className="password-generator-option">
            <label>
              Include UpperCase :
              <input
                checked={includeuppercase}
                onChange={(e) => setincludeuppercase(e.target.checked)}
                type="checkbox"
              />
            </label>
          </div>

          <div className="password-generator-option">
            <label>
              Include LowerCase :
              <input
                checked={includelowercase}
                onChange={(e) => setincludelowercase(e.target.checked)}
                type="checkbox"
              />
            </label>
          </div>

          <div className="password-generator-option">
            <label>
              Include Number :
              <input
                checked={includenumber}
                onChange={(e) => setincludenumber(e.target.checked)}
                type="checkbox"
              />
            </label>
          </div>

          <div className="password-generator-option">
            <label>
              Include Symbol :
              <input
                checked={includesymbol}
                onChange={(e) => setincludesymbol(e.target.checked)}
                type="checkbox"
              />
            </label>
          </div>

          <div className="password-generator-button">
            <button
              onClick={handlepasswordgenerator}
              className="generate"
              type="Submit"
            >
              Generate Random Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordGen;

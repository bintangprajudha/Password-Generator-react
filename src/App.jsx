import { useState } from "react";
import "./App.css";
import CheckEl from "./checkElm";
import RangeEl from "./rangeEl";
import Display from "./display";
import Generate from "./generate";

function App() {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = "!@#$%^&*()_+[]{}|;:,.<>?";
  const [passwordEl, setPasswordEl] = useState("");
  const [rangeVal, setRangeVal] = useState(13);
  const [checkLower, setCheckLower] = useState(false);
  const [checkUpper, setcheckUpper] = useState(false);
  const [checkNumber, setCheckNumber] = useState(false);
  const [checkSymbol, setCheckSymbol] = useState(false);

  function getRandomCharacter(characters) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  }

  function generate() {
    let availableCharacters = "";

    if (checkLower) availableCharacters += lower;
    if (checkUpper) availableCharacters += upper;
    if (checkNumber) availableCharacters += number;
    if (checkSymbol) availableCharacters += symbol;

    if (availableCharacters.length === 0) {
      alert("Pilih setidaknya satu opsi karakter!");
      return;
    }

    let generatedPassword = "";

    for (let i = 0; i < rangeVal; i++) {
      generatedPassword += getRandomCharacter(availableCharacters);
    }

    setPasswordEl(generatedPassword);
  }

  return (
    <div className="card mx-auto bg-dark container-md mt-5">
      <div className="text-center">
        <div class="card-title pt-4 pb-2">Random Password Generator</div>
        <Display value={passwordEl} />
      </div>

      <RangeEl value={rangeVal} setRangeVal={setRangeVal} />

      <CheckEl
        value="Lowercase(a-z)"
        check={checkLower}
        change={setCheckLower}
      />
      <CheckEl
        value="Uppercase(A-Z)"
        check={checkUpper}
        change={setcheckUpper}
      />
      <CheckEl
        value="Numbers(0-9)"
        check={checkNumber}
        change={setCheckNumber}
      />
      <CheckEl
        value="Symbols(@-*)"
        check={checkSymbol}
        change={setCheckSymbol}
      />

      <Generate generate={generate} />
    </div>
  );
}

export default App;

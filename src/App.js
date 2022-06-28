import Die from './components/Die';
import React, { useState } from 'react';

function App() {
  function allNewDice() {
    const numArray = [];
    for (let i = 0; i < 10; i++) {
      numArray.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
      });
    }
    return numArray;
  }

  const [dice, setDice] = useState(allNewDice());

  // let objTest = {
  //   value: 'randomnumber',
  //   isHeld: false,
  // };
  // console.log(objTest);

  const diceNumber = dice.map((die) => {
    return <Die value={die.value} />;
  });

  function rollingDice() {
    setDice(allNewDice());
  }

  return (
    <main className="container h-96 mx-auto m-12 p-8 bg-[#F5F5F5] rounded-lg flex flex-col text-center justify-center font-inter font-bold">
      <div className="grid grid-cols-5 gap-5 justify-items-center">
        {diceNumber}
      </div>
      <div>
        <button
          className="bg-[#0b2333] hover:opacity-75 text-white h-12 w-24 shadow-xl rounded-md mt-8 font-bold text-xl transition ease hover:translate-y-1"
          onClick={rollingDice}
        >
          Roll 🎲
        </button>
      </div>
    </main>
  );
}

export default App;

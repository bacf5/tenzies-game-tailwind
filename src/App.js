import Die from './components/Die';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  function allNewDice() {
    const numArray = [];
    for (let i = 0; i < 10; i++) {
      numArray.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: uuidv4(),
      });
    }
    return numArray;
  }

  const [dice, setDice] = useState(allNewDice());

  function holdDice(id) {
    const flipingDice = dice.map((die) => {
      if (die.id === id) {
        return { ...die, isHeld: die.isHeld === true ? false : true };
      }
      return die;
    });
    setDice(flipingDice);
  }

  const diceNumber = dice.map((die) => {
    return (
      <Die
        value={die.value}
        key={die.id}
        isHeld={die.isHeld}
        holdDice={() => holdDice(die.id)}
      />
    );
  });

  function rollingDice() {
    setDice(allNewDice());
  }
  // console.log(dice[0].id);

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

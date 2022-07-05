import Die from './components/Die';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Confetti from 'react-confetti';

function App() {
  function newDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: uuidv4(),
    };
  }

  function allNewDice() {
    const numArray = [];
    for (let i = 0; i < 10; i++) {
      numArray.push(newDie());
    }
    return numArray;
  }

  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const isHeld = dice.every((die) => die.isHeld);
    const checkValue = dice[0].value;
    const compareValue = dice.every((die) => die.value === checkValue);
    if (isHeld && compareValue) {
      setTenzies(true);
    }
  }, [dice]);

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
    const checkIfWon = dice.every((die) => die.value === dice[0].value);
    if (checkIfWon) {
      setDice(allNewDice());
      setTenzies(false);
    }
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld ? die : newDie();
      })
    );
  }

  return (
    <main className="container  mx-auto m-12 p-8 bg-[#F5F5F5] rounded-lg flex flex-col text-center justify-center font-inter font-bold">
      <h1 className="text-3xl p-2 font-extrabold ">Tenzi</h1>
      <p className="mb-6 text-sm font-light">
        ● Roll the dices until all are the same. Click each die to freeze it at
        the current value between rolls.
      </p>
      <div className="grid grid-cols-5 gap-5 justify-items-center">
        {diceNumber}
      </div>
      <div>
        <button
          className="bg-[#0b2333] hover:opacity-75 text-white h-14 w-28 shadow-xl rounded-md mt-6 mb-6 font-bold text-l transition ease hover:translate-y-1"
          onClick={rollingDice}
        >
          {tenzies ? 'New game 🏆' : 'Roll 🎲'}
        </button>
      </div>
      {tenzies && <Confetti />}
    </main>
  );
}

export default App;

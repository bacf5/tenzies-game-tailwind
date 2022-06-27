import Die from './components/Die';

function App() {
  function allNewDice() {
    const newArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const randomes = newArray.map(
      (randomArr) => Math.trunc(Math.random() * 6) + 1
    );
    return randomes;
  }

  console.log(allNewDice());
  return (
    <main className="container h-96  mx-auto m-12 p-8 bg-[#F5F5F5] rounded-lg flex flex-col text-center justify-center">
      <div className="grid grid-cols-5 gap-5 justify-items-center">
        <Die value="1" />
        <Die value="2" />
        <Die value="3" />
        <Die value="4" />
        <Die value="5" />
        <Die value="6" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
      </div>
    </main>
  );
}

export default App;

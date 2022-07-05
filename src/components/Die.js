function Die(props) {
  return (
    <div
      className={`${
        props.isHeld === true ? 'bg-[#59E391]' : 'bg-white'
      } h-20 w-20 shadow-lg flex justify-center items-center rounded-md  font-inter font-bold hover:scale-105`}
      onClick={props.holdDice}
    >
      <h2 className="text-4xl">{props.value}</h2>
    </div>
  );
}

export default Die;

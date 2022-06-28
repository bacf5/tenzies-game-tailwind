function Die(props) {
  return (
    <div className="h-20 w-20 shadow-lg flex justify-center items-center rounded-md bg-white font-inter font-bold">
      <h2 className="text-4xl">{props.value}</h2>
    </div>
  );
}

export default Die;

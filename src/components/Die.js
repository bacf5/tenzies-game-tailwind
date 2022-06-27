function Die(props) {
  return (
    <div className="h-20 w-20 shadow-lg flex justify-center items-center rounded-md bg-white">
      <h2 className="text-4xl font-bold">{props.value}</h2>
    </div>
  );
}

export default Die;

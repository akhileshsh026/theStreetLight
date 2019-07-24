function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);

  return <button onClick={handleClick}>+{props.increment}</button>;
}

function Display(props) {
  return <div> {props.message} </div>;
}

function App() {
  const [counter1, setcounter1] = useState(42);
  const incriemntCounter = increment => setcounter1(counter1 + increment);
  return (
    <div>
      <Button onClickFunction={incriemntCounter} increment={1} />
      <Button onClickFunction={incriemntCounter} increment={5} />
      <Button onClickFunction={incriemntCounter} increment={50} />
      <Button onClickFunction={incriemntCounter} increment={500} />
      <Button onClickFunction={incriemntCounter} increment={1000} />
      <Display message={counter1} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("mountNode"));

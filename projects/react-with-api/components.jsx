const BrowserCounter = ({counter}) => {
  const [value, setValue] = React.useState(counter.value);
  return (
    <form>
      <h1>Browser</h1>
      <p className="counter">{value}</p>
      <input
        onClick={(e) => {
          e.preventDefault();
          counter.increment();
          setValue(counter.value);
        }}
        type="submit"
        value="+"
      />
    </form>
  );
};

const ApiCounter = () => {
  const count = 0;
  return (
    <form>
      <h1>API</h1>
      <p className="counter">{count}</p>
      <input
        onClick={(e) => {
          e.preventDefault();
          setCount(count + 1);
        }}
        type="submit"
        value="+"
      />
    </form>
  );
};
const App = () => (
  <div style={{display:"flex", justifyContent: "space-evenly"}}>
    <BrowserCounter counter={new Counter()} />
    <ApiCounter />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

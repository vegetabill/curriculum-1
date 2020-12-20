const BrowserCounter = ({ counter }) => {
  const [value, setValue] = React.useState(counter.value);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        counter.increment();
        setValue(counter.value);
      }}
    >
      <h1>Browser</h1>
      <p className="counter">{value}</p>
      <input type="submit" value="+" />
    </form>
  );
};

const ApiCounter = () => {
  const [count, setCount] = React.useState(Number.NEGATIVE_INFINITY);
  React.useEffect(() => {
    fetch('./counter')
      .then((res) => res.json())
      .then(({ value }) => {
        setCount(value);
      });
  }, []);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        fetch('./counter', { method: 'POST' })
          .then((res) => res.json())
          .then(({ value }) => {
            setCount(value);
          });
      }}
    >
      <h1>API</h1>
      <p className="counter">{count}</p>
      <input type="submit" value="+" />
    </form>
  );
};
const App = () => (
  <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
    <BrowserCounter counter={new Counter()} />
    <ApiCounter />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

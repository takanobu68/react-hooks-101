import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const onClickAdd = () => setCount(count + 1);
  const onClickDecrement = () => setCount(count - 1);

  const increment = () => setCount((prevCount) => prevCount + 1);

  const mult = () => setCount((prev) => prev * 2);

  const division = () => count % 3 === 0 && setCount(count / 3);
  return (
    <>
      <div>count:{count}</div>
      <div>
        <button onClick={onClickAdd}>増加</button>
        <button onClick={onClickDecrement}>減少</button>
      </div>
      <br />
      <div>
        <button onClick={increment}>増やす</button>
      </div>
      <br />
      <div>
        <button onClick={() => setCount(0)}>リセット</button>
        <button onClick={mult}>✖2</button>
        <br />
        <button onClick={division}>3の倍数で割れる値の時だけ3で割る</button>
      </div>
    </>
  );
};

export default App;

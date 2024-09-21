import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='d-flex' style={{ textAlign: 'center', marginTop: '50px' }}>

      <button onClick={decrement} style={{ marginRight: '10px' }}>
        Decrement
      </button>
      <p>{count}</p>
      <button onClick={increment}>
        Increment
      </button>
    </div>
  );
};

export default Counter;

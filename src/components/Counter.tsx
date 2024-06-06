import { useState } from 'react';
import classes from './Counter.module.scss';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1 className={classes.green}>Counter: {counter}</h1>{' '}
      <button className={classes.btn} onClick={() => setCounter(counter + 1)}>
        add
      </button>
    </div>
  );
};
export default Counter;

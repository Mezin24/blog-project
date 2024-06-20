import { counterActions } from 'entities/Counter/model/slice/counterSlice';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/UI/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const counter = useSelector(getCounterValue);
  const dispatch = useDispatch();

  const increment = useCallback(() => {
    dispatch(counterActions.increment());
  }, [dispatch]);

  const decrement = useCallback(() => {
    dispatch(counterActions.decrement());
  }, [dispatch]);

  return (
    <div>
      <h1 data-testid='value-title'>{counter}</h1>
      <Button data-testid='decrement-btn' onClick={decrement}>
        Decrement
      </Button>
      <Button data-testid='increment-btn' onClick={increment}>
        Increment
      </Button>
    </div>
  );
};

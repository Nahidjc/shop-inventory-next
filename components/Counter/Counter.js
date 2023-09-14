import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../store/reducers/counterSlice';
import withAuth from '../withAuth';

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default withAuth(Counter);

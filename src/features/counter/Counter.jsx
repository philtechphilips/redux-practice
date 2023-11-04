import  { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [increamentAmount, setIncreamentAmount] = useState(0);
    const addValue = Number(increamentAmount) || 0;

    const resetAll = () => {
        setIncreamentAmount(0);
        dispatch(reset());
    }

  return (
  <section>
    <p>{count}</p>
    <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>

        <input type="text" value={increamentAmount} onChange={(e) => setIncreamentAmount(e.target.value)}></input>
        <div>
            <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
            <button onClick={resetAll}>Reset</button>
        </div>
    </div>
  </section> 
  )
}

export default Counter

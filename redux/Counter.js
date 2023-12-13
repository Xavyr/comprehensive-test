import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "./counterSlice";
import styles from "./Counter.module.css";

import { selectIsNight } from "./../night/nightSlice";

export function Counter() {
  const count = useSelector(selectCount);
  const isNight = useSelector(selectIsNight);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div>
      <span
        data-cy="counter-text"
        className={styles.row}
        style={isNight ? { color: "white" } : null}
      >
        Counter
      </span>
      <div className={styles.row}>
        <button
          data-cy="counter-increment-button"
          className={isNight ? styles.nightButton : styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span
          data-cy="counter-value"
          className={styles.value}
          style={isNight ? { color: "white" } : null}
        >
          {count}
        </span>
        <button
          data-cy="counter-decrement-button"
          className={isNight ? styles.nightButton : styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          data-cy="counter-set-amount"
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          data-cy="add-amount-button"
          className={isNight ? styles.nightButton : styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          data-cy="add-amount-button-async"
          className={isNight ? styles.asyncNightButton : styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}

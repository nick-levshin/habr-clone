import { FC, useState } from "react";
import styles from "./Counter.module.scss";

interface CounterProps {}

export const Counter: FC<CounterProps> = ({}) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button className={styles.btn} onClick={increment}>
        increment
      </button>
    </div>
  );
};

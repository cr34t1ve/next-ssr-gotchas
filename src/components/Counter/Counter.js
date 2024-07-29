"use client";
import React from "react";
import Spinner from "../Spinner";

function Counter() {
  const [count, setCount] = React.useState(null);

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const _count = window.localStorage.getItem("saved-count");
    setCount(Number(_count));
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem("saved-count", count);
  }, [count]);

  return (
    <button className="count-btn" onClick={() => setCount(count + 1)}>
      Count: {!!count ? count : <Spinner />}
    </button>
  );
}

export default Counter;

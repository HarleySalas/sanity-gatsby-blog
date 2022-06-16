import { useEffect, useState } from "react";
import { window } from "browser-monads";

const useStickyState = (defaultValue, key) => {
  const [value, setValue] = useState(() => {
    const stickyValue = window.localStorage.getItem(key);

    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useStickyState;

/*

//Usage
const SomeComponent() {
  const [color, setColor] = useStickyState('blue', 'persisted-color');
}

// The second argument, key, will be used as the
// localStorage key. It's important that each
// useStickyState instance uses a unique value.

*/

import { equals } from "lodash/fp";
import { useRef } from "react";

const useDeepMemo = (memoFn, key) => {
  const ref = useRef();
  if (!ref.current || !equals(key, ref.current.key)) {
    ref.current = { key, value: memoFn() };
  }

  return ref.current.value;
};

export default useDeepMemo;

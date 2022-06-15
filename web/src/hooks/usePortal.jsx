import { useEffect, useCallback } from "react";
import ReactDOM from "react-dom";

const portalRoot =
  typeof document !== `undefined` ? document.getElementById("portal") : null;

const usePortal = () => {
  const portalWrapper =
    typeof document != `undefined` ? document.createElement("div") : null;

  useEffect(() => {
    portalRoot.appendChild(portalWrapper);

    return () => portalRoot.removeChild(portalWrapper);
  }, [portalWrapper]);

  const Portal = useCallback(
    ({ children }) => ReactDOM.createPortal(children, portalWrapper),
    [portalWrapper]
  );

  return portalWrapper ? Portal : null;
};

export default usePortal;

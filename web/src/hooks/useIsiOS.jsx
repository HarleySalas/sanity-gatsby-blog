import { useEffect, useState } from "react";

const useIsiOS = () => {
  const [isiOS, setIsiOS] = useState(false);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      setIsiOS(
        /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
      );
    }
  }, []);

  return isiOS;
};

export default useIsiOS;

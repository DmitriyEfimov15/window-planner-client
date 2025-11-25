import { debounce } from "lodash";
import { useMemo, useEffect } from "react";

export const useSearchObjects = <T extends object>(
  func: (params: T) => void,
  delay = 300
) => {
  const debouncedFunc = useMemo(() => debounce(func, delay), [func, delay]);

  // Очистка debounce при размонтировании
  useEffect(() => {
    return () => {
      debouncedFunc.cancel();
    };
  }, [debouncedFunc]);

  return debouncedFunc;
};

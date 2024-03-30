import { useEffect, useState } from "react";

export default function useDebounce(value: string, timeout = 200) {
  const [debounced, setDebounced] = useState<string>(" ");

  useEffect(() => {
    const interval = setTimeout(() => setDebounced(value), timeout);
    return () => clearTimeout(interval);
  }, [value]);

  return {
    debounced,
  };
}

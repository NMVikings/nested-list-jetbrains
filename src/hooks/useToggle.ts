import { useCallback, useState } from "react";

export const useToggle = (defaultValue: boolean): [boolean, () => void] => {
  const [bool, setBool] = useState(defaultValue);

  const toggle = useCallback(() => {
    setBool((prevBool) => !prevBool);
  }, []);

  return [bool, toggle];
};

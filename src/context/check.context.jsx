import { useState, createContext } from 'react';

export const CheckContext = createContext({
  count: 0,
  setCount: () => {},
});

export const CheckProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const updateCounter = (isChecked) => {
    setCount((prevCounter) => (isChecked ? prevCounter + 1 : prevCounter - 1));
  };
  const value = { count, updateCounter };

  return (
    <CheckContext.Provider value={value}>{children}</CheckContext.Provider>
  );
};

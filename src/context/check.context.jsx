import { useState, createContext } from 'react';

export const CheckContext = createContext({
  count: 0,
  setCount: () => {},
  //   checkBoxes: [],
  //   setCheckBoxes: () => {},
});

export const CheckProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  //   const [checkboxes, setCheckboxes] = useState([]);

  const updateCounter = (isChecked) => {
    setCount((prevCounter) => (isChecked ? prevCounter + 1 : prevCounter - 1));
  };
  const value = { count, updateCounter };

  return (
    <CheckContext.Provider value={value}>{children}</CheckContext.Provider>
  );
};

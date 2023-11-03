import { useState, createContext } from 'react';

import DATAS from '../data.json';

export const DatasContext = createContext({
  datas: [],
  checkBoxesData: [],
  setCheckBoxesData: () => {},
});

export const DatasProvider = ({ children }) => {
  const [datas, setDatas] = useState(DATAS);
  const [checkBoxesData, setCheckBoxesData] = useState([]);
  console.log(checkBoxesData);

  const value = { datas, checkBoxesData, setCheckBoxesData };

  return (
    <DatasContext.Provider value={value}>{children}</DatasContext.Provider>
  );
};

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
  //   console.log(checkBoxesData);

  const deleteDatas = () => {
    const newArray = datas.filter((item) => !checkBoxesData.includes(item));
    setDatas(newArray);
  };

  const value = {
    datas,
    setDatas,
    checkBoxesData,
    setCheckBoxesData,
    deleteDatas,
  };

  return (
    <DatasContext.Provider value={value}>{children}</DatasContext.Provider>
  );
};

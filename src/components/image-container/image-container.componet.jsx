import './image-container.style.css';
// import DATA from '../../data.json';
import { useState, useContext } from 'react';

import { CheckContext } from '../../context/check.context';
import { DatasContext } from '../../context/data.context';

// const ImageContainer = () => {
//   const { datas, checkBoxesData, setCheckBoxesData } = useContext(DatasContext);
//   const { updateCounter } = useContext(CheckContext);

//   const handleCheckboxChange = (e, data) => {
//     updateCounter(e.target.checked);
//     if (!checkBoxesData.includes(data)) {
//       setCheckBoxesData(data);
//     }
//   };

//   return (
//     <div>
//       <div className="image-grid">
//         {datas.map((data, index) => (
//           <div
//             key={data.id}
//             className={`images ${index === 0 ? 'big-image' : ''}`}
//           >
//             <img src={data.imageUrl} alt="" className="image" />
//             <div className="checkbox">
//               <input
//                 type="checkbox"
//                 id="imageCheckbox"
//                 onChange={(e) => handleCheckboxChange(e, data)}
//               />
//               {/* <label for="imageCheckbox"/></label> */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

const ImageContainer = () => {
  const { datas, checkBoxesData, setCheckBoxesData } = useContext(DatasContext);
  const { updateCounter } = useContext(CheckContext);

  //   const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e, data) => {
    updateCounter(e.target.checked);

    if (e.target.checked) {
      setCheckBoxesData([...checkBoxesData, data]);
    } else {
      setCheckBoxesData(checkBoxesData.filter((item) => item !== data));
    }
  };

  return (
    <div>
      <div className="image-grid">
        {datas.map((data, index) => (
          <div
            key={data.id}
            className={`images ${index === 0 ? 'big-image' : ''}`}
          >
            <img src={data.imageUrl} alt="" className="image" />
            <div className="checkbox">
              <input
                type="checkbox"
                id="imageCheckbox"
                checked={checkBoxesData.includes(data)}
                onChange={(e) => handleCheckboxChange(e, data)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageContainer;

import "./image-container.style.css";
// import DATA from '../../data.json';
import { useContext, useRef } from "react";

import { CheckContext } from "../../context/check.context";
import { DatasContext } from "../../context/data.context";

const ImageContainer = () => {
  const { datas, setDatas, checkBoxesData, setCheckBoxesData } =
    useContext(DatasContext);
  const { updateCounter } = useContext(CheckContext);

  const dragItem = useRef(null);
  const dragOveritem = useRef(null);

  // function to handle the checkbox with count value
  const handleCheckboxChange = (e, data) => {
    updateCounter(e.target.checked);

    if (e.target.checked) {
      setCheckBoxesData([...checkBoxesData, data]); //add the data to the array
    } else {
      setCheckBoxesData(checkBoxesData.filter((item) => item !== data)); //if uncheck delete data from array
    }
  };

  // handle drag sorting
  const handleSort = () => {
    // duplicate items
    let _items = [...datas];

    // remove and save the drag item content
    const draggedItemContent = _items.splice(dragItem.current, 1)[0];
    // console.log(draggedItemContent);

    // switch the position
    _items.splice(dragOveritem.current, 0, draggedItemContent);

    // reset the position
    dragItem.current = null;
    dragOveritem.current = null;

    // set the re-arraged array
    setDatas(_items);
  };

  return (
    <div>
      <div className="image-grid">
        {/* load data */}
        {datas.map((data, index) => (
          <div
            key={data.id}
            className={`images ${index === 0 ? "big-image" : ""}`}
            draggable
            onDragStart={() => (dragItem.current = index)}
            onDragEnter={() => (dragOveritem.current = index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
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

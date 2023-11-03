import './image-container.style.css';
import DATA from '../../data.json';
import { useContext } from 'react';
import { CheckContext } from '../../context/check.context';

const ImageContainer = () => {
  const { updateCounter } = useContext(CheckContext);

  const handleCheckboxChange = (isChecked) => {
    updateCounter(isChecked);
  };

  return (
    <div>
      <div className="image-grid">
        {DATA.map((data, index) => (
          <div
            key={data.id}
            className={`images ${index === 0 ? 'big-image' : ''}`}
          >
            <img src={data.imageUrl} alt="" className="image" />
            <div className="checkbox">
              <input
                type="checkbox"
                id="imageCheckbox"
                onChange={(e) => handleCheckboxChange(e.target.checked)}
              />
              {/* <label for="imageCheckbox"/></label> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageContainer;

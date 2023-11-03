import { useContext } from 'react';
import './header.style.css';
import { CheckContext } from '../../context/check.context';

const Header = () => {
  const { count } = useContext(CheckContext);
  return (
    <>
      <div className="header-container">
        <div>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label>{count} files selected</label>
        </div>
        <span className="dlt-text">DELETE</span>
      </div>
      <hr />
    </>
  );
};

export default Header;

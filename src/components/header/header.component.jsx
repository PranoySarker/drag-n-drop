import { useContext } from 'react';
import './header.style.css';
import { CheckContext } from '../../context/check.context';
import { DatasContext } from '../../context/data.context';

const Header = () => {
  const { count } = useContext(CheckContext);
  const { deleteDatas } = useContext(DatasContext);

  const deleteDataHandler = () => deleteDatas();

  return (
    <>
      <div className="header-container">
        <div>
          <input type="checkbox" checked="defaultChecked" readOnly />
          <label>{count} files selected</label>
        </div>
        <span className="dlt-text" onClick={deleteDataHandler}>
          DELETE
        </span>
      </div>
      <hr />
    </>
  );
};

export default Header;

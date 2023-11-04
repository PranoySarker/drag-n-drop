import { useContext } from "react";
import "./header.style.css";
import { CheckContext } from "../../context/check.context";
import { DatasContext } from "../../context/data.context";

const Header = () => {
  const { count, setCount } = useContext(CheckContext);
  const { deleteDatas } = useContext(DatasContext);

  const deleteDataHandler = () => {
    deleteDatas();
    setCount(0);
  };

  return (
    <>
      <div className="header-container">
        {count > 0 ? (
          <div>
            <input type="checkbox" checked="defaultChecked" readOnly />
            <label>{count} files selected</label>
          </div>
        ) : (
          <span>Gallery</span>
        )}

        <span className="dlt-text" onClick={deleteDataHandler}>
          DELETE
        </span>
      </div>
      <hr />
    </>
  );
};

export default Header;

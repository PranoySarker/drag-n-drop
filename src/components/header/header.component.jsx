import './header.style.css';

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label> 0 files selected</label>
        </div>
        <span className="dlt-text">DELETE</span>
      </div>
      <hr />
    </>
  );
};

export default Header;

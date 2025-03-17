import "./Navbar.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const Navbar = (props) => {
  return (
    <div className="navContainer">
      <div className="left">
        <nav>
          <ul>
            <Link to="/" className="aStyle">{props.title}</Link>
            <Link to="/home" className="aStyle">{props.home}</Link>
            <Link to="/contact" className="aStyle">{props.contact}</Link>
            <Link to="/about" className="aStyle">{props.about}</Link>
          </ul>
        </nav>
      </div>

      <div className="right">
        <input className="srch" type="text" placeholder="Search..." />
        <button className="nav-btn">Search</button>
      </div>

      <div className="colorContainer">
        <button id="yellow" onClick={props.yellowF} className="yellow"></button>
        <button id="red" onClick={props.redF} className="red"></button>
        <button id="blue" onClick={props.blueF} className="blue"></button>
        <button id="green " onClick={props.greenF} className="green"></button>
      </div>

      <div className="form-check form-switch">
        <input
          className="form-check-input"
          onClick={props.darkMode}
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Dark Mode
        </label>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string,
  contact: PropTypes.string,
};

export default Navbar;

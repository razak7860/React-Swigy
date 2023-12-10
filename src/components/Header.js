import { LOGO } from "../utils/constant";
import LogInfo from "./LogInfo";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO} />
      </div>
      <div className="nav-items">
        <ul className="items">
          <li className="item">
            <span className="item">
              Online status : {onlineStatus ? "🟢" : "🔴"}
            </span>
          </li>
          <li className="item">
            <Link className="item" to="/">
              Home
            </Link>
          </li>
          <li className="item">
            <Link className="item" to="/about">
              About
            </Link>
          </li>
          <li className="item">
            <Link className="item" to="/contact">
              Contact us
            </Link>
          </li>
          <LogInfo />
        </ul>
      </div>
    </div>
  );
};

export default Header;

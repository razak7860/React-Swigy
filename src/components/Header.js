import { LOGO } from "../utils/constant";
import LogInfo from "./LogInfo";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="header flex justify-between border border-green-300 bg-orange-50">
      <div className="logo-container">
        <img className="logo w-36 h-28" src={LOGO} />
      </div>
      <div className="nav-items border border-black flex items-center">
        <ul className="items flex border border-red-300">
          <li className="item m-4 p-4">
            <span className="item">
              Online status : {onlineStatus ? "🟢" : "🔴"}
            </span>
          </li>
          <li className="item m-4 p-4">
            <Link className="item" to="/">
              Home
            </Link>
          </li>
          <li className="item m-4 p-4">
            <Link className="item" to="/about">
              About
            </Link>
          </li>
          <li className="item m-4 p-4">
            <Link className="item" to="/contact">
              Contact us
            </Link>
          </li>
          <LogInfo />
          <li className="m-4 p-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

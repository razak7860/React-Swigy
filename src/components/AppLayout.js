import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

const AppLayout = () => {
  const [userName, setUserName] = useState("Test");
  useEffect(() => {
    const data = "Rk";
    setUserName(data);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="layout">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

export default AppLayout;

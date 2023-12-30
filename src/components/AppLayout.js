import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import UserContext from "../utils/UserContext";

const AppLayout = () => {
  const [userName, setUserName] = useState("Test");
  useEffect(() => {
    const data = "Rk";
    setUserName(data);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="layout">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

export default AppLayout;

import { useState } from "react";

const LogInfo = () => {
  const [loginStatus, setLoginStatus] = useState("Login");
  function changeLoginStatus() {
    if (loginStatus === "Login") {
      setLoginStatus("Logout");
    } else {
      setLoginStatus("Login");
    }
  }
  return (
    <button className="log" onClick={changeLoginStatus}>
      {loginStatus}
    </button>
  );
};
export default LogInfo;

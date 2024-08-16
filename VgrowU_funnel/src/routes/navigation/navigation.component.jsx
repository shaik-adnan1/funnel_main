import "./navigation.style.jsx";
import { LogoContainer, NavigationContainer } from "./navigation.style.jsx";

// import {ReactComponent as VgrowuLogo } from "../../assets/logo.png"
import logo from "../../assets/logo.png";
import { Outlet } from "react-router";
export const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <LogoContainer src={logo}></LogoContainer>
        {/* <lord-icon
          src='https://cdn.lordicon.com/heexevev.json'
          trigger='hover'
          style='width:250px;height:250px'
        ></lord-icon> */}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

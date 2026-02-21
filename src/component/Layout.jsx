import Navbar from "./Navbar";
import Search from "./Searchbar";
import { Outlet } from "react-router-dom";
import './Layout.css'

 const Layout = ()=> {
  return (
    <div className="layout">
      <Navbar />

      <div className="main-content">
        <Search />
        <div className="section">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
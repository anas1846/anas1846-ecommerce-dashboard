import React from 'react'
import './Dropdown.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faUpDown  } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { NavLink } from "react-router-dom";
const Dropdown = () => {
const [active1, setActive1] = useState(false);

  return (
    <div>
{/* <div className="week">
<div className="click-button">
<div style={{ display: "flex", justifyContent: "flex-end" }}> */}

      <div
      className="dropdown-btn"
      onClick={() => setActive1(!active1)}
    >
      <p style={{ margin: 0 }}>Last Week</p>
      <FontAwesomeIcon icon={faUpDown} />
    </div>

    {active1 && (
      <div
        className="dropdown-menu"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="days">Last week</div>
        <div className="days">Today</div>
        <div className="days">Last month</div>
        <div className="days">Last year</div>
      </div>
    )}

  {/* </div>
   </div>


<NavLink className="nav-2" to="/">view to report</NavLink>

  

</div> */}


</div>





  )
}

export default Dropdown

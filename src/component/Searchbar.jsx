import React, { useState } from 'react'
import './Searchbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell , faChartLine,  faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Anasimg from '../assets/Anas.jpg'
import { faUser, faArrowRightFromBracket  } from "@fortawesome/free-solid-svg-icons";



const Search = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);
  return (

    <div className="search-section">
    <div className='Dashboard'>
        <div className="searchbar">
           <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ color: "#000" }}
        />
</div>
    <input type="text" placeholder='search For something'/>
      
      <div className="bell">
        <FontAwesomeIcon className="show"       onClick={() => setShow(!show)}
 icon={faBell} style={{ color: "#c3c7cc" , height:"20px",width:"20px"}} />

 {show && (
        <div className="box">
         <div className="Analytisc">
          <div className="icon"> <FontAwesomeIcon
  icon={faChartLine}
  style={{ color: '#818ea3' }}
/>
  </div>
  <div className="content">
<h4>ANALYTICS</h4>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora similique distinctio </p></div>
</div>
        
        <div className="Analytisc">
          <div className="icon"> <FontAwesomeIcon
  icon={faChartLine}
  style={{ color: '#818ea3' }}
/>
  </div>
  <div className="content">
<h4>ANALYTICS</h4>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora similique distinctio </p></div>
</div>
         <div className="notifation">

          <button>See All Notifications</button>
         </div>

                  

        </div>
      )}

      </div>

      <div className="Active">
      <div className="profile"  onClick={() => setActive(!active)} >
        <img src={Anasimg} alt="" />
        <div className="about"><p> M.Anas </p>
        <FontAwesomeIcon 
  icon={faCaretDown}
  style={{ color: "#000000" }}
/>

        </div>
          </div>
 {active && (
        <div className="box2">
       <div className="profile">
<FontAwesomeIcon icon={faUser} style={{ color: "#c4c8cd" }} />
<span>profile</span>

       </div>

        <div className="profile">
<FontAwesomeIcon icon={faUser} style={{ color: "#c4c8cd" }} />
<span>profile</span>

       </div>
<div className="profile">
<FontAwesomeIcon icon={faUser} style={{ color: "#c4c8cd" }} />
<span>profile</span>

       </div>
       <div className="profile">
<FontAwesomeIcon icon={faUser} style={{ color: "#c4c8cd" }} />
<span>profile</span>

       </div>


       <div className="logout">
<FontAwesomeIcon
  icon={faArrowRightFromBracket}
  style={{ color: "#c02a2a" }}
/>

       <span>logout</span>
       </div>


        </div>
 )}

      
      </div>
    </div>
    </div>
  )
}

export default Search
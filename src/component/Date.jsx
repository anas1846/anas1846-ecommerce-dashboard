import React from 'react'
import './Date.css'
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
const Date = () => {
   const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const startRef = useRef(null);
  const endRef = useRef(null);

  const openStart = () => {
    startRef.current?.showPicker
      ? startRef.current.showPicker()
      : startRef.current.focus();
  };

  const openEnd = () => {
    endRef.current?.showPicker
      ? endRef.current.showPicker()
      : endRef.current.focus();
  };


    
  return (



    <div>
      <div className="date">
  <div className="start"> 
         <button type="button" className="date-btn" onClick={openStart}>
        {startDate || "Start"}
      </button>

      {/* End */}
      <button type="button" className="date-btn" onClick={openEnd}>
        {endDate || "End"}
      </button>

      {/* Hidden Inputs */}
      <input
        ref={startRef}
        type="date"
        value={startDate}
        onChange={(e) => {
          setStartDate(e.target.value);
          setEndDate(""); // reset end if start changes
        }}
        style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
      />

      <input
        ref={endRef}
        type="date"
        value={endDate}
        min={startDate}   // 🔥 end date start se pehle nahi ho sakti
        onChange={(e) => setEndDate(e.target.value)}
        style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
      />
  
  <div className="calender">
<FontAwesomeIcon icon={faCalendar} style={{ color: "#abb6bf" }} />

  </div>
    
  </div>

  
</div>

</div>
    
  )
}

export default Date

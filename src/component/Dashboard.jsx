import React from 'react'
import { NavLink } from "react-router-dom";
import { useRef, useState } from 'react';
import './Dashboard.css'
import Map from './Map';

import Date from './Date';
import downImg from '../assets/down.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faTabletScreenButton,faMobileScreen , faUpDown  } from "@fortawesome/free-solid-svg-icons";
import ReactCountryFlag from "react-country-flag";
import Dropdown from './Dropdown';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

import {cards,  referaldata, data ,  conversionData ,countryData } from './Data';




const Dashboard = () => {

 return (
    <div>

      
      <div className="Dasboared-section">

        <div className="upper-cointainer">
<div className="content">
<p style={{color:"white"}}>Overview</p>
<h2>  Analytics  </h2>
</div>


<div className="navlinks">

<NavLink className="nav" to="/">Trafic</NavLink>
<NavLink className="nav" to="/posts">Sales</NavLink>
</div>


<Date/>
</div>

<div className="cards-section">
{
cards.map((card,index)=>(
  <div className="card" key={index}>
    <div className="rate">
     <div className="rate-content">
    <p>{card.title}</p>
    <h3>{card.value}</h3>
    </div>
    <span style={{color: card.rate.startsWith('+') ? 'green' : 'red'}}>{card.rate}</span>
    </div>
    <img className='wave' src={card.img} alt="" />



    
  </div>
))



}


</div>

<div className="main-section">

<div className="section-1">

<div className="chart">
  <div className="upper">
<h3>Session</h3>
<div className="line"> =  </div>
</div>

<div className="time">

<div className="buttons">
  <button className='button-1'>Hour</button>
  <button>Day</button>
  <button>Week</button>
  <button className='button-2'  >Month</button>
</div>

<Date/>


</div>

<div className="chart-container">
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data} margin={{ top: 0, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorToday" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2196F3" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#2196F3" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorYesterday" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#F44336" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#F44336" stopOpacity={0}/>
            </linearGradient>
          </defs>
          
          <CartesianGrid vertical={false} className="grid-lines" />
          <XAxis 
            dataKey="time" 
            axisLine={false} 
            tickLine={false} 
            tickMargin={10}

            className="axis-label"
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
           
            className="axis-label"
          />
          <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
          <Legend 
  verticalAlign="top" 
  align="left" 
  iconType="circle"
  // Is line ko add karein:
  wrapperStyle={{ paddingBottom: '30px', paddingTop: '10px' }} 
/>

          {/* Yesterday (Dashed) */}
          <Area
            type="monotone"
            dataKey="yesterday"
            stroke="#F44336"
            strokeWidth={2}
            strokeDasharray="5 5"
            fill="url(#colorYesterday)"
          />

          {/* Today (Solid with white dots) */}
          <Area
            type="monotone"
            dataKey="today"
            stroke="#2196F3"
            strokeWidth={3}
            fill="url(#colorToday)"
            dot={{ r: 5, fill: '#fff', stroke: '#2196F3', strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>






</div>






</div>

<div className="loader">
  <div className="upper">
<h3>Users By device</h3>
<div className="line"> =  </div>
</div>


<div className="loading">

  <img  className='moving' src={downImg} alt="" />

<div className="icons">
<div className="icon-1">
<FontAwesomeIcon icon={faDesktop} style={{ color: "#007bff", width:"30px",height:"30px"}} />
<h5>Deskstop</h5>
<p>68.3</p>

</div>
<div className="icon-1">

<FontAwesomeIcon
  icon={faTabletScreenButton}
  rotation={270}
  style={{ color: "rgba(0,123,255,0.5)" 
, width:"30px",height:"30px"

  }}

/>

<h5>Tablet</h5>
<p>24.5</p>

</div>
<div className="icon-1">
<FontAwesomeIcon 
  icon={faMobileScreen} 
  style={{ color: "#007bff4d" ,
     width:"30px",height:"30px"


  }}
 
  

/>

<h5>Mobile</h5>
<p>7.2</p>
</div>

</div>


</div>

<div className="week">
<div className="click-button">
<div style={{ display: "flex", justifyContent: "flex-end" }}>


<Dropdown/>
 </div>
   </div>


<NavLink className="nav-2" to="/">view to report</NavLink>

  

</div>

</div>




</div>

<div className="map-section">

<div className="referal">
<div className="upper">
<h3>Referal</h3>
<div className="line"> =  </div>
</div>

<div className="referal-content">
<table>
 

  <tbody>
    {referaldata.map((item, index) => (
      <tr key={index}>
        <td>{item.platform}</td>
        <td>{item.users}</td>
      </tr>
    ))}
  </tbody>
<div className="week">
<div className="click-button">
<div style={{ display: "flex", justifyContent: "flex-end" }}>


<Dropdown/>
 </div>
   </div>


<NavLink className="nav-2" to="/">view to report</NavLink>

  

</div>


</table>







</div>
</div>


{/* goals-section */}
<div className="goals-section">
 <div className="upper">
  <h3>Over Goals</h3>
  <div className="line"> =  </div>
  </div>

 <div className="goals-content">
  { conversionData.map((item,index)=>(
    <div className="goal" key={index}>
      <div className="goal-upper">
       <h4>{item.title}</h4>
       <p>{item.completions}Completions  <span>{item.value}</span>Rate</p>
      </div>
       <div className="goal-img">
        <div className="rate-1">
         <h4>{item.conversionRate}</h4>
         <p> Conversion Rate </p>
       </div>
      <img src={item.img} alt="" />
       </div>
    </div>
  ))}


  



  
</div>

<div className="week">
<div className="click-button">
<div style={{ display: "flex", justifyContent: "flex-end" }}>


<Dropdown/>
 </div>
   </div>


<NavLink className="nav-2" to="/">view to report</NavLink>

  

</div>


</div>
<div className="map-cointainer">

<div className="upper">
  <h3>Over Goals</h3>
  <div className="line"> =  </div>
  </div>

<Map/>


<div className="country-data">

  {
    countryData.map((item,index)=>(


      <div className="country" key={index}>
        <div className="country-flag">
        <span>{item.flag}</span>
       <p>{item.country}</p>
        </div>
        <div className="country-percent">
        <p>{item.users}</p>
        <p>{item.percentage}%</p>
</div>


      </div>
    ))
  }


</div>
<div className="week">
<div className="click-button">
<div style={{ display: "flex", justifyContent: "flex-end" }}>


<Dropdown/>
 </div>
   </div>


<NavLink className="nav-2" to="/">view to report</NavLink>

  

</div>

</div>
 {/* map-section */}


 



 </div>

      </div>


    </div>
  )
}

export default Dashboard

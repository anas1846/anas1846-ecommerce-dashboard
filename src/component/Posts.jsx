import React from 'react'
import './Posts.css'
import { NavLink } from "react-router-dom";
import Date from './Date';
import {dashboardStats,categories,countryData,orders} from './Data';
import Dropdown from './Dropdown';

import Chart from './Chart';
import Map from './Map';
const Posts = () => {
  return (
    <div>
      {/* postsection */}
     <div className="post-section">
      <div className="upper-cointainer">
       <div className="content">
         <p style={{color:"white"}}>Dashboards</p>
         <h2> Sales Overview  </h2>
        </div>
       <div className="navlinks">
         <NavLink className="nav" to="/">Trafic</NavLink>
         <NavLink className="nav" to="/posts">Sales</NavLink>
       </div>
      <Date/>
     </div>
     {/* cardsection */}
      <div className="cards-section">
       {
         dashboardStats.map((card,index)=>(
         <div className="card" key={index}>
           <div className="rate">
             <div className="rate-content">
               <p>{card.title}</p>
               <h3>{card.value}</h3>
              </div>
             <span style={{color: card.growth.startsWith('+') ? 'green' : 'red'}}>{card.growth}</span>
             </div>
          <img className='wave' src={card.img} alt="" />
         </div>
         ))
         }
      </div>
      {/* chart section */}
     <div className="chart-section">
       <div className="section-1">
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
       <Chart/>
      </div>
     <div className="sales-section">
        <div className="upper">
          <h3>Session</h3>
          <div className="line"> =  </div>
        </div>
     <div className="sales-box">
  {
    categories.map((item, index) => {
      return (
        <div className="sales" key={index}>
          <div className="sales-img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div className="sales-rate">
            <p>{item.value}</p>
            <p>{item.growth}</p>
          </div>
        </div>
      );
    })
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
  

     </div>
     <div className="latest-section">
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
 {/* latest section */}
<div className="latest-cointainer">
      <div className="upper">
  <h3>Over Goals</h3>
  <div className="line"> =  </div>
  </div>
<div className="details">
  <p>details</p>
  <div className="item">
    <p>Status</p>
    <p>item</p>
    <p>total</p>
  </div>
  <p>action</p>
</div>
<div className="order-section">
  {
    orders.map((item, index) => {
      return (
        <div className="order" key={index}>
          <div className="order-img">
            <img src={item.img} alt="" />
            <div className="order-content">
            <h4>{item.id}</h4>
            <p>{item.date}</p>
            </div>
          </div>

          <div className="order-price">
            <button className='status-button'   style={{
    backgroundColor:
      item.status === "Complete"
        ? "green"
        : item.status === "Pending"
        ? "orange"
        : "red",

    color:
      item.status === "Pending"
        ? "black"
        : "white"
  }}
   >{item.status}</button>
            <p>{item.items}</p>
            <p>{item.price}</p>
          </div>

          <div className="order-button">
            <button className='order-button1' >Cancel</button>
            <button className='order-button2' >Edit</button>
          </div>
        </div>
      );
    })
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
 


</div>

    </div>
  </div>
  )
}

export default Posts

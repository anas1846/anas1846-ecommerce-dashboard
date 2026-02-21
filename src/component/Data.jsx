import cardImg from '../assets/card-img.png'
import cardImg1 from '../assets/card-img1.png'
import cardImg2 from '../assets/card-img2.png'
import cardImg3 from '../assets/card-img3.png'
import downImg1 from '../assets/download (5).png'
import downImg2 from '../assets/download (6).png'
import downImg3 from '../assets/download (7).png'
import downImg from '../assets/download (8).png'
 import ReactCountryFlag from "react-country-flag";
 import shoesImg from '../assets/shoes.webp'
 import jeansImg from '../assets/jeans.jpg'
 import sportswearImg from '../assets/sweater.jpg'
import basicsImg from "../assets/sweater.jpg";
import sweaterImg from "../assets/sweater2.webp";
import sweater3Img from "../assets/shirt2.jpg";
import shirtImg from "../assets/shirt.png";
import sportImg from "../assets/sport.png";
import pantImg from "../assets/pant.png";

export const orders = [
  {
    img:sweater3Img,
    id: "#19280",
    date: "21 February 2018 20:32",
    status: "Complete",
    items: 7,
    price: "$199"
  },
  {
    img:shirtImg,
    id: "#19279",
    date: "21 February 2018 20:32",
    status: "Pending",
    items: 7,
    price: "$612"
  },
  {
    img:sportImg ,
    id: "#19278",
    date: "21 February 2018 20:32",
    status: "Canceled",
    items: 18,
    price: "$1211"
  },
  {
    img:pantImg,
    id: "#19277",
    date: "21 February 2018 20:32",
    status: "Pending",
    items: 7,
    price: "$612"
  }
]; 



 export   const cards=[
    {
      title:"USERS",
      value:"1,234",
      rate:"+12.4%",
      icon:"faUser",
     img:cardImg
    },
{

      title:"SESSIONS",
      value:"$56,789",
      rate:"+8.2%",
      icon:"faDollarSign",
     img:cardImg1

},
{      title:"PAGE VIEWS",
      value:"567",
      rate:"-5.6%",
      icon:"faShoppingCart",
     img:cardImg2
},
{

      title:"PAGES/SESSION",
      value:"89%",
      rate:"-3.1%",
      icon:"faComment",
     img:cardImg3
}



  ]


 export   const referaldata = [
  {
    platform: "GitHub",
    users: "19,291"
  },
  {
    platform: "StackOverflow",
    users: "11,201"
  },
  {
    platform: "Hacker News",
    users: "92,91"
  },
  {
    platform: "Reddit",
    users: "8,281"
  },
  {
    platform: "The Next Web",
    users: "9,291"
  },
  {
    platform: "Tech Crunch",
    users: "9,291"
  },
  {
    platform: "YouTube",
    users: "9,291"
  },
  {
    platform: "Adobe",
    users: "9,291"
  }
];



export     const data = [
  { time: '10:00 PM', today: 5, yesterday: 23 },
  { time: '11:00 PM', today: 10, yesterday: 5 },
  { time: '12:00 PM', today: 30, yesterday: 10 },
  { time: '13:00 PM', today: 10, yesterday: 5 },
  { time: '14:00 PM', today: 42, yesterday: 4 },
  { time: '15:00 PM', today: 5, yesterday: 30 },
  { time: '16:00 PM', today: 15, yesterday: 2 },
];

 export const conversionData = [
  {
    title: "Newsletter Signups",
    completions: 291,
    value: 192.00,
    conversionRate: 57.2,
    img:downImg
  },
  {
    title: "Social Shares",
    completions: 451,
    value: 0.00,
    conversionRate: 45.5,
        img:downImg1
  },
  {
    title: "eBook Downloads",
    completions: 12,
    value: 128.11,
    conversionRate: 5.2,
        img:downImg2

  },
  {
    title: "Account Creations",
    completions: 281,
    value: 218.12,
    conversionRate: 30.2,
        img:downImg3
  }
];




export const countryData = [
  {
    country: "United States",
    code: "US",
    users: 12291,
    percentage: 23.32,
    flag: (
      <ReactCountryFlag
        countryCode="US"
        svg
        style={{ width: "30px", height: "30px" }}
      />
    ),
  },
  {
    country: "United Kingdom",
    code: "GB",
    users: 11192,
    percentage: 18.8,
    flag: (
      <ReactCountryFlag
        countryCode="GB"
        svg
        style={{ width: "30px", height: "30px" }}
      />
    ),
  },
  {
    country: "Australia",
    code: "AU",
    users: 9291,
    percentage: 12.3,
    flag: (
      <ReactCountryFlag
        countryCode="AU"
        svg
        style={{ width: "30px", height: "30px" }}
      />
    ),
  },
  {
    country: "Japan",
    code: "JP",
    users: 2291,
    percentage: 8.14,
    flag: (
      <ReactCountryFlag
        countryCode="JP"
        svg
        style={{ width: "30px", height: "30px" }}
      />
    ),
  },
];

export  const dashboardStats = [
  {
    title: "Total Revenue",
    value: "$29,219",
    growth: "2.93%",
    img:cardImg
  },
  {
    title: "Revenue Today",
    value: "$8,391",
    growth: "7.21%",
    img:cardImg1
  },
  {
    title: "Total Customers",
    value: "981",
    growth: "3.71%",
    img:cardImg2
  },
  {
    title: "New Customers",
    value: "29",
    growth: "2.71%"
    ,img:cardImg3
  }
];

  export const categories = [
  {
    title: "Shoes",
    value: "12,281",
    growth: "32.4%",
    img: shoesImg
  },
  {
    title: "Men's Jeans",
    value: "8,129",
    growth: "28.4%",
    img: jeansImg
  },
  {
    title: "Sportswear",
    value: "812",
    growth: "12.2%",
    img: sportswearImg
  },
  {
    title: "Basics",
    value: "29",
    growth: "7.1%",
    img: basicsImg
  },
  {
    title: "Sweaters",
    value: "3",
    growth: "1.2%",
    img: sweaterImg
  }
];




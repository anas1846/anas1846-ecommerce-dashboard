import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

const data2 = [
  { name: 'Jan', Profit: 29000, Shipping: 3000, Tax: 1500 },
  { name: 'Feb', Profit: 25500, Shipping: 2500, Tax: 1500 },
  { name: 'Mar', Profit: 23500, Shipping: 2200, Tax: 1300 },
  { name: 'Apr', Profit: 32500, Shipping: 3500, Tax: 1800 },
  { name: 'May', Profit: 11500, Shipping: 1000, Tax: 800 },
  { name: 'Jun', Profit: 8500, Shipping: 800, Tax: 400 },
  { name: 'Jul', Profit: 25500, Shipping: 2500, Tax: 1500 },
  { name: 'Aug', Profit: 22500, Shipping: 2300, Tax: 1200 },
  { name: 'Sep', Profit: 10500, Shipping: 1000, Tax: 500 },
  { name: 'Oct', Profit: 12000, Shipping: 1000, Tax: 500 },
  { name: 'Nov', Profit: 9000, Shipping: 8500, Tax: 4000 },
  { name: 'Dec', Profit: 13000, Shipping: 1500, Tax: 800 },
];

const Chart = () => {
  return (
    <div style={{ 
      backgroundColor: '#fff', 
      // padding: '30px', 
      borderRadius: '12px', 
      boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
      width: '750px',
      maxWidth: '900px',
      margin: '20px auto'
    }}>
      {/* Humne width '100%' rakhi hai taake container ke hisab se adjust ho */}
      <BarChart
        width={770} 
        height={450} 
        data={data2}
        margin={{ top: 10, right:20, left:5, bottom: 20 }}
        
        barSize={45}
      >
        <CartesianGrid vertical={false} stroke="#f0f0f0" />
        
        <XAxis 
          dataKey="name" 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: '#9e9e9e', fontSize: 14 }}
          tickMargin={15} 
        />
        
        <YAxis 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: '#9e9e9e', fontSize: 14 }}
          tickFormatter={(value) => value === 0 ? 0 : `${value / 1000}k`}
        />
        
        <Tooltip cursor={{ fill: 'transparent' }} />
        
        <Legend 
          verticalAlign="top" 
          align="left" 
          iconType="plainline" 
          wrapperStyle={{ paddingBottom: '40px', fontSize: '14px', color: '#666' }} 
        />

        {/* Aapki image ke mutabiq 3 Blue Shades */}
        <Bar dataKey="Profit" stackId="revenue" fill="#007bff" />   {/* Dark Blue */}
        <Bar dataKey="Shipping" stackId="revenue" fill="#4ea1ff" /> {/* Medium Blue */}
        <Bar dataKey="Tax" stackId="revenue" fill="#a5d1ff" />      {/* Light Blue */}
      </BarChart>
    </div>
  );
};

export default Chart;
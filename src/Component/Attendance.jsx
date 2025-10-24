import React, { useState } from 'react';
import { BiSolidUserRectangle } from "react-icons/bi";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const item = [
  {date:"1/9/2025",checkIn:15,checkOut:18},
  {date:"2/9/2025",checkIn:12,checkOut:18},
]
const Attendance = () => {
        const [data, setData] = useState(item)
        const data1 = [
    { name: "High - 2013", data: [28, 29, 33, 36, 32, 32, 33] },
    { name: "Low - 2013", data: [12, 11, 14, 18, 17, 13, 13] }
  ];
  const data2 = [
    { name: "High - 2013", data: [20, 22, 25, 27, 26, 24, 23] },
    { name: "Low - 2013", data: [10, 12, 13, 15, 14, 12, 11] }
  ];

  const options = {
    chart: { height: 350, type: 'line' },
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] }
    // ...other options...
  };

  const [series, setSeries] = useState(data1);
  return (
    <div className='attendance  p-3 m-5 pb-1 rounded-4 '>
         <div className="head-three d-flex justify-content-between gap-1 pb-2">
           <div className="one">
             <h5 className='att'>Attendance</h5>
           </div>
           <div className="two d-flex gap-3 ">
             <button className="btn border fw-semibold yellow-btn" onClick={() => setSeries(data1)}>1W</button>
             <button className="btn border fw-semibold bg-success text-white yellow-btn" onClick={() => setSeries(data1)}>1m</button>
             <button className="btn border fw-semibold bg-success text-white yellow-btn" onClick={() => setSeries(data2)}>3m</button>
             <button className="btn border fw-semibold bg-success text-white yellow-btn">6m</button>
             <button className="btn border fw-semibold bg-success text-white yellow-btn">9m</button>
             <button className="btn border fw-semibold bg-success text-white yellow-btn">1y</button>  
           </div>
         </div>
          <ResponsiveContainer width="98%" height={250} >
         <LineChart
           data={data}
         >
           <CartesianGrid strokeDasharray="3 3" />
           <XAxis dataKey="date" stroke='rgb(46, 84, 63)' />
           <YAxis />
           <Tooltip />
           <Legend />
           <Line type="monotone" dataKey="checkIn" stroke="green" />
           <Line type="monotone" dataKey="checkOut" stroke="red" />
         </LineChart>
       </ResponsiveContainer>
         </div>
  );
};

export default Attendance;




import React, { useState } from 'react'
import Nav from './Nav'
import { AiFillThunderbolt } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { RiUserAddFill } from "react-icons/ri";
import { FaFileAlt } from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";
import { FaUsersCog } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';``
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CalendarPage from './CalendarPage';

const item = [
  {date:"13/10/2025",checkIn:8,checkOut:17},
  {date:"14/10/2025",checkIn:8,checkOut:16},
]

const Home = () => {



  let navigate=useNavigate()

  let homepage=()=>{
      navigate("/profile")
  }
    let calendarpage=()=>{
      navigate("/calendar")
  }
    let holidaypage=()=>{
      navigate("/holiday")
  }
    let leavepage=()=>{
      navigate("/leave")
  }
    let taskpage=()=>{
      navigate("/task")
  }
    let reportpage=()=>{
      navigate("/attendance")
  }

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
  
        <div className="container-fluid px-4 py-3 home-box">
          <div className="row ">
            
                <div className="col-12 col-sm-12 col-lg-3 mb-3 dove h-100">
                  <div className="profile-box p-3 rounded-4 ">
                    <h5 className='pb-2 d-flex gap-2'><span><AiFillThunderbolt className='svg-color'/></span>Quick Access</h5>
                    <div className="profile-box-section d-flex gap-3">
                      <div className="col-12 col-lg-4 rounded-4 d-flex flex-column justify-content-center bg-light profile-box-one " onClick={homepage}>
                            <span className='pt-2 fs-5'><FaUser className='svg-color'/></span>
                            <p className='pt-2 mb-1 fs-6 fw-semibold'>Profile</p>
                    </div>
                    <div className="col-12 col-lg-4 rounded-4 d-flex flex-column justify-content-center bg-light profile-box-one " onClick={calendarpage}>
                            <span className='pt-1 fs-4'><MdCalendarMonth className='svg-color'/></span>
                            <p className='pt-2 mb-1 fs-6 fw-semibold'>Calendar</p>
                    </div>
                    <div className="col-12 col-lg-4 rounded-4 d-flex flex-column justify-content-center bg-light profile-box-one " onClick={holidaypage}>
                            <span className='pt-2 fs-5'><RiUserAddFill className='svg-color'/></span>
                            <p className='pt-2 mb-1 fs-6 fw-semibold'>Holiday</p>
                    </div>
                     <div className="col-12 col-lg-4 rounded-4 d-flex flex-column justify-content-center bg-light profile-box-one " onClick={leavepage}>
                            <span className='pt-2 fs-5'><FaFileAlt className='svg-color'/></span>
                            <p className='pt-2 mb-1 fs-6 fw-semibold'>Leave</p>
                    </div>
                    <div className="col-12 col-lg-4 rounded-4 d-flex flex-column justify-content-center bg-light profile-box-one " onClick={taskpage}>
                            <span className='pt-2 fs-5'><FaChalkboardUser className='svg-color'/></span>
                            <p className='pt-2 mb-1 fs-6 fw-semibold'>Task</p>
                    </div>
                    <div className="col-12 col-lg-4 rounded-4 d-flex flex-column justify-content-center bg-light profile-box-one " onClick={reportpage}>
                            <span className='pt-2 fs-5'><FaUsersCog className='svg-color'/></span>
                            <p className='pt-2 mb-1 fs-6 fw-semibold'>My Report</p>
                    </div> 
                    </div>
                  </div>
                </div>
     
                <div className="col-12 col-sm-12 col-lg-4 mb-3 dove pe-0">
                    <div className="row task-box ">
                      <div className="row ps-3 p-0">
                        <div className="col col-12 col-sm-12 col-lg-3 w-100 p-0 h-100">
                          <div className="Task-box-head w-100 p-3 rounded-4 ">
                            <h5 className='pb-2'>Tasks</h5>
                            <div className="task-box-section d-flex gap-3 w-100 text-white">
                              <div className="col col-lg-4 task-color-box-one d-flex p-2 rounded-4">
                                <h6 className='fs-5 pt-2'>0</h6>
                                <p className='m-0'>Today Task</p>
                              </div>
                              <div className="col col-lg-4 task-color-box-two  d-flex p-2 rounded-4">
                                <h6 className='fs-5 pt-2'>0</h6>
                                <p className='m-0'>Yesterday Pending</p>
                              </div>
                              <div className="col col-lg-4 task-color-box-three d-flex p-2 rounded-4">
                                <h6 className='fs-5 pt-2'>0</h6>
                                <p className='m-0'>Total Pending</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                        <div className="row ps-3 p-0">
                        <div className="col col-12 col-sm-12 col-lg-3 w-100 p-0 h-100">
                          <div className="Task-box-head w-100 p-3 rounded-4 ">
                            <h5 className='pb-2'>Leave</h5>
                            <div className="task-box-section d-flex gap-3 w-100 text-white">
                              <div className="col col-lg-4 task-color-box-four d-flex p-2 rounded-4">
                                <h6 className='fs-5 pt-2'>0</h6>
                                <p className='m-0'>Total Leave</p>
                              </div>
                              <div className="col col-lg-4 task-color-box-five  d-flex p-2 rounded-4">
                                <h6 className='fs-5 pt-2'>0</h6>
                                <p className='m-0'>Balance Leave</p>
                              </div>
                              <div className="col col-lg-4 task-color-box-six d-flex p-2 rounded-4">
                                <h6 className='fs-5 pt-2' >0</h6>
                                <p className='m-0'>Leave Taken</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                        {/* <div className="row bg-light">
                        <div className="col col-* p-3 bg-info"  >
                          <div className="Task-box-head p-3 rounded-4">
                            <h5 className='pb-2'>Task</h5>
                            <div className="row p-2 bg-primary">
                              <div className="col task-color-box-four d-flex p-2 m-2 rounded-4">
                                <h6 className='fs-5'>0</h6>
                                <p className='m-0'>Today Task</p>
                              </div>
                              <div className="col col-lg-4 task-color-box-five  d-flex m-2 p-2 rounded-4">
                                <h6 className='fs-5'>0</h6>
                                <p className='m-0'>Yesterday Pending</p>
                              </div>
                              <div className="col col-lg-4 task-color-box-six d-flex p-2 m-2 rounded-4">
                                <h6 className='fs-5' >0</h6>
                                <p className='m-0'>Total Pending</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      
                    </div>
                </div>
                          
                <div className="col-12 col-sm-12 col-lg-5 dove">
                  <div className='attendance  p-3 pb-1 rounded-4'>
      <div className="head-three d-flex justify-content-between pb-2">
        <div className="one">
          <h5 className='att'>Attendance</h5>
        </div>
        <div className="two d-flex gap-3 ">
          <button className="btn border fw-semibold  yellow-btn" onClick={() => setSeries(data1)}>1W</button>
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
          </div>

          
             <div className="row  m-0 p-0">
                <div className="col-12 col-sm-12 col-lg-3 mb-3 dove">
                  <div className="holiday-box p-3 rounded-4 w-100 ">
                    <h5 className='pb-2'>Upcoming holidays</h5>
                        <div className="holiday-content gap-2 d-flex">
                             <div className="holiday-box-one d-flex">
                               <div className="holiday-days rounded-4 p-1 bg-secondary-subtle ">
                                <center>
                                  <p className='m-0 text-secondary'>OCT</p>
                                <h6 className='fw-semibold'>20</h6> 
                                </center>
                              </div>
                              <div className="holiday-text ps-4 pt-3">
                                <h6>Diwali</h6>
                              </div>
                             </div>
                              <div className="holiday-box-one d-flex">
                               <div className="holiday-days rounded-4 p-1 bg-secondary-subtle ">
                                <center>
                                  <p className='m-0 text-secondary'>DEC</p>
                                <h6 className='fw-semibold'>25</h6> 
                                </center>
                              </div>
                              <div className="holiday-text ps-4 pt-3">
                                <h6>Christmas</h6>
                              </div>
                             </div>
                        </div>
                </div>
                </div>
                <div className="col-12 col-sm-12 col-lg-4 mb-3 dove p-0">
                        <div className="leave-box d-flex justify-content-between w-100 gap-3">
                          <div className="recent-leave p-3 rounded-4 w-100 overflow-auto">
                               <h5 className='pb-2'>My Recent Leaves</h5>
                          </div>
                          <div className="emp-leave p-3 rounded-4 w-100 overflow-auto">
                               <h5 className='pb-2'>Emp Leaves</h5>
                          </div>
                        </div>
                </div>
                <div className="col-12 col-sm-12 col-lg-5 mb-3 dove">
                  <CalendarPage/>
                </div>
          </div>
          </div>
        </div>

  )
}

export default Home
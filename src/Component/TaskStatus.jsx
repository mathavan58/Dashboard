import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io"
import { BsFillExclamationCircleFill } from "react-icons/bs"
import { FaBookReader } from "react-icons/fa"
import { FaCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const TaskStatus = () => {
    
  let navigate=useNavigate()

  const taskPage=()=>{
    setTimeout(() => {
    navigate('/task')
      // alert("Action after 1 second!");
    }, 200);
  }
    
  return (
    <div className="Task px-4 py-4 w-100" id='task-status'>
      <div className="row g-2 align-items-center text-white rounded-4 p-2" id="Task-head">
        <div className="col-12 col-md-4">
          <form className="d-flex align-items-center bg-white text-black rounded-3 p-1 " id='task-connect'>
            <input id="task-input" type="text" className="form-controls rounded w-100 p-1" placeholder="Project RMS"/>
            <label htmlFor="task-input"><span className="text-secondary"><IoIosArrowDown className="fs-5 pb-1" /></span></label>
            {/* <div className="input-content">
                <ul className='task-list'>
                    <li>E-services</li>
                    <li>Bank-management</li>
                    <li>Online-games</li>
                </ul>
            </div> */}
          </form>
        </div>
        <div className="col-12 col-md-4">
          <form className="d-flex align-items-center bg-white text-black rounded-3 p-1" id='task-connect'>
            <input type="text" id="task-Employee" className="form-controls rounded w-100 p-1" placeholder="Select Employee" />
            <label htmlFor="task-Employee"><span className="text-secondary"><IoIosArrowDown className="fs-5 pb-1" /></span></label>
            {/* <div className="input-content">
                <ul className='task-list'>
                    <li>Siva</li>
                    <li>Mathavan</li>
                    <li>Mathan</li>
                </ul>
            </div> */}
          </form>
        </div>
        <div className="col-12 col-md-4 ps-5">
          <div className="form-check form-switch mt-1 mb-0">
  <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={taskPage}/>
  <label className="form-check-label" htmlFor="switchCheckDefault">Status</label>
</div>
        </div>
      </div>


      <div className="row row-cols-5 g-2 pt-4" id='task-rows-align'>
        <div className="col" id='box-size-status'>
          <div className="bg-light p-3 border rounded-4 h-100">
            <h6 className="d-flex text-secondary gap-1 mb-0">
              <span className="text-secondary pe-2"><FaCircle className='text-success icon-big'/></span>
              OPEN <span className="badge text-bg-primary rounded-circle ">0</span>
            </h6>
            <div className="task-emoji h-50 mt-3">
              <span className="task-emoji-read"><FaBookReader /></span>
            </div>
          </div>
        </div>

        <div className="col" id='box-size-status'>
          <div className="bg-light p-3 border rounded-4 h-100" id='stutas-box'>
            <h6 className="d-flex text-secondary gap-1 mb-0" >
              <span className="text-success pe-2"><FaCircle className='text-primary icon-big'/></span>
              IN PROGRESS <span className="badge text-bg-primary rounded-circle ">0</span>
            </h6>
            <div className="task-emoji h-50 mt-3">
              <span className="task-emoji-read"><FaBookReader /></span>
            </div>
          </div>
        </div>

        <div className="col" id='box-size-status'>  
          <div className="bg-light p-3 border rounded-4 h-100">
            <h6 className="d-flex text-secondary gap-1 mb-0">
              <span className="text-warning pe-2"><FaCircle className='darkviolet icon-big'/></span>
              IN REVIEW <span className="badge text-bg-primary rounded-circle ">0</span>
            </h6>
            <div className="task-emoji h-50 mt-3">
              <span className="task-emoji-read"><FaBookReader /></span>
            </div>
          </div>
        </div>

        <div className="col " id='box-size-status'>
          <div className="bg-light p-3 border rounded-4 h-100">
            <h6 className="d-flex text-secondary gap-1 mb-0">
              <span className="text-danger pe-2"><FaCircle className='text-warning icon-big'/></span>
              DELAYED <span className="badge text-bg-primary rounded-circle ">0</span>
            </h6>
            <div className="task-emoji h-50 mt-3">
              <span className="task-emoji-read"><FaBookReader /></span>
            </div>
          </div>
        </div>
        <div className="col" id='box-size-status'>
          <div className="bg-light p-3 border rounded-4 h-100">
            <h6 className="d-flex text-secondary gap-1 mb-0">
              <span className="text-danger pe-2"><FaCircle className='text-danger icon-big'/></span>
              CLOSED <span className="badge text-bg-primary rounded-circle ">0</span>
            </h6>
            <div className="task-emoji h-50 mt-3">
              <span className="task-emoji-read"><FaBookReader /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskStatus

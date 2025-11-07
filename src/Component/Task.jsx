import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io"
import { BsFillExclamationCircleFill } from "react-icons/bs"
import { FaBookReader } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'

const Task = () => {
  let navigate=useNavigate()
  const [radio, setRadio] = useState(false)

  const handleError = () => {
    setRadio(prev => !prev)
    setTimeout(() => {
      navigate('/taskstatus')
    }, 150);
  }
  
  return (
    <div className="Task container-fluid px-4 py-4">
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
          <div className="form-check mt-2">
            <input className="form-check-input" type="radio" name="priority" id="priorityRadio" onClick={handleError} checked={radio} readOnly />
            <label className="form-check-label ps-2" htmlFor="priorityRadio">Priority</label>
          </div>
        </div>
      </div>
      <div className="row pt-4 g-3">
        <div className="col-12 col-sm-6 col-lg-3 d-flex">
          <div className="bg-light p-3 border rounded-4 flex-fill h-100">
            <h6 className="d-flex text-secondary gap-1 mb-0">
              <span className="text-secondary pe-2"><BsFillExclamationCircleFill /></span>
              NONE <span className="badge text-bg-primary rounded-circle ">0</span>
            </h6>
            <div className="task-emoji h-50 mt-3">
              <span className="task-emoji-read"><FaBookReader /></span>
            </div>
          </div>
        </div>

  <div className="col-12 col-sm-6 col-lg-3 d-flex">
          <div className="bg-success-subtle p-3 border rounded-4 flex-fill h-100">
            <h6 className="d-flex text-secondary gap-1 mb-0">
              <span className="text-success pe-2"><BsFillExclamationCircleFill /></span>
              LOW <span className="badge text-bg-primary rounded-circle ">0</span>
            </h6>
            <div className="task-emoji h-50 mt-3">
              <span className="task-emoji-read"><FaBookReader /></span>
            </div>
          </div>
        </div>

  <div className="col-12 col-sm-6 col-lg-3 d-flex">
          <div className="bg-warning-subtle p-3 border rounded-4 flex-fill h-100">
            <h6 className="d-flex text-secondary gap-1 mb-0">
              <span className="text-warning pe-2"><BsFillExclamationCircleFill /></span>
              MEDIUM <span className="badge text-bg-primary rounded-circle ">0</span>
            </h6>
            <div className="task-emoji h-50 mt-3">
              <span className="task-emoji-read"><FaBookReader /></span>
            </div>
          </div>
        </div>

  <div className="col-12 col-sm-6 col-lg-3 d-flex">
          <div className="bg-danger-subtle p-3 border rounded-4 flex-fill h-100">
            <h6 className="d-flex text-secondary gap-1 mb-0">
              <span className="text-danger pe-2"><BsFillExclamationCircleFill /></span>
              HIGH <span className="badge text-bg-primary rounded-circle ">0</span>
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

export default Task

import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { BsBagPlusFill } from "react-icons/bs";
import { FaHandHoldingHand } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { FaPenSquare } from "react-icons/fa";
import Slider from "react-slick";


const Profile = () => {

     var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='container-fluid pe-0 m-3'>
      <div className="row p-3 pb-0">
        <div className="col-lg-7 d-flex flex-column profile-image-connection rounded-3 "> 
          <div className="employee-photo mt-5 mb-4 me-3 ms-2 d-flex  align-item-center rounded p-2 ">
                  <p className='p-4 ps-2 m-2 employee-text-color'>use this place for to display Employee Photo,Full Name,Designation,Mail,Mobile No,Blood Group</p>
          </div>

          <div className="personal-details mt-2">
                  <div className="personal-details-head d-flex justify-content-between border-bottom border-2 me-3 ms-2">
                   <div className="personal-text d-flex gap-2">
                     <h6 className='text-primary svg-size-change'><FaUser /></h6>
                    <h6 className='mb-0 mt-1'>PERSONAL DETAILS</h6>
                   </div>
                      <h6 className='fs-4 m-0 text-primary'><FaPenSquare /></h6>
                  </div>
          </div>
        </div>

        <div className="col-lg-5 d-flex flex-column gap-2">
          <div className="education-details profile-image-connection rounded-4 p-2 ">
               <div className="personal-details-head d-flex justify-content-between border-bottom border-2 me-2 ms-2 pt-2">
                   <div className="personal-text d-flex gap-2 ">
                     <h6 className='text-primary svg-size-change'><FaUserGraduate /></h6>
                    <h6 className='mb-0 mt-1'>EDUCATION DETAILS</h6>
                   </div>
                      <h6 className='m-0 text-primary fs-4'><FaCirclePlus/></h6>
                  </div>
          </div>

          <div className="experience-details profile-image-connection rounded-4 p-2">
               <div className="personal-details-head d-flex justify-content-between border-bottom border-2 me-2 ms-2 pt-2">
                   <div className="personal-text d-flex gap-2 ">
                     <h6 className='text-primary svg-size-change'><BsBagPlusFill /></h6>
                    <h6 className='mb-0 mt-1'>EXPERIENCE DETAILS</h6>
                   </div>
                      <h6 className='m-0 text-primary fs-4'><FaCirclePlus /></h6>
                  </div>
          </div>
        </div>
      </div>

      <div className="row p-3 ">
        <div className="col-lg-7 p-0">
          <div className="profile-image-connection rounded px-3">
           <div className="my-benefits d-flex align-item-center gap-2 border-bottom border-2 pt-2">
                   {/* <div className="personal-text d-flex gap-2 "> */}
                    <h6 className='svg-size-change text-primary'><FaHandHoldingHand /></h6>
                    <h6 className=' mt-1 text-primary'>MY BENEFITS</h6>
                   {/* </div> */}
                  </div>
                   {/* <div className="slide-bar">
                    <h4>Pending</h4>
                   </div> */}
                   <div className="slider-container ">
      <Slider {...settings}>
       <div className="all-box d-flex justify-content-center align-items-center p-3 m-2 border rounded-4 gap-3">
         <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
       </div>
      </Slider>
    </div>
          </div>
        </div>
          <div className="col-lg-5 p-0">
            <div className="profile-image-connection rounded px-3 mx-3">
               <div className="my-benefits d-flex justify-content-between align-item-center gap-2 border-bottom border-2 pt-2">
                   <div className="personal-text d-flex gap-2 ">
                    <h6 className='svg-size-change text-primary'><FaUser /></h6>
                    <h6 className=' mt-1'>MY Documents</h6>
                   </div>
                   <div className="second-box">
                    <h5 className='text-primary fs-4 m-0'><FaCirclePlus /></h5>
                   </div>
                  </div>
                   <div className="slide-bar">
                    <h4>Pending</h4>
                   </div>
            </div>
        </div>
        </div>
      </div>
  )
}

export default Profile

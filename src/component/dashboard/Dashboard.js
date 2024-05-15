import React from 'react'
// import Links from './Links'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <div className="page-wrapper">
        <div className="content container-fluid" >

        <div className="page-header">
        <div className="row">
        <div className="col-sm-12">
        <div className="page-sub-header">
        <h3 className="page-title">Welcome Admin!</h3>
        <ul className="breadcrumb">
        <li className="breadcrumb-item">
          {/* <a href="index.html">Home</a> */}
          <Link to='/'>Home</Link>
        </li>
        {/* <li className="breadcrumb-item active">Admin</li> */}
        </ul>
        </div>
        </div>
        </div>
        </div>


        <div className="row">
        <div className="col-xl-3 col-sm-6 col-12 d-flex">
        <div className="card bg-comman w-100">
        <div className="card-body">
        <div className="db-widgets d-flex justify-content-between align-items-center">
        <div className="db-info">
        <h6>Students</h6>
        <h3>50055</h3>
        </div>
        <div className="db-icon">
        <img src="assets/img/icons/dash-icon-01.svg" alt="Dashboard Icon"/>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12 d-flex">
        <div className="card bg-comman w-100">
        <div className="card-body">
        <div className="db-widgets d-flex justify-content-between align-items-center">
        <div className="db-info">
        <h6>All course</h6>
        <h3>50+</h3>
        </div>
        <div className="db-icon">
        <img src="assets/img/icons/dash-icon-02.svg" alt="Dashboard Icon"/>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12 d-flex">
        <div className="card bg-comman w-100">
        <div className="card-body">
        <div className="db-widgets d-flex justify-content-between align-items-center">
        <div className="db-info">
        <h6>Courses</h6>
        <h3>30+</h3>
        </div>
        <div className="db-icon">
        <img src="assets/img/icons/dash-icon-03.svg" alt="Dashboard Icon"/>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12 d-flex">
        <div className="card bg-comman w-100">
        <div className="card-body">
        <div className="db-widgets d-flex justify-content-between align-items-center">
        <div className="db-info">
        <h6>Revenue</h6>
        <h3>$505</h3>
        </div>
        <div className="db-icon">
        <img src="assets/img/icons/dash-icon-04.svg" alt="Dashboard Icon"/>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>


        <div className="row">

        <div className="col-xl-6 d-flex">



        </div>
        </div>



        </div>



        </div>
{/* <Links/> */}
    </div>
  )
}

export default Dashboard
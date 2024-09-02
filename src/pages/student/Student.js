import React from 'react'
import { Link } from 'react-router-dom'

const Student = () => {
  return (
    <div>
        <div class="page-header">
            <div class="row">
            <div class="col-sm-12">
            <div class="page-sub-header">
            <h3 class="page-title">Students</h3>
            <ul class="breadcrumb">
            <li class="breadcrumb-item">
                {/* <a href="students.html">Student</a> */}
                <Link to='/studentlist'>Student</Link>
            </li>
            <li class="breadcrumb-item active">All Students</li>
            </ul>
            </div>
            </div>
            </div>
            </div>
        <div className="page-wrapper">
<div className="content container-fluid">

<div className="page-header">
<div className="row">
<div className="col-sm-12">
<div className="page-sub-header">
<h3 className="page-title">Welcome student!</h3>
<ul className="breadcrumb">
<li className="breadcrumb-item">
{/* <a href="index.html">Home</a> */}
{/* <Link to='/'>Home</Link> */}
</li>
{/* <li className="breadcrumb-item active">Student</li> */}
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
<h6>All Courses</h6>
<h3>50+</h3>
</div>
<div className="db-icon">
<img src="assets/img/icons/teacher-icon-01.svg" alt="Dashboard Icon"/>
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
<h6>All Projects</h6>
<h3>60</h3>
</div>
<div className="db-icon">
<img src="assets/img/icons/teacher-icon-02.svg" alt="Dashboard Icon"/>
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
<h6>project</h6>
<h3>50</h3>
</div>
<div className="db-icon">
<img src="assets/img/icons/student-icon-01.svg" alt="Dashboard Icon"/>
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
<h6>course</h6>
<h3>20</h3>
</div>
<div className="db-icon">
<img src="assets/img/icons/student-icon-02.svg" alt="Dashboard Icon"/>
</div>
</div>
</div>
</div>
</div>
</div>



</div>

<footer>
<p>COPYRIGHT © 2024 parachictacademy.</p>
</footer>

</div>
    </div>
  )
}

export default Student
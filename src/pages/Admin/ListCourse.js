import React from 'react'
import { Link } from 'react-router-dom'

const ListCourse = () => {
  return (
    <div>
      <div className="page-wrapper">
          <div className="content container-fluid">

      <div className="page-header">
      <div className="row align-items-center">
      <div className="col">
      <h3 className="page-title">Courses</h3>
      <ul className="breadcrumb">
      {/* <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
      <li className="breadcrumb-item active">Subjects</li> */}
      </ul>
      </div>
      </div>
      </div>

      <div className="student-group-form">
      <div className="row">
      <div className="col-lg-3 col-md-6">
      <div className="form-group">
      <input type="text" className="form-control" placeholder="Search by ID ..."/>
      </div>
      </div>
      <div className="col-lg-3 col-md-6">
      <div className="form-group">
      <input type="text" className="form-control" placeholder="Search by Name ..."/>
      </div>
      </div>
      <div className="col-lg-4 col-md-6">
      <div className="form-group">
      <input type="text" className="form-control" placeholder="Search by className ..."/>
      </div>
      </div>
      <div className="col-lg-2">
      <div className="search-student-btn">
      <button type="btn" className="btn btn-primary">Search</button>
      </div>
      </div>
      </div>
      </div>
      <div className="row">
      <div className="col-sm-12">
      <div className="card card-table">
      <div className="card-body">

      <div className="page-header">
      <div className="row align-items-center">
      <div className="col">
      <h3 className="page-title">Course</h3>
      </div>
      <div className="col-auto text-end float-end ms-auto download-grp">
      {/* <a href="#" className="btn btn-outline-primary me-2"><i className="fas fa-download"></i> Download</a> */}
      <Link to='/addcourse' className="btn btn-primary"><i className="fas fa-plus"></i></Link>
      </div>
      </div>
      </div>

      <div className="table-responsive">
      <table className="table border-0 star-student table-hover table-center mb-0 datatable table-striped">
      <thead className="student-thread">
      <tr>
      <th>
      <div className="form-check check-tables">
      <input className="form-check-input" type="checkbox" value="something"/>
      </div>
      </th>
      <th>ID</th>
      <th>Course Name</th>
      <th>Course price</th>
      <th className="text-end">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>
      <div className="form-check check-tables">
      <input className="form-check-input" type="checkbox" value="something"/>
      </div>
      </td>
      <td>PRE2209</td>
      <td>
      <h2>
      <a>Web design</a>
      </h2>
      </td>
      <td>20000</td>
      <td className="text-end">
      <div className="actions">
      <a href="javascript:;" className="btn btn-sm bg-success-light me-2">
      <i className="feather-delete"></i>
      </a>
      <Link to='/editcourse' className="btn btn-sm bg-danger-light">
      <i className="feather-edit"></i>
      </Link>
      </div>
      </td>
      </tr>
      <tr>
      <td>
      <div className="form-check check-tables">
      <input className="form-check-input" type="checkbox" value="something"/>
      </div>
      </td>
      <td>PRE2213</td>
      <td>
      <h2>
      <a>Python</a>
      </h2>
      </td>
      <td>60000</td>
      <td className="text-end">
      <div className="actions">
      <a href="javascript:;" className="btn btn-sm bg-success-light me-2">
      <i className="feather-delete"></i>
      </a>
      <Link to='/editcourse' className="btn btn-sm bg-danger-light">
      <i className="feather-edit"></i>
      </Link>
      </div>
      </td>
      </tr>
      <tr>
      <td>
      <div className="form-check check-tables">
      <input className="form-check-input" type="checkbox" value="something"/>
      </div>
      </td>
      <td>PRE2143</td>
      <td>
      <h2>
      <a>Data analysis</a>
      </h2>
      </td>
      <td>250000</td>
      <td className="text-end">
      <div className="actions">
      <a href="javascript:;" className="btn btn-sm bg-success-light me-2">
      <i className="feather-delete"></i>
      </a>
      <Link to='/editcourse' className="btn btn-sm bg-danger-light">
      <i className="feather-edit"></i>
      </Link>
      </div>
      </td>
      </tr>
      <tr>
      <td>
      <div className="form-check check-tables">
      <input className="form-check-input" type="checkbox" value="something"/>
      </div>
      </td>
      <td>PRE2431</td>
      <td>
      <h2>
      <a>power BI</a>
      </h2>
      </td>
      <td>100000</td>
      <td className="text-end">
      <div className="actions">
      <a href="javascript:;" className="btn btn-sm bg-success-light me-2">
      <i className="feather-delete"></i>
      </a>
      <Link to='/editcourse' className="btn btn-sm bg-danger-light">
      <i className="feather-edit"></i>
      </Link>
      </div>
      </td>
      </tr>
      <tr>
      <td>
      <div className="form-check check-tables">
      <input className="form-check-input" type="checkbox" value="something"/>
      </div>
      </td>
      <td>PRE1534</td>
      <td>
      <h2>
      <a>python</a>
      </h2>
      </td>
      <td>50000</td>
      <td className="text-end">
      <div className="actions">
      <a href="javascript:;" className="btn btn-sm bg-success-light me-2">
      <i className="feather-delete"></i>
      </a>
      <Link to='/editcourse' className="btn btn-sm bg-danger-light">
      <i className="feather-edit"></i>
      </Link>
      </div>
      </td>
      </tr>
      <tr>
      <td>
      <div className="form-check check-tables">
      <input className="form-check-input" type="checkbox" value="something"/>
      </div>
      </td>
      <td>PRE2153</td>
      <td>
      <h2>
      <a>microsoft word</a>
      </h2>
      </td>
      <td>30000</td>
      <td className="text-end">
      <div className="actions">
      <a href="javascript:;" className="btn btn-sm bg-success-light me-2">
      <i className="feather-delete"></i>
      </a>
      <Link to='/editcourse' className="btn btn-sm bg-danger-light">
      <i className="feather-edit"></i>
      </Link>
      </div>
      </td>
      </tr>
      </tbody>
      </table>
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

export default ListCourse
import React from 'react'

const StudentEdit = () => {
  return (
    <div>
     <div className="page-wrapper">
        <div className="content container-fluid">
        <div className="page-header">
        <div className="row align-items-center">
        <div className="col-sm-12">
        <div className="page-sub-header">
        <h3 className="page-title">Edit Students</h3>
        <ul className="breadcrumb">
        {/* <li className="breadcrumb-item"><a href="students.html">Student</a></li> */}
        {/* <li className="breadcrumb-item active">Edit Students</li> */}
        </ul>
        </div>
        </div>
        </div>
        </div>

        <div className="row">
        <div className="col-sm-12">
        <div className="card comman-shadow">
        <div className="card-body">
        <form>
        <div className="row">
        <div className="col-12">
        <h5 className="form-title student-info">Student Information <span><a href="javascript:;"><i className="feather-more-vertical"></i></a></span></h5>
        </div>
        <div className="col-12 col-sm-4">
        <div className="form-group local-forms">
        <label>First Name <span className="login-danger">*</span></label>
        <input className="form-control" type="text" value="John Doe"/>
        </div>
        </div>
        <div className="col-12 col-sm-4">
        <div className="form-group local-forms">
        <label>Last Name <span className="login-danger">*</span></label>
        <input className="form-control" type="text" value="Stephen"/>
        </div>
        </div>
        <div className="col-12 col-sm-4">
        <div className="form-group local-forms">
        <label>Gender <span className="login-danger">*</span></label>
        <select className="form-control select">
        <option>Select Gender</option>
        <option>Female</option>
        <option>Male</option>
        <option>Others</option>
        </select>
        </div>
        </div>
        {/* <div className="col-12 col-sm-4">
        <div className="form-group local-forms calendar-icon">
        <label>Date Of Birth <span className="login-danger">*</span></label>
        <input className="form-control datetimepicker" type="text" placeholder="DD-MM-YYYY"/>
        </div>
        </div> */}
        {/* <div className="col-12 col-sm-4">
        <div className="form-group local-forms">
        <label>Roll </label>
        <input className="form-control" type="text" value="12450687"/>
        </div>
        </div> */}
        {/* <div className="col-12 col-sm-4">
        <div className="form-group local-forms">
        <label>Blood Group <span className="login-danger">*</span></label>
        <select className="form-control select">
        <option>Please Select Group </option>
        <option>B+</option>
        <option>A+</option>
        <option>O+</option>
        </select>
        </div>
        </div> */}
        {/* <div className="col-12 col-sm-4">
        <div className="form-group local-forms">
        <label>Religion <span className="login-danger">*</span></label>
        <select className="form-control select">
        <option>Please Select Religion </option>
        <option>Hindu</option>
        <option>Christian</option>
        <option>Others</option>
        </select>
        </div>
        </div> */}
        <div className="col-12 col-sm-4">
        <div className="form-group local-forms">
        <label>E-Mail <span className="login-danger">*</span></label>
        <input className="form-control" type="text" value="example@gmail.com"/>
        </div>
        </div>
        <div className="col-12 col-sm-4">
        <div className="form-group local-forms">
        <label>Course <span className="login-danger">*</span></label>
        <select className="form-control select">
        <option>Please Select Course </option>
        <option>web design</option>
        <option>python</option>
        <option>Ui/uX Design</option>
        </select>
        </div>
        </div>
        <div className="col-12 col-sm-4">
        <div className="form-group local-forms">
        <label>How do you hear about us <span className="login-danger">*</span></label>
        <select className="form-control select">
        <option>Please Select here </option>
        <option>Internet</option>
        <option>online</option>
        <option></option>
        </select>
        </div>
        </div>
        {/* <div className="col-12 col-sm-4">
        <div className="form-group local-forms">
        <label>Admission ID </label>
        <input className="form-control" type="text" value="1426539"/>
        </div>
        </div> */}
        <div className="col-12 col-sm-4">
        <div className="form-group local-forms">
        <label>Phone </label>
        <input className="form-control" type="text" value="+1 888 888 8888"/>
        </div>
        </div>
        <div className="col-12 col-sm-4">
        <div className="form-group students-up-files">
        <label>Upload Student Photo (150px X 150px)</label>
        <div className="uplod">
        <label className="file-upload image-upbtn mb-0">
        Choose File <input type="file"/>
        </label>
        </div>
        </div>
        </div>
        <div className="col-12">
        <div className="student-submit">
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        </div>
        </div>
        </form>
        </div>
        </div>
        </div>
</div>
</div>
</div>
    </div>
  )
}

export default StudentEdit
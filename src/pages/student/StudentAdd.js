import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const StudentAdd = () => {
  const url = 'http://localhost:5000/api/students/create-student';
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    gender: '',
    email: '',
    phone: '',
    courses: '',
    photo: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        toast.success('Student created successfully');
        console.log(formData);
      }
    } catch (error) {
      const errorMessage = error.response && error.response.data && error.response.data.error
        ? error.response.data.error
        : 'An unexpected error occurred';
      toast.error(`Error: ${errorMessage}`);
    }
    setFormData({
      firstname: '',
      lastname: '',
      gender: '',
      email: '',
      phone: '',
      courses: '',
      photo: ''
    })
  };

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col-sm-12">
              <div className="page-sub-header">
                <h3 className="page-title">Add Students</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card comman-shadow">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12">
                      <h5 className="form-title student-info">
                        Student Information <span><a href="#" onClick={(e) => e.preventDefault()}><i className="feather-more-vertical"></i></a></span>
                      </h5>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="form-group local-forms">
                        <label>First Name <span className="login-danger">*</span></label>
                        <input 
                          className="form-control" 
                          type="text" 
                          placeholder="Enter First Name"
                          name="firstname"
                          value={formData.firstname}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="form-group local-forms">
                        <label>Last Name <span className="login-danger">*</span></label>
                        <input 
                          className="form-control" 
                          type="text" 
                          placeholder="Enter Last Name"
                          name="lastname"
                          value={formData.lastname}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="form-group local-forms">
                        <label>Gender <span className="login-danger">*</span></label>
                        <select 
                          className="form-control select"
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                        >
                          <option value="">Select Gender</option>
                          <option value="Female">Female</option>
                          <option value="Male">Male</option>
                          <option value="Others">Others</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="form-group local-forms">
                        <label>E-Mail <span className="login-danger">*</span></label>
                        <input 
                          className="form-control" 
                          type="email" 
                          placeholder="Enter Email Address"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="form-group local-forms">
                        <label>Course <span className="login-danger">*</span></label>
                        <input 
                          className="form-control" 
                          type="text" 
                          placeholder="Enter Course"
                          name="courses"
                          value={formData.courses}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="form-group local-forms">
                        <label>Phone </label>
                        <input 
                          className="form-control" 
                          type="text" 
                          placeholder="Enter Phone Number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="form-group students-up-files">
                        <label>Upload Student Photo (150px X 150px)</label>
                        <div className="uplod">
                          <label className="file-upload image-upbtn mb-0">
                            Choose File <input type="file" name="photo" onChange={handleChange}/>
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
  )
}

export default StudentAdd;

import React from 'react'
const Studentview = () => {
  return (
    <div>
        <div className="page-wrapper">
            <div className="content container-fluid">
            <div className="page-header">
            <div className="row">
            <div className="col-sm-12">
            <div className="page-sub-header">
            <h3 className="page-title">Student Details</h3>
            <ul className="breadcrumb">
            <li className="breadcrumb-item"><a href="students.html">Student</a></li>
            <li className="breadcrumb-item active">Student Details</li>
            </ul>
            </div>
            </div>
            </div>
            </div>
            <div className="card">
            <div className="card-body">
            <div className="row">
            <div className="col-md-12">
            <div className="about-info">
            <h4>Profile <span><a href="javascript:;"><i className="feather-more-vertical"></i></a></span></h4>
            </div>
            <div className="student-profile-head">
            <div className="profile-bg-img">
            <img src="assets/img/profile-bg.jpg" alt="Profile"/>
            </div>
            <div className="row">
            <div className="col-lg-4 col-md-4">
            <div className="profile-user-box">
            <div className="profile-user-img">
            <img src="assets/img/profile-user.jpg" alt="Profile"/>
            <div className="form-group students-up-files profile-edit-icon mb-0">
            <div className="uplod d-flex">
            <label className="file-upload profile-upbtn mb-0">
            <i className="feather-edit-3"></i><input type="file"/>
            </label>
            </div>
            </div>
            </div>
            <div className="names-profiles">
            <h4>Bruce Willis</h4>
            <h5>Computer Science</h5>
            </div>
            </div>
            </div>
            <div className="col-lg-4 col-md-4 d-flex align-items-center">
            <div className="follow-group">
            <div className="students-follows">
            <h5>Followers</h5>
            <h4>2850</h4>
            </div>
            <div className="students-follows">
            <h5>Followers</h5>
            <h4>2850</h4>
            </div>
            <div className="students-follows">
            <h5>Followers</h5>
            <h4>2850</h4>
            </div>
            </div>
            </div>
            <div className="col-lg-4 col-md-4 d-flex align-items-center">
            <div className="follow-btn-group">
            <button type="submit" className="btn btn-info follow-btns">Follow</button>
            <button type="submit" className="btn btn-info message-btns">Message</button>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-lg-4">
            <div className="student-personals-grp">
            <div className="card">
            <div className="card-body">
            <div className="heading-detail">
            <h4>Personal Details :</h4>
            </div>
            <div className="personal-activity">
            <div className="personal-icons">
            <i className="feather-user"></i>
            </div>
            <div className="views-personal">
            <h4>Name</h4>
            <h5>Bruce Willis</h5>
            </div>
            </div>
            <div className="personal-activity">
            <div className="personal-icons">
            <img src="assets/img/icons/buliding-icon.svg" alt/>
            </div>
            <div className="views-personal">
            <h4>Department </h4>
            <h5>Computer Science</h5>
            </div>
            </div>
            <div className="personal-activity">
            <div className="personal-icons">
            <i className="feather-phone-call"></i>
            </div>
            <div className="views-personal">
            <h4>Mobile</h4>
            <h5>+91 89657 48512</h5>
            </div>
            </div>
            <div className="personal-activity">
            <div className="personal-icons">
            <i className="feather-mail"></i>
            </div>
            <div className="views-personal">
            <h4>Email</h4>
            {/* <h5><a href="https://preschool.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="7216131b010b32151f131b1e5c111d1f">[email&#160;protected]</a></h5> */}
            </div>
            </div>
            <div className="personal-activity">
            <div className="personal-icons">
            <i className="feather-user"></i>
            </div>
            <div className="views-personal">
            <h4>Gender</h4>
            <h5>Male</h5>
            </div>
            </div>
            <div className="personal-activity">
            <div className="personal-icons">
            <i className="feather-calendar"></i>
            </div>
            <div className="views-personal">
            <h4>Date of Birth</h4>
            <h5>22 Apr 1995</h5>
            </div>
            </div>
            <div className="personal-activity">
            <div className="personal-icons">
            <i className="feather-italic"></i>
            </div>
            <div className="views-personal">
            <h4>Language</h4>
            <h5>English, French, Bangla</h5>
            </div>
            </div>
            <div className="personal-activity mb-0">
            <div className="personal-icons">
            <i className="feather-map-pin"></i>
            </div>
            <div className="views-personal">
            <h4>Address</h4>
            <h5>480, Estern Avenue, New York</h5>
            </div>
            </div>
            </div>
            </div>
            </div>
            <div className="student-personals-grp">
            <div className="card mb-0">
            <div className="card-body">
            <div className="heading-detail">
            <h4>Skills:</h4>
            </div>
            <div className="skill-blk">
            <div className="skill-statistics">
            <div className="skills-head">
            <h5>Photoshop</h5>
            <p>90%</p>
            </div>
            <div className="progress mb-0">
            <div className="progress-bar bg-photoshop" role="progressbar" width={1000} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className="skill-statistics">
            <div className="skills-head">
            <h5>Code editor</h5>
            <p>75%</p>
            </div>
            <div className="progress mb-0">
            <div className="progress-bar bg-editor" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className="skill-statistics mb-0">
            <div className="skills-head">
            <h5>Illustrator</h5>
            <p>95%</p>
            </div>
            <div className="progress mb-0">
            <div className="progress-bar bg-illustrator" role="progressbar" style="width: 95%" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            <div className="col-lg-8">
            <div className="student-personals-grp">
            <div className="card mb-0">
            <div className="card-body">
            <div className="heading-detail">
            <h4>About Me</h4>
            </div>
            <div className="hello-park">
            <h5>Hello I am Daisy Parks</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur officia deserunt mollit anim id est laborum.</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
            </div>
            <div className="hello-park">
            <h5>Education</h5>
            <div className="educate-year">
            <h6>2008 - 2009</h6>
            <p>Secondary Schooling at xyz school of secondary education, Mumbai.</p>
            </div>
            <div className="educate-year">
            <h6>2011 - 2012</h6>
            <p>Higher Secondary Schooling at xyz school of higher secondary education, Mumbai.</p>
            </div>
            <div className="educate-year">
            <h6>2012 - 2015</h6>
            <p>Bachelor of Science at Abc College of Art and Science, Chennai.</p>
            </div>
            <div className="educate-year">
            <h6>2015 - 2017</h6>
            <p className="mb-0">Master of Science at Cdm College of Engineering and Technology, Pune.</p>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>

            <footer>
            <p>COPYRIGHT © 2023 DREAMSTECHNOLOGIES.</p>
            </footer>

            </div>
    </div>
  )
}

export default Studentview
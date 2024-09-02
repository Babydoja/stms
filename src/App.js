import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Dashboard from './component/dashboard/Dashboard';
import Navbar from './component/navbar/Navbar';
import Student from './pages/student/Student';
import Studentlist from './pages/student/Studentlist';
import Studentview from './pages/student/Studentview';
import StudentAdd from './pages/student/StudentAdd';
import StudentEdit from './pages/student/StudentEdit';
import AddCourse from './pages/Admin/AddCourse';
import ListCourse from './pages/Admin/ListCourse';
import EditCourse from './pages/Admin/EditCourse';
import Register from './pages/Authentication/Register';
import Login from './pages/Authentication/Login';
import Profile from './pages/Admin/Profile';
import Forgetpass from './pages/Authentication/Forgetpass';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const URL= process.env.BACKENDURL
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer />
      <Header/>
      <Navbar/>
     <Routes>
     <Route element={<Dashboard/>} path='/'/> 
     <Route element={<Student/>} path='/studentdash'/> 
     <Route element={<Studentlist/>} path='/studentlist'/> 
     <Route element={<Studentview/>} path='/studentview'/> 
     <Route element={<StudentAdd/>} path='/studentadd'/> 
     <Route element={<StudentEdit/>} path='/studentedit'/> 
     <Route element={<AddCourse/>} path='/addcourse'/> 
     <Route element={ <ListCourse/>} path='/listcourse'/> 
     <Route element={ <EditCourse/>} path='/editcourse'/> 
     <Route element={ <Register/>} path='/register'/> 
     <Route element={ <Login/>} path='/login'/> 
     <Route element={ <Forgetpass/>} path='/forget'/> 
     <Route element={ <Profile/>} path='/profile'/> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

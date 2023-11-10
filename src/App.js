import { Panel } from 'rsuite';
import './App.css';
import {Routes , Route , useNavigate} from 'react-router-dom'
import Student_list from './components/studentList/Student_list';
import Class_list from './components/studentList/Class_list';
import {IconButton, Button, ButtonToolbar } from 'rsuite';
import { Icon } from "@rsuite/icons";
import Homepage from './components/studentList/Homepage';
import { React , useState } from "react";





const  App = ()=> {

  const [students, setStudents] = useState([]);
  const [studclases, setStudentsClasses] = useState([]);


  const addstudClass = (name) => {
    setStudentsClasses([...studclases, { name }]);
    console.log('studclases',studclases);
  };



  const addStudents = (name,dob,gender,class_stu,mark,id) => {
    console.log('55555',name,dob,gender,class_stu,mark,id);
    setStudents([...students, { name,dob,gender,class_stu,mark,id }]);

  };


  




  

  const navigate = useNavigate();

  const panelStyle ={
    margin : '10px',
    backgroundColor : 'yellow'

  };

  
  return (
   <>
   

      <Button  onClick={()=>{navigate('/HomePage')}} >Homepage</Button>  
      <Button  onClick={()=>{navigate('/HomePage/Students')}} >Student List</Button>
      <Button  onClick={()=>{navigate('/HomePage/Classes')}} >Definition</Button>


   
   <Routes>
   <Route path='/HomePage' element = {<Homepage students={students} studclases={studclases}/>}/>
    <Route path='/HomePage/Students' element = {
    
    <Student_list  addStudents={addStudents} studclases={studclases}  students={students} setStudents={setStudents}/> }/>
    <Route path='/HomePage/Classes' element = {<Class_list />}/>
   </Routes>
   
   </>
  );
}

export default App;

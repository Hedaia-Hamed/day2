import { React , useState } from "react";
import {Input, Button ,SelectPicker } from 'rsuite';






const Student_list = (props) => {

    const [studentName, setStudentName] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [studentList, setStudentList] = useState([]);

    const [className, setClassName] = useState('');
    const [mark, setMark] = useState(0);


    const gender_data = ['Female', 'Male'].map(
        item => ({ label: item, value: item })
      );
    
    
      
      const addNeStudent = () =>{
       


        const stud_info = {
            name: studentName,
            dob ,
            gender,
            className,
            mark: Number(mark),
          };

        props.addStudents(studentName,dob,gender,className,mark);
        const _clone = [...studentList];
        _clone.push(stud_info);
        setStudentList(_clone);
        



        setStudentName('');
        setDob('');
        setGender('');
        setClassName('');
        setMark(0);

    
    
    
      }


    const inputStyle= {

        width:'40%'
    }



   
    return (
        <>
          <h2>Students</h2>

          <Input
          type="text"
          placeholder="Student Name"
          style={inputStyle}
          value={studentName}
          onChange={(e) => setStudentName(e)}
        />

*  <Input
          type="date"
          placeholder="Date of Birth"
          style={inputStyle}
          value={dob}
          onChange={(e) => setDob(e)}
        /> 

    

    <SelectPicker
    label="Gender"
    data={gender_data}
    style={{ width: 224 }}
    value={gender} 
    onChange={value => setGender(value)} 
    />



    <br/>
        <select
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        >
          <option value="">Select Class</option>
         {props.studclases.map((classObj) => (
            <option key={classObj.name} value={classObj.name}>
              {classObj.name}
            </option>
          ))}
        </select>
        <Input
          type="number"
          placeholder="Mark"
          style={inputStyle}
          value={mark}
          onChange={(e) => setMark(e)}
        />



<button onClick={addNeStudent}>Add Student</button>



<hr/>

<h2>Student List</h2>
      <ul>
        {props.students.map((student, index) => (
          <li key={index}>
            Name: {student.name}, DOB: {student.dob} , Gender :{student.gender} , ClassName : {student.class_stu}  , Mark :{student.mark}
          </li>
        ))}
      </ul>

         
        </>
      );


}
export default Student_list;
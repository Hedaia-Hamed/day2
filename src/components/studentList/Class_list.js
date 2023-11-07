import React, { useEffect, useState } from 'react';
import {Button,Input, Panel } from 'rsuite';


 const Class_list =  (props)=>  {

  const [className, setClassName] = useState('');
  const [class_list, setClasslist] = useState([]);

  const createClassesStudent = (e) => {
    setClassName(e);
    
  }


  
  const addNewClass = () =>{
    const _clone = [...class_list];
    _clone.push(className);
    setClasslist(_clone);
    props.addstudClass(className);
    setClassName('');



  }



  const panelStyle ={
    margin : '10px',

  };

 


  return (
    <>
    <Panel bordered header="My Classes " style={panelStyle}>
      <h1>Classes</h1>
      <Input
        style={{width:'50%'}}
          type="text"
          placeholder="Class Name"
          value={className}
          onChange={createClassesStudent}
        />
<br/>
<br/>
        <Button onClick={addNewClass}>Add New Class</Button> 

     


        <hr/>

        <h2>Class List</h2>

        <ul>
        {props.studclases.map((classname, index) => (
       <li key={index}>
           {index+1}  -  <strong>Name:</strong> {classname.name}
           
</li>

        ))}
      </ul>


</Panel>

     
    </>
  );
}

export default Class_list;

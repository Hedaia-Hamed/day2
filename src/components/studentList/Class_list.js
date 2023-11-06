import React, { useEffect, useState } from 'react';
import {Button,Input } from 'rsuite';


 const Class_list =  ({addstudClass})=>  {

  const [className, setClassName] = useState('');
  const [class_list, setClasslist] = useState([]);

  const createClassesStudent = (e) => {
    setClassName(e);
    
  }


  
  const addNewClass = () =>{
    const _clone = [...class_list];
    _clone.push(className);
    setClasslist(_clone);
    addstudClass(className);
    setClassName('');



  }




 


  return (
    <>
      <h1>Classes</h1>
      <Input
        style={{width:'50%'}}
          type="text"
          placeholder="Class Name"
          value={className}
          onChange={createClassesStudent}
        />

        <Button onClick={addNewClass}>Add New Class</Button> 

        {class_list.map((list,i) => {
          return <h4 key={i}> {i+1} * {list}</h4>

    })

        }


     
    </>
  );
}

export default Class_list;

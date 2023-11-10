import { React , useState } from "react";
import {Input, Button ,SelectPicker,Form, Panel ,Table } from 'rsuite';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

const { Column, HeaderCell, Cell } = Table;




const EditableCell = ({ rowData, dataKey, onChange, ...props }) => {
  const editing = rowData.status === 'EDIT';
  return (
    <Cell {...props} className={editing ? 'table-content-editing' : ''}>
      {editing ? (
        <input
          className="rs-input"
          defaultValue={rowData[dataKey]}
          onChange={event => {
            onChange && onChange(rowData.id, dataKey, event.target.value);
          }}
        />
      ) : (
        <span className="table-content-edit-span">{rowData[dataKey]}</span>
      )}
    </Cell>
  );
};


const EditableClassCell = ({ classes, onChange }) => {
  const handleClassChange = (index, property, value) => {
    const newClasses = [...classes];
    newClasses[index][property] = value;
    onChange(newClasses);
  };

};



const ActionCell = ({ rowData, dataKey, onClick, ...props }) => {
  return (
    <Cell {...props} style={{ padding: '6px' }}>
      <Button
        appearance="link"
        onClick={() => {
          onClick(rowData.id);
        }}
      >
        {rowData.status === 'EDIT' ? 'Save' : 'Edit'}
      </Button>
    </Cell>
  );
};



const Student_list = (props) => {


    const classListSlicer = useSelector(
    (state) => state.classListSlicer );

    const [studentName, setStudentName] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [studentList, setStudentList] = useState([]);

    const [studentclassList, setClassStudentList] = useState([]);


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
            id: uuidv4(),
       
          };

          console.log(stud_info,stud_info)

        

        props.addStudents(studentName,dob,gender,className,mark,uuidv4());
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


    const panelStyle ={
      margin : '10px',
  
    };


    const handleChange = (id, key, value) => {
      const nextData = Object.assign([], props.students);
      nextData.find(item => item.id === id)[key] = value;
      props.setStudents(nextData);
    };
    const handleEditState = id => {
      const nextData = Object.assign([], props.students);
      const activeItem = nextData.find(item => item.id === id);
      activeItem.status = activeItem.status ? null : 'EDIT';
      props.setStudents(nextData);
    };





   
    return (
        <>
          <h2>Students</h2>

<Panel bordered header="My Students" style={panelStyle}>

          <Input
          type="text"
          placeholder="Student Name"
          style={inputStyle}
          value={studentName}
          onChange={(e) => setStudentName(e)}
        />
<br/>
  <Input
          type="date"
          placeholder="Date of Birth"
          style={inputStyle}
          value={dob}
          onChange={(e) => setDob(e)}
        /> 

    <br/>

    <SelectPicker
    label="Gender"
    data={gender_data}
    style={{ width: 224 }}
    value={gender} 
    onChange={value => setGender(value)} 
    />



<br/>
        <br/>
        <select  
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        >
          <option value="">Select Class</option>
         {classListSlicer.class_name.map((classObj) => (
            <option key={classObj} value={classObj}>
              {classObj}
            </option>
          ))}
        </select>
        <br/>
        <br/>
        <Input
          type="number"
          placeholder="Mark"
          style={inputStyle}
          value={mark}
          onChange={(e) => setMark(e)}
        />

<br/>
        <br/>
<button onClick={addNeStudent}>Add Student</button>




<hr/>

<h2>Student List</h2>




 
      <Table height={420} data={props.students}>
      <Column width={200}>
        <HeaderCell>First Name</HeaderCell>
        <EditableCell dataKey="name" onChange={handleChange} />
      </Column>

      <Column width={200}>
        <HeaderCell>Date of Brith</HeaderCell>
        <EditableCell dataKey="dob" onChange={handleChange} />
      </Column>

      <Column width={300}>
        <HeaderCell>Gender</HeaderCell>
        <EditableCell dataKey="gender" onChange={handleChange} />
      </Column>



      <Column width={300}>
        <HeaderCell>Class</HeaderCell>
        <EditableCell dataKey="class_stu" onChange={handleChange} />
      </Column>


      <Column width={300}>
        <HeaderCell>Mark</HeaderCell>
        <EditableCell dataKey="mark" onChange={handleChange} />
      </Column>






      <Column flexGrow={1}>
        <HeaderCell>...</HeaderCell>
        <ActionCell dataKey="id" onClick={handleEditState} />
      </Column>
    </Table>


      </Panel>
        </>
      );


}
export default Student_list;
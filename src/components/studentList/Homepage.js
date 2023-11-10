import React, { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import { Panel } from "rsuite";
import {setAllclasses} from './classListSlicer';
import { useDispatch, useSelector } from 'react-redux';


const Homepage = (props) => {

    const classListSlicer = useSelector(
    (state) => state.classListSlicer );

    const [studenum, setStudeNum] = useState(0);
    const [classnum, setSClassNum] = useState(0);

    const panelStyle ={
        margin : '10px',
        backgroundColor : 'yellow'
    
      };




    useEffect(() => {
        setStudeNum(props.students.length);
      
       
      },[props.students])

      




return (
<>

            <Panel bordered header="My Students App" style={panelStyle}>


            <h1> Hello Students</h1>

            <p>Total Classes:{classListSlicer.class_name.length} </p>
            <p>Total Students: {studenum} </p>


            <Outlet></Outlet>
            </Panel>





    </>
);

}
export default Homepage ;
import React, { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import { Panel } from "rsuite";


const Homepage = (props) => {

    const [studenum, setStudeNum] = useState(0);
    const [classnum, setSClassNum] = useState(0);

    const panelStyle ={
        margin : '10px',
        backgroundColor : 'yellow'
    
      };




    useEffect(() => {
        setStudeNum(props.students.length);
        setSClassNum(props.studclases.length);
       
      },[props.students,props.studclases])




return (
<>

            <Panel bordered header="My Students App" style={panelStyle}>


            <h1> Hello Students</h1>

            <p>Total Classes:{classnum} </p>
            <p>Total Students: {studenum} </p>


            <Outlet></Outlet>
            </Panel>





    </>
);

}
export default Homepage ;
import React, { useEffect, useState } from 'react';


const Homepage = (props) => {

    const [studenum, setStudeNum] = useState(0);
    const [classnum, setSClassNum] = useState(0);


    useEffect(() => {
        setStudeNum(props.students.length);
        setSClassNum(props.studclases.length);
       
        
      },[props.students,props.studclases])




return (
<>
    <h1>Home Page</h1>
    <p>Total Classes:{studenum} </p>
    <p>Total Students: {classnum} </p>

    </>
);

}
export default Homepage ;

import React from 'react';
import Higher from './HOC';

function Student1(props) {
    return (
        <div>
            Student1
            <h3>{props.num}</h3>
            <button onClick={props.handleEvent}>Count Inc</button>
        </div>
    );
}

export default Higher(Student1);






















// import React, { useState } from 'react'
// import Higher from './HOC';

// function student1(props){
//     return(
//         <div>
//             student1
//             <h3>{props.num}</h3>
//             <button onClick={()=>props.handleEvent()}>Count Inc</button>
//         </div>
//     )
// }
// export default Higher(student1);
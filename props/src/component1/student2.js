import React from 'react';
import Higher from './HOC';
function Student2(props){
    return(
    <div>
        Student2
        <h3>{props.num}</h3>
        <button onClick={props.handleEvent}>Count Inc</button>
    </div>
    );
}
export default Higher(Student2);
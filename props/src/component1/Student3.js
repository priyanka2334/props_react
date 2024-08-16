import React from 'react';
import Higher from './HOC';

function Student3(props) {
    return (
        <div>
            Student3
            <h3>{props.num}</h3>
            <div onMouseOver={props.handleEvent}>Hover over this text to increase count</div>
        </div>
    );
}

export default Higher(Student3);

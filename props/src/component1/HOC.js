
import React, { useState } from 'react';

function Higher(Student) {
    function HigherOrder() {
        const [num, setNum] = useState(0);
        const handleEvent = () => {
            setNum(num + 10);
        };
        return (
            <Student num={num} handleEvent={handleEvent} />
        );
    }
    return HigherOrder;
}

export default Higher;



















// import React, {useState} from 'react'

// function Higher(Student){
//     function HigherOrder(){
//         const [num, setNum]=useState(0);
//         const handleEvent = ()=>{
//             setNum(num+10);
//         }
//         return(
//             <Student num={num} handleEvent={handleEvent}/>
//         )
//     }
//     return HigherOrder;
// }
// export default Higher;



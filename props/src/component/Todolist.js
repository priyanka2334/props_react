// // src/TodoList.js
// import React, { useState } from 'react';

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState('');

//   const handleAddTodo = () => {
//     if (input.trim()) {
//       setTodos([...todos, input]);
//       setInput('');
//     }
//   };

//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//   };

//   const handleRemoveTodo = (index) => {
//     const newTodos = todos.filter((_, i) => i !== index);
//     setTodos(newTodos);
//   };

//   return (
//     <div>
//       <h1>To-Do List</h1>
//       <input
//         type="text"
//         value={input}
//         onChange={handleInputChange}
//         placeholder="Enter a new to-do"
//       />
//       <button onClick={handleAddTodo}>Add</button>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo}
//             <button onClick={() => handleRemoveTodo(index)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;




import React, {useState} from 'react';
function Todo(){
    const[todos,setTodos] = useState([]);
    const[input,setInput] = useState('');
    function HandleAdd(){
        if(input.trim()){
            setTodos([...todos,input]);
            setInput('');
        }
    };
    function InputChange(e){
        setInput(e.target.value);
    };
    function Remove(index){
        const newTodo = todos.filter((_,i) => i !==index);
        setTodos(newTodo);
    }
    return(
        <>
        <h1>To-Do List</h1>
        <input type="text" value={input} onChange={InputChange} placeholder='Enter new name'/>
        <button onClick={HandleAdd}>Add</button>
        <ul>
            {todos.map((todos, index) => (
                <li key={index}>{todos}
                <button onClick={() => Remove(index)}>Remove</button>
                </li>
            )
            )}
        </ul>
        </>
    );
};
export default Todo;




// import React, {useState} from 'react';
// function Todo(){
//     const[todo,setTodo] = useState([]);
//     const[input,setInput] = useState('');
//     function add(){
//         if(input.trim()){
//             setTodo([...todo,input]);
//             setInput('');
//         }
//     };
//     function InputChange(e){
//         setInput(e.target.vaue);
//     }
//     return(
//         <>
//         <h1>To Do list</h1>
//         <input type='text' value={input} onChangeCapture={InputChange} placeholder='enter'/>
//         <button onClick={add}>add</button>
//         <ul>
//             {todo.map((todo,index)=>(
//                 <li key={index}>{todo}</li>
//             ))}
//         </ul>
//         </>
//     );
// }
// export default add;
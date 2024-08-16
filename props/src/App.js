// import React from 'react';
// import './App.css';
// import Student1 from './component1/student1';
// import HigherOrder from './component1/HOC';
// import Student2 from './component1/student2';
// import Student3 from './component1/Student3';
// function App(){
//   return(
//     <>
//     <Student1/>
//     <HigherOrder/>
//     <Student2/>
//     <Student3/>
//     </>
//   );
// }
// export default App;


///////////////////////////////////////////////////////////// props Driling

// import React from 'react';
// import './App.css';
// import ChildA from './component/ChildA';
// function App(){
//   const name = "priyanka"
//   return(
//     <>
//     <ChildA name = {name}/>
//     </>
//   );
// }
// export default App;

// import React from 'react';
// import ChildA from './component/ChildA';
// function App(){
//   const name = "priyanka Diwakar";
//   return(
//     <>
//     <ChildA name = {name} />
//     </>
//   );
// }
// export default App;

// import React from 'react';
// import ChildA from './component/ChildA'
// function App(){
//   const name = "priyanka Diwakar";
//   return(
//     <>
//     <ChildA name = {name} />
//     </>
//   );
// }
// export default App;


import React from 'react';
import Todo from './component/Todolist';
// import ChildA from './component/ChildA';
function App(){
  // const name = "Rajendra Kumar Diwakar";
  return(
    <>
    <Todo/>
    {/* <ChildA name = {name}/> */}
    </>
  );
}
export default App;
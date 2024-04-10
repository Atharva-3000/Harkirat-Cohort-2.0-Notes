// import "./App.css";
// function App() {
//   return (
//     <div>
//       {/* <HeaderWithButton />
//       <Header title="Hello 1" />
//       <Header title="Hello 2" />
//       <Header title="Hello 3" /> */}
//     </div>
//   );
// }

// function HeaderWithButton() {
//   const [title, setTitle] = useState("Default");
//   function updateTitle() {
//     setTitle("My name is:" + Math.random());
//   }

//   return (
//     <div>
//       <button onClick={updateTitle}>Click to change title</button>
//       <Header title={title} />
//     </div>
//   );
// }

// eslint-disable-next-line react/prop-types

// use memo prevents re-rendering of the component if props are not changed
// const Header=React.memo(function Header({ title }) {
//   console.log("Rendered");
//   return (
//     <div>
//       <h2>{title}</h2>
//     </div>
//   );
// })
// import { useState } from "react";
// import "./App.css";

// let counter=4;
// function App() {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       title: "Day 1 ",
//       description: "Go tod gym",
//     },
//     {
//       id: 2,
//       title: "Day 2",
//       description: "Study react",
//     },
//     {
//       id: 3,
//       title: "Day 3",
//       description: "Join in the workshop",
//     },
//   ]);

//   function addTodo() {
//     setTodos([
//       ...todos,
//       {
//         id: counter++,
//         title: Math.random(),
//         description: Math.random(),
//       },
//     ]);
//     // OR
//     // const newTodos=[];
//   }
//   return (
//     <div>
//       <button onClick={addTodo}>Add a Todo</button>
//       {todos.map(todo =>
//         <Todo
//           key={todo.id}
//           title={todo.title}
//           description={todo.description}
//         />
//       )}
//     </div>
//   );
// }

// // eslint-disable-next-line react/prop-types
// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h3>{description}</h3>
//     </div>
//   );
// }

// export default App;

//  WRAPPER FUNCTIONS
// function App() {
//   return (
//     <div>
{
  /* old syntax */
}
{
  /* <CardWrapper innerComponent={<TextComponent/>}/> */
}

{
  /* new syntax */
}
{
  /* <CardWrapper>
       <TextComponent/>
      </CardWrapper>
      <CardWrapper>
        <div>Hello There</div>
      </CardWrapper>
    </div>
  );
} */
}
// applying styles to each component we render

// old syntax
// function CardWrapper({innerComponent}){
//   return <div style={{border:"2px solid black"}}>
//     {innerComponent}
//   </div>

// }
// new syntax
// function CardWrapper({ children }) {
//   console.log(children);
//   return (
//     <div style={{ border: "2px solid black", padding: 20 }}>
//     {children}
//     </div>
//   );
// }

// function TextComponent(){
//   return <div>
//     Hi there from text component
//   </div>
// }

// export default App;

// useeffect
// double refresh is because of React.strictmode doesnt happen in production
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval(()=>{
      fetch("https://sum-server.100xdevs.com/todos").then(async function (res) {
        const json = await res.json();
        setTodos(json.todos);
    })
    },10000)
  }, []);

  return(
  <div>
    {todos.map((todo) => (
      <Todo key={todo.id} title={todo.title} description={todo.description} />
    ))}
  </div>
  );
}

function Todo({ title, description }) {
  return(
  <div>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </div>
  )
}
export default App;

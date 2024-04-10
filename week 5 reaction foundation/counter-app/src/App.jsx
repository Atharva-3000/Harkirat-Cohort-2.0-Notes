import { useState } from "react";
import "./App.css";

// let state = {
//   count: 0,    react wont look at these type of variables and hence useState
// };

// todo application
// todo
// {
//  todos:[{title:"todo1",desc="something"},
// {title:"todo2",desc="something"}
// ]
// }

function App() {
  function handleTitle(event) {
    console.log(event.target.value);
    setTitle(event.target.value);
  }
  function handleDescription(event) {
    console.log(event.target.value);
    setDescription(event.target.value);
  }

  function handleSubmit() {
    console.log("Title", title);
    console.log("Description", description);
    const newTodo = {
      title: title,
      desc: description,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    console.log(newTodo);
  }
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      desc: "workout from 7-9",
      completed: false,
    },
    {
      title: "Go to market",
      desc: "buy some fruits",
      completed: true,
    },
  ]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <Todo title="Atharva" description="Hello there, checking if it " />
      <input type="text" placeholder="Title" onChange={handleTitle} />
      <br />
      <input
        type="text"
        placeholder="Description"
        onChange={handleDescription}
      />
      <br />
      <button onSubmit={handleSubmit}>Submit</button>
      {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.desc} />
      })}
    </div>
  );
}

// component
function Todo(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default App;
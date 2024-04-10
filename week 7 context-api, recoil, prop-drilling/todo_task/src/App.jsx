import { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { todos, filter, filterSelector } from "./store/atom/todoAtom"; // Import Recoil atoms and selector
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [todosState, setTodos] = useRecoilState(todos);
  const setFilter = useSetRecoilState(filter); // Get the setter function for the filter atom
  const filterValue = useRecoilValue(filter);
  const filteredTodos = useRecoilValue(filterSelector);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddTodo = () => {
    const newTodo = {
      title: title,
      description: description,
    };
    setTodos([...todosState, newTodo]);
    setTitle("");
    setDescription("");
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value); // Update the filter atom value using the setter function
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search Todo"
        value={filterValue}
        onChange={handleFilterChange} // Call handleFilterChange to update the filter atom value
        className="title"
      />
      <h1>Todo with filter using Recoil</h1>
      <input
        type="text"
        placeholder="Enter your todo title"
        value={title}
        onChange={handleTitleChange}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter your todo description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <br />
      <br />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {/* Map over filteredTodos and display each todo */}
        {filteredTodos.map((todo, index) => (
          <li key={index}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

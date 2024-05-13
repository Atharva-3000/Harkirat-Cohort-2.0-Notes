import './App.css'
import Todos from './component/Todos'
import AddTodo from './component/addTodo'

function App() {

  return (
    <div>
      <h1>Redux Toolkit Playground</h1>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App

function App() {
  return (
    <div>
      <Todo title="Todo 1" description="This is todo 1" done={false} />
    </div>
  );
}

interface TodoProp {
  title: string;
  description: string;
  done: boolean;
}

function Todo(props: TodoProp) {
  return (
    <>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </>
  );
}

export default App;

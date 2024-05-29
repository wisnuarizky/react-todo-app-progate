import { useState } from 'react';
import './App.css';

const datas = [
  {
    id: 1,
    title: 'Finish Progate React Course',
    completed: false,
  },
  {
    id: 2,
    title: 'Have lunch with Guru Domba',
    completed: false,
  },
  {
    id: 3,
    title: 'Study React with Ninja Ken',
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(datas);

  return (
    <>
      <h1>Hello World</h1>
      {todos.map((todo) => {
        return <p key={todo.id}>{todo.title}</p>;
      })}
    </>
  );
}

export default App;

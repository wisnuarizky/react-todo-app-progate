import { useState } from 'react';
import './App.css';
import Todos from './components/Todos';

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
    <div style={{ textAlign: 'center', padding: '12px' }}>
      <h1 style={{ fontSize: '36px' }}>My TODO List</h1>
      <Todos todos={todos} />
    </div>
  );
}

export default App;

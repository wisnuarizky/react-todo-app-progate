import { useState } from 'react';
import './App.css';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';

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
  const styles = {
    container: {
      textAlign: 'center',
      padding: '12px',
    },
    title: {
      fontSize: '36px',
    },
  };

  const [todos, setTodos] = useState(datas);

  // membuat ceklis checkbox
  function toggleCompleted(todoId) {
    const updateTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updateTodos);
  }

  // menghapus todo
  function handleDelete(id) {
    const deleteTodo = todos.filter((todo) => {
      if (todo.id !== id) {
        return todo;
      }
    });

    setTodos(deleteTodo);
  }

  // menambah todo
  function addTodo(title) {
    if (title === '') {
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      title: title,
      completed: false,
    };

    const updateTodo = [...todos, newTodo];
    setTodos(updateTodo);
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My TODO List</h1>
      <TodoForm addTodo={addTodo} />
      <Todos todos={todos} toggleCompleted={toggleCompleted} handleDelete={handleDelete} />
    </div>
  );
}

export default App;

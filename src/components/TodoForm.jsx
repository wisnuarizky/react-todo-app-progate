import { useState } from 'react';

/* eslint-disable react/prop-types */
const styles = {
  container: {
    marginBottom: '32px',
  },
  formInput: {
    height: '66px',
    width: '40%',
    fontSize: '16px',
    padding: '0 16px',
  },
  button: {
    height: '72px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(title);
  }

  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }

  return (
    <div style={styles.container}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Add Your Todo" style={styles.formInput} onChange={(e) => handleChangeTitle(e)} />
        <button style={styles.button}>Add Todo</button>
      </form>
    </div>
  );
}

export default TodoForm;

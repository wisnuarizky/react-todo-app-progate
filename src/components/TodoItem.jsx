/* eslint-disable react/prop-types */
function TodoItem({ todo, toggleCompleted }) {
  const style = {
    todoItem: {
      border: '2px solid #f4f4f4',
      fontSize: '24px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    checkbox: {
      marginRight: '10px',
      height: '18px',
      width: '18px',
    },
  };

  // membuat strip
  function getTodoTitleStyle() {
    if (todo.completed) {
      return { textDecoration: 'line-through' };
    } else {
      return { textDecoration: 'none' };
    }
  }

  return (
    <div style={style.todoItem}>
      <input type="checkbox" style={style.checkbox} onChange={() => toggleCompleted(todo.id)} />
      <p style={getTodoTitleStyle()}>{todo.title}</p>
    </div>
  );
}

export default TodoItem;

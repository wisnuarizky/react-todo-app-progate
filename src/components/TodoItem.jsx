/* eslint-disable react/prop-types */
function TodoItem({ todo }) {
  const style = {
    border: '2px solid #f4f4f4',
    fontSize: '24px',
  };

  return <p style={style}>{todo.title}</p>;
}

export default TodoItem;

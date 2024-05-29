/* eslint-disable react/prop-types */
import TodoItem from './TodoItem';

function Todos({ todos }) {
  return (
    <div style={{ width: '40%', margin: '0 auto' }}>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

export default Todos;

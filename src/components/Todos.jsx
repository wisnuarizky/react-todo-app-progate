/* eslint-disable react/prop-types */
import TodoItem from './TodoItem';

function Todos({ todos, toggleCompleted }) {
  const styles = {
    container: {
      width: '40%',
      margin: '0 auto',
    },
  };

  return (
    <div style={styles.container}>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} toggleCompleted={toggleCompleted} />;
      })}
    </div>
  );
}

export default Todos;

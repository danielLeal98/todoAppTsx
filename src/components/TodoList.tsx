import React, { useContext } from 'react';
import TodoListItem from './TodoListItem';
import { TodoContextType } from '../contexts/TodoContextType';
import { TodoContext } from '../contexts/TodoContext';

const TodoList = () => {
  const { todos } = useContext<TodoContextType>(TodoContext);
  return (
    <table className="uk-table uk-table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Tarefa</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {todos?.map((todo) => (
          <TodoListItem key={todo.id} todo={todo}></TodoListItem>
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;

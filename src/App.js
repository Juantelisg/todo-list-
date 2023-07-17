import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

import React from 'react';

const defaultTodos = [
  {text: 'Estudiar', completed: true},
  {text: 'Pasar Algebraaa', completed: false},
  {text: 'Pasar IPC', completed: false},
  {text: 'Avanzar', completed: false},
]

function App() {
  return (
    <>
      <TodoCounter cantidad={4} total={6}/>
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>   

      <CreateTodoButton />   
    </>
  );
}

export default App;

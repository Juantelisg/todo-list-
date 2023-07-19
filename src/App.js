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
  const [todos, setTodos] = React.useState([...defaultTodos])
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = defaultTodos.filter(todo => todo.completed).length
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }    
  );

  console.log(`el usuario necesita ${searchValue}`)
  return (
    <>
      <TodoCounter cantidad={completedTodos} total={totalTodos}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

      <TodoList>
        {searchedTodos.map(todo => (
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

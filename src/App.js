import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

import React from 'react';

 /* const defaultTodos = [
  {text: 'Tejones 1', completed: true},
  {text: 'Gargolas', completed: false},
  {text: 'Panteras', completed: false},
  {text: 'El Rayo', completed: false},
  {text: 'Tejones 2', completed: false},
  {text: 'Panteras 2', completed: false},  
  {text: 'Conquistadores', completed: false},
  {text: 'Semis', completed: false},
  {text: 'Final', completed: false}
]   */

function useLocalStorage(itemName, initialValue) {  

  const localStorageItem = localStorage.getItem(itemName)

  let parsedItem; 

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  } 

  return [item, saveItem]; 
}

function App() { 

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
    (todo) => !!todo.completed).length;

  const totalTodos = todos.length;
  
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }    
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
     (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const notCompletedTodo = (text) => {    
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );

    if (newTodos[todoIndex].completed) {
        newTodos[todoIndex].completed = false;
        saveTodos(newTodos);
    } else {   
      deleteTodo(text)      
    }
    
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const updatesTodo = newTodos.filter(
      (todo) => todo.text !== text
    );
       
    saveTodos(updatesTodo)      
  } 

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
          onComplete={() => completeTodo(todo.text)}
          notCompleted={() => notCompletedTodo(todo.text)}
          /* onDeleteTodo={() => deleteTodo(todo.text)} */
          />
        ))}
      </TodoList>   

      <CreateTodoButton />   
    </>
  );
}

export default App;

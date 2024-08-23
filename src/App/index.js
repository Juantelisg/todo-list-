import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage'; 

function App() {  
  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
    (todo) => !!todo.completed).length

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
     (todo) => todo.text === text
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
    <AppUI 
      loading = {loading}
      error = {error}
      completedTodos = {completedTodos}
      totalTodos = {totalTodos}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      searchedTodos = {searchedTodos}
      completeTodo = {completeTodo}
      notCompletedTodo={notCompletedTodo}
      deleteTodo = {deleteTodo}
    
    />
  )
}
  
export default App;

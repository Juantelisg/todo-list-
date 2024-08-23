import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';

function AppUI ({
    loading,
    error,
    completedTodos,
    totalTodos,searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    notCompletedTodo,  
    deleteTodo,
}) { 
    return (
        <>
            <TodoCounter cantidad={completedTodos} total={totalTodos}/>
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

            <TodoList>
                {(!loading && searchedTodos.length == 0) && <EmptyTodos/>}
                {loading && <TodosLoading/>}
                {searchedTodos.map(todo => (
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        notCompleted={() => notCompletedTodo(todo.text)}
                        onDeleteTodo={() => deleteTodo(todo.text)}
                    />
                ))}
                {error && <TodosError/>}                

                
            </TodoList>

            <CreateTodoButton/>
        </>
    );
}

export {AppUI};
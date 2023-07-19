import './CreateTodoButton.css';
function CreateTodoButton() {
    let n = 0;
    return (
     <button className='CreateTodoButton'
     onClick={() => {
        n++;
        console.log(`Presionaste click ${n===1? n + ' vez': n + ' veces'} `)
     }
    }>+</button>

    )
}

export { CreateTodoButton };
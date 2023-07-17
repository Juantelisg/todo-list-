import './TodoCounter.css'

function TodoCounter({cantidad, total}) {
    return (
      <h1 className='TodoCounter'>
        Completaste <span>{cantidad}</span> de <span>{total}</span>materias
      </h1>
    )
}

export { TodoCounter };
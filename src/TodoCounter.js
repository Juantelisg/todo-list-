import './TodoCounter.css'

function TodoCounter({cantidad, total}) {
  const validator = (cantidad, total) => {
    if (cantidad !== total) {
      return (
        <h1 className='TodoCounter'>
          Completaste <span>{cantidad}</span> de  <span>{total}</span> materias
        </h1>
      )
    } else {
      (
        <h1 className='TodoCounter'>
          Completaste <span>{cantidad}</span> de  <span>{total}</span> materias
        </h1>
      )
    }
  }
    
  return (   
      validator(cantidad, total)         
    )
}

export { TodoCounter };
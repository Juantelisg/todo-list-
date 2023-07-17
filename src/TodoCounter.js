import './TodoCounter.css'

function TodoCounter({cantidad, total}) {
    return (
      <h1 style={{
        fontSize: 25
      }}>
        Completaste {cantidad} de {total} materias
      </h1>
    )
}

export { TodoCounter };
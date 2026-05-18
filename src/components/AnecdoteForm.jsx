import { useDispatch } from 'react-redux'
import { crearAnecdota } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const contenido = event.target.anecdota.value
    if (contenido.trim() !== '') {
      event.target.anecdota.value = ''
      dispatch(crearAnecdota(contenido))
    }
  }

  return (
    <div>
      <h2>Crear nueva anécdota</h2>
      <form onSubmit={addAnecdote}>
        <input name="anecdota" />
        <button type="submit">crear</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
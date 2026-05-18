import { useDispatch } from 'react-redux'
import { crearAnecdota } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const agregarAnecdota = (event) => {
    event.preventDefault()
    const contenido = event.target.anecdota.value
    if (contenido.trim() !== '') {
      event.target.anecdota.value = ''
      dispatch(crearAnecdota(contenido))
      dispatch(showNotification(`Nueva anécdota creada: "${contenido}"`, 5))
    }
  }

  return (
    <div>
      <h2>Crear nueva anécdota</h2>
      <form onSubmit={agregarAnecdota}>
        <input name="anecdota" />
        <button type="submit">crear</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
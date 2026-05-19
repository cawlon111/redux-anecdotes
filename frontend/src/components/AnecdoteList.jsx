import { useSelector, useDispatch } from 'react-redux'
import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)

  const anecdotesFiltradas = anecdotes.filter(anecdote =>
    anecdote.contenido.toLowerCase().includes(filter.toLowerCase())
  )

  const manejarVoto = (anecdota) => {
    dispatch(voteForAnecdote(anecdota))
    dispatch(showNotification(`Votaste por: "${anecdota.contenido}"`, 5))
  }

  return (
    <div>
      {anecdotesFiltradas.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.contenido}</div>
          <div>
            tiene {anecdote.votos} votos
            <button onClick={() => manejarVoto(anecdote)}>votar</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
import { useSelector, useDispatch } from 'react-redux'
import { votarAnecdota } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)

  const anecdotesFiltradas = anecdotes.filter(anecdote =>
    anecdote.contenido.toLowerCase().includes(filter.toLowerCase())
  )

  const manejarVoto = (id) => {
    dispatch(votarAnecdota(id))
  }

  return (
    <div>
      {anecdotesFiltradas.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.contenido}</div>
          <div>
            tiene {anecdote.votos} votos
            <button onClick={() => manejarVoto(anecdote.id)}>votar</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
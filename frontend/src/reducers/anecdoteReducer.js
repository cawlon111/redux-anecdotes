import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdoteService'  // Esto funciona ahora

// Resto del código igual...
export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createNewAnecdote = (contenido) => {
  return async (dispatch) => {
    const newAnecdote = {
      contenido: contenido,
      votos: 0
    }
    const savedAnecdote = await anecdoteService.create(newAnecdote)
    dispatch(crearAnecdota(savedAnecdote))
  }
}

export const voteForAnecdote = (anecdota) => {
  return async (dispatch) => {
    const updatedAnecdote = {
      ...anecdota,
      votos: anecdota.votos + 1
    }
    const updatedAnecdoteFromServer = await anecdoteService.update(anecdota.id, updatedAnecdote)
    dispatch(votarAnecdota(updatedAnecdoteFromServer))
  }
}

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    setAnecdotes(state, action) {
      return action.payload
    },
    votarAnecdota(state, action) {
      const updatedAnecdote = action.payload
      return state.map(anecdote =>
        anecdote.id !== updatedAnecdote.id ? anecdote : updatedAnecdote
      )
    },
    crearAnecdota(state, action) {
      state.push(action.payload)
    }
  }
})

export const { setAnecdotes, votarAnecdota, crearAnecdota } = anecdoteSlice.actions
export default anecdoteSlice.reducer
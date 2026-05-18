const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTAR':
      const id = action.payload.id
      const anecdotaAVotar = state.find(n => n.id === id)
      const anecdotaVotada = {
        ...anecdotaAVotar,
        votos: anecdotaAVotar.votos + 1
      }
      return state.map(anecdota =>
        anecdota.id !== id ? anecdota : anecdotaVotada
      )
    case 'NUEVA_ANECDOTA':
      return [...state, action.payload]
    default:
      return state
  }
}

export const votarAnecdota = (id) => {
  return {
    type: 'VOTAR',
    payload: { id }
  }
}

export const crearAnecdota = (contenido) => {
  return {
    type: 'NUEVA_ANECDOTA',
    payload: {
      id: Date.now(),
      contenido: contenido,
      votos: 0
    }
  }
}

export default anecdoteReducer
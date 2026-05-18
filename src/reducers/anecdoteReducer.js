import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 1, contenido: 'Si duele, hazlo más seguido', votos: 0 },
  { id: 2, contenido: 'Agregar más programadores a un proyecto de software atrasado lo hace aún más tarde', votos: 0 },
  { id: 3, contenido: 'El primer 90 por ciento del código representa el primer 90 por ciento del tiempo de desarrollo...', votos: 0 },
  { id: 4, contenido: 'Cualquier tonto puede escribir código que una computadora pueda entender. Los buenos programadores escriben código que los humanos puedan entender.', votos: 0 },
  { id: 5, contenido: 'La optimización prematura es la raíz de todos los males', votos: 0 },
  { id: 6, contenido: 'Depurar es el doble de difícil que escribir el código. Por lo tanto, si escribes el código de la manera más inteligente posible, por definición no eres lo suficientemente inteligente para depurarlo.', votos: 0 }
]

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    votarAnecdota(state, action) {
      const id = action.payload
      const anecdotaAVotar = state.find(anecdota => anecdota.id === id)
      if (anecdotaAVotar) {
        anecdotaAVotar.votos += 1
      }
    },
    crearAnecdota(state, action) {
      const nuevaAnecdota = {
        id: Date.now(),
        contenido: action.payload,
        votos: 0
      }
      state.push(nuevaAnecdota)
    }
  }
})

export const { votarAnecdota, crearAnecdota } = anecdoteSlice.actions
export default anecdoteSlice.reducer
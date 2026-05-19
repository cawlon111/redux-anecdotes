import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    setNotification(state, action) {
      return action.payload
    },
    clearNotification() {
      return ''
    }
  }
})

export const { setNotification, clearNotification } = notificationSlice.actions

// Action creator mejorado con tiempo en segundos (6.19)
export const showNotification = (message, timeInSeconds = 5) => {
  return async (dispatch) => {
    // Limpiar cualquier notificación anterior
    dispatch(clearNotification())
    
    // Mostrar la nueva notificación
    dispatch(setNotification(message))
    
    // Configurar temporizador para ocultarla
    setTimeout(() => {
      dispatch(clearNotification())
    }, timeInSeconds * 1000)
  }
}

export default notificationSlice.reducer
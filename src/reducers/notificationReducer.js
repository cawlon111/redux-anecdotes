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

// Action creator que muestra notificación por 5 segundos
export const showNotification = (message, timeInSeconds = 5) => {
  return (dispatch) => {
    dispatch(setNotification(message))
    
    setTimeout(() => {
      dispatch(clearNotification())
    }, timeInSeconds * 1000)
  }
}

export default notificationSlice.reducer
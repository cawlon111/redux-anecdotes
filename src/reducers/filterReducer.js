const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.payload
    default:
      return state
  }
}

export const setFilter = (filtro) => {
  return {
    type: 'SET_FILTER',
    payload: filtro
  }
}

export default filterReducer
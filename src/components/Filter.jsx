import { useDispatch } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const valorFiltro = event.target.value
    dispatch(setFilter(valorFiltro))
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filtrar <input onChange={handleChange} />
    </div>
  )
}

export default Filter
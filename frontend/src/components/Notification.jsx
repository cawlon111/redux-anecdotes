import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    color: '#333'
  }

  if (!notification) {
    return null
  }

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification
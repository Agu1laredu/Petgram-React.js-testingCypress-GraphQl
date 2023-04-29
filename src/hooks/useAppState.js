import { useContext } from 'react'
import AppContext from '../Context/AppContext'

const useAppState = () => {
  const value = useContext(AppContext)
  if (!value) {
    throw new Error('AppState debe estar dentro del proveedor de AppContext')
  }
  return value
}

export default useAppState

import React, { useState } from 'react'
import AppContext from './AppContext'

export const AppState = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })

  const activateAuth = (token) => {
    window.sessionStorage.setItem('token', token)
    setIsAuth(true)
  }

  const removeAuth = () => {
    window.sessionStorage.removeItem('token')
    setIsAuth(false)
  }

  return (
    <AppContext.Provider value={{ isAuth, activateAuth, removeAuth }}>
      {children}
    </AppContext.Provider>
  )
}

import React from 'react'
import useAppState from '../../hooks/useAppState'
import { SubmitButton } from '../../components/SubmitButton'
import { Title } from './styles'

export const UserSection = () => {
  const { removeAuth } = useAppState()
  return (
    <div>
      <Title>User</Title>
      <SubmitButton title='Cerrar Sesión' type='button' onClick={removeAuth} />
    </div>
  )
}

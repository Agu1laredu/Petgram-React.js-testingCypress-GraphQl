import React from 'react'
import { useNavigate } from '@reach/router'
import useAppState from '../hooks/useAppState'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation, useLoginMutation } from '../Graphql/mutationUsers'
import { Loader } from '../components/Loader'
import { LoaderWrapperAccess } from '../components/Loader/styles'
import { Helmet } from 'react-helmet'

export const NotRegisteredUser = () => {
  const { activateAuth } = useAppState()
  const { LoginMutation, error, loading } = useLoginMutation()
  const navigate = useNavigate()

  const handleSubmit = ({ email, password }) => {
    LoginMutation({ variables: { input: { email, password } } }).then(({ data }) => {
      const { login } = data
      activateAuth(login)
      navigate('/')
    })
  }

  if (loading) return (<LoaderWrapperAccess><Loader /></LoaderWrapperAccess>)

  const errorMsg = error && 'Contraseña incorrecta o el usuario no existe'

  return (
    <>
      <Helmet>
        <title>Petgram - Inicia Sesión</title>
        <meta name='description' content='Encuentra y postea fotos de las mascotas mas bonitas del mundo con Petgram' />
      </Helmet>
      <UserForm error={errorMsg} onSubmit={handleSubmit} title='Iniciar Sesión' />
    </>
  )
}

export const NotRegisteredUserSignUp = () => {
  const { RegisterMutation, loading, error } = useRegisterMutation()
  const { activateAuth } = useAppState()
  const navigate = useNavigate()

  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    RegisterMutation({ variables }).then(({ data }) => {
      const { signup } = data
      activateAuth(signup)
      navigate('/')
    })
  }

  if (loading) return (<LoaderWrapperAccess><Loader /></LoaderWrapperAccess>)

  const errorMsg = error && 'El usuario ya existe o hay algún problema'

  return (
    <>
      <Helmet>
        <title>Petgram - Registrate</title>
        <meta name='description' content='Encuentra y postea fotos de las mascotas mas bonitas del mundo con Petgram' />
      </Helmet>
      <UserForm error={errorMsg} onSubmit={onSubmit} title='Registrate' />
    </>
  )
}

import React from 'react'
import ReactDOM from 'react-dom'

import { ApolloClient, from, ApolloProvider as Aprovider, InMemoryCache, createHttpLink } from '@apollo/react-hooks'
import { setContext } from 'apollo-link-context'
import { onError } from 'apollo-link-error'

import { AppState } from './Context/AppState'
import App from './App'

const httpLink = createHttpLink({
  uri: 'https://petgram-server-anthony-3vrjckvsb.vercel.app/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === 'invalid_token') {
    window.sessionStorage.removeItem('token')
    window.location = '/'
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    errorMiddleware,
    authLink.concat(httpLink)
  ])
})

ReactDOM.render(
  <AppState>
    <Aprovider client={client}>
      <App />
    </Aprovider>
  </AppState>
  , document.getElementById('app'))

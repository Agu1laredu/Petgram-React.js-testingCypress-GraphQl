import { gql, useMutation } from '@apollo/react-hooks'

const REGISTER = gql`
    mutation signup($input: UserCredentials!) {
        signup(input:$input)
    }
`
export const useRegisterMutation = () => {
  const [RegisterMutation, { data, loading, error }] = useMutation(REGISTER)
  return { RegisterMutation, data, loading, error }
}

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`

export const useLoginMutation = () => {
  const [LoginMutation, { data, error, loading }] = useMutation(LOGIN)
  return { LoginMutation, data, error, loading }
}

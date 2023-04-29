import { gql, useMutation } from '@apollo/react-hooks'

const SET_LIKE_ANONYMOUS_PHOTO = gql`
    mutation likeAnonymousPhoto($input: LikePhoto!) {
        likeAnonymousPhoto(input: $input) {
            id,
            liked,
            likes
        }
    }
`

export const useSetLikeAnonymousPhoto = (id) => {
  const [toggleLikeAnonymous, data] = useMutation(SET_LIKE_ANONYMOUS_PHOTO, { variables: { input: { id } } })
  return { toggleLikeAnonymous, data }
}

const SET_LIKE_AUTH_USER_PHOTO = gql`
    mutation likePhoto($input: LikePhoto!) {
        likePhoto(input: $input) {
            id,
            liked,
            likes
        }
    }
`

export const useSetLikePhoto = (id) => {
  const [toggleLike, data] = useMutation(SET_LIKE_AUTH_USER_PHOTO, { variables: { input: { id } } })
  return { toggleLike, data }
}

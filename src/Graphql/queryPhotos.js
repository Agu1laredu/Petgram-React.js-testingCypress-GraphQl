import { gql, useQuery } from '@apollo/react-hooks'

const GET_PHOTOS = gql`
    query getPhotos($categoryId: ID) {
        photos(categoryId: $categoryId) {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`
export const useGetPhotos = (categoryId) => {
  const { loading, error, data } = useQuery(GET_PHOTOS, { variables: { categoryId } })
  return { loading, error, data }
}

const GET_SINGLE_PHOTO = gql`
    query getSinglePhoto($id: ID!) {
        photo(id: $id) {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`

export const useGetSinglePhoto = (id) => {
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, { variables: { id } })
  return { loading, error, data }
}

const GET_FAVS = gql`
    query getFavs {
        favs {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`

export const useGetFavs = () => {
  const { data, error, loading } = useQuery(GET_FAVS, { fetchPolicy: 'cache-and-network' })
  return { data, error, loading }
}

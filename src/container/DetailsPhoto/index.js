import React from 'react'
import { Loader } from '../../components/Loader'
import { CenterLoader, PhotoWrapper } from './styles'
import { useGetSinglePhoto } from '../../Graphql/queryPhotos'
import { PhotoCard } from '../../components/PhotoCard'

export const DetailsPhotoCard = ({ id }) => {
  const { loading, error, data } = useGetSinglePhoto(id)
  if (loading) {
    return (
      <CenterLoader>
        <Loader />
      </CenterLoader>
    )
  }

  if (error) return <h1>Error...</h1>

  return (
    <PhotoWrapper>
      <PhotoCard {...data.photo} />
    </PhotoWrapper>
  )
}

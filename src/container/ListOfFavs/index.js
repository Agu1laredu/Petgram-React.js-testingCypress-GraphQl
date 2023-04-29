import React from 'react'
import { useGetFavs } from '../../Graphql/queryPhotos'
import { Loader } from '../../components/Loader'
import { ListPhotosLoaderWrapper } from '../ListOfPhotoCards/styles'
import { Link, Grid, Image, Title } from './styles'

export const ListOfFavs = () => {
  const { data, error, loading } = useGetFavs()

  if (loading) {
    return (
      <ListPhotosLoaderWrapper>
        <Loader />
      </ListPhotosLoaderWrapper>
    )
  }

  if (error) return <h1>Error</h1>

  return (
    <>
      <Title>Publicaciones favoritas</Title>
      <Grid>
        {
        data.favs.map(fav => (
          <Link key={fav.id} to={`/detail/${fav.id}`}><Image src={fav.src} /></Link>
        ))
      }
      </Grid>
    </>

  )
}

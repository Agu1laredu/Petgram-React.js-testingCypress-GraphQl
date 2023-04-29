import React from 'react'
import { ListOfFavs } from '../container/ListOfFavs'
import { Helmet } from 'react-helmet'

const Fav = () => {
  return (
    <>
      <Helmet>
        <title>Petgram - Tus fotos favorita</title>
        <meta name='description' content='Encuentra y postea fotos de las mascotas mas bonitas del mundo con Petgram' />
      </Helmet>
      <ListOfFavs />
    </>
  )
}

export default Fav

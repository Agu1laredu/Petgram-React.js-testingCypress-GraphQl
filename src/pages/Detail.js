import React from 'react'
import { DetailsPhotoCard } from '../container/DetailsPhoto'
import { Helmet } from 'react-helmet'

const Detail = ({ id }) => {
  return (
    <>
      <Helmet>
        <title>Petgram - Detalles de la foto</title>
        <meta name='description' content='Aqui encuentras tus fotos favoritas' />
      </Helmet>
      <DetailsPhotoCard id={id} />
    </>
  )
}

export default Detail

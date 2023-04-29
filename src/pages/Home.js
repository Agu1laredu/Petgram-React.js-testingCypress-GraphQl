import React from 'react'
import { ListOfCategories } from '../container/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Helmet } from 'react-helmet'

const HomePage = ({ id }) => {
  return (
    <>
      <Helmet>
        <title>Petgram - App de fotos para mascotas</title>
        <meta name='description' content='Encuentra y postea fotos de las mascotas mas bonitas del mundo con Petgram' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})

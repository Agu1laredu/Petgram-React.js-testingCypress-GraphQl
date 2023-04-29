import React from 'react';
import { PhotoCard } from '../../components/PhotoCard';
import { Loader } from '../../components/Loader';
import { ListPhotos, ListPhotosLoaderWrapper } from './styles';
import { useGetPhotos } from '../../Graphql/queryPhotos';

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useGetPhotos(categoryId);

  if (loading) {
    return (
      <ListPhotosLoaderWrapper>
        <Loader />
      </ListPhotosLoaderWrapper>
    );
  }

  if (error) return <p>{error}</p>;

  return (
    <ListPhotos>
      {data.photos.map((photo) => (
        <li key={photo.id}>
          <PhotoCard {...photo} />
        </li>
      ))}
    </ListPhotos>
  );
};

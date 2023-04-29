import React from 'react';
import { Link } from '@reach/router';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { ImgWrapper, Img, Article } from './styles';
import PropTypes from 'prop-types';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const { element, show } = useIntersectionObserver();

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt="image" />
            </ImgWrapper>
          </Link>
        </>
      )}
    </Article>
  );
};

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName];
    if (propValue === undefined) {
      return new Error('Value must be defined');
    }
    if (propValue < 0) {
      return new Error('Value must greater tan 0');
    }
  },
};

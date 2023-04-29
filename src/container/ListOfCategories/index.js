/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import { useCategoriesData } from '../../hooks/useCategoriesData';
import { Category } from '../../components/Category';
import { Loader } from '../../components/Loader';
import { List, Item, LoaderWrapperListCategories } from './styles';

const API =
  'https://petgram-server-roy-react-91yyzd508-royvargas55.vercel.app/categories';

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData(API);
  const [showFixed, setShowFixed] = useState(false);

  useEffect(
    function () {
      const onScroll = (e) => {
        const newShowFixed = window.scrollY > 200;
        showFixed !== newShowFixed && setShowFixed(newShowFixed);
      };
      document.addEventListener('scroll', onScroll);

      return () => document.removeEventListener('scroll', onScroll);
    },
    [showFixed]
  );

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} path={`/pet/${category.id}`} />
        </Item>
      ))}
    </List>
  );

  if (loading) {
    return (
      <LoaderWrapperListCategories>
        <Loader />
      </LoaderWrapperListCategories>
    );
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};

export const ListOfCategories = React.memo(ListOfCategoriesComponent);

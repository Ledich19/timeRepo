import React, { useState } from 'react';
import { fetchPhotosByQuery } from 'services/api';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallerry/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import css from './APP.module.css';

export function App() {
  const [photos, setPhotos] = useState([]);
  const [page, ] = useState(1);
  const [isLoading, setSsLoading] = useState(false);
  // const [error, setError] = useState('');
  // const [largeImageURL, setLargeImageURL] = useState('');

  const getData = async query => {
    setSsLoading(true);
    const data = await fetchPhotosByQuery(query, page);
    setSsLoading(false);
    setPhotos(data);
  };
  const handleClickPhoto = () => {};
  const handleButton = () => {};

  return (
    <div className={css.App}>
      <SearchBar onSubmit={getData} />
      {isLoading && <Loader />}
      {photos.length > 0 ? (
        <ImageGallery photos={photos} onClickPhoto={handleClickPhoto} />
      ) : null}
      <ImageGallery photos={photos} onClickPhoto={handleClickPhoto} />
      <Button onLoad={handleButton} />
    </div>
  );
}

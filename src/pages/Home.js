import React from 'react';
import SearchForm from '../components/SearchForm';
import CocktailList from '../components/CocktialList';

const Home = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;

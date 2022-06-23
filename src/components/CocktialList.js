import React from 'react';
import Cocktail from './Cocktail';
import { useGlobalContext } from '../context';
import Loading from '../components/Loading';

const CocktialList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <section>
        <h1 className="section-title">
          no cocktails matched your search criteria
        </h1>
      </section>
    );
  }

  return (
    <section className="section">
      <h1 className="section-title">cocktails</h1>
      <div className="cocktails-center">
        {cocktails.map((cocktail) => {
          const {
            idDrink: id,
            strDrink: name,
            strGlass: glass,
            strAlcoholic: info,
            strDrinkThumb: image,
          } = cocktail;
          const drinks = { id, name, glass, info, image };
          return <Cocktail key={id} {...drinks} />;
        })}
      </div>
    </section>
  );
};

export default CocktialList;

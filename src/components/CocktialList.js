import React from 'react';
import Cocktail from './Cocktail';

const CocktialList = () => {
  return (
    <section className="section">
      <h1 className="section-title">cocktails</h1>
      <div className="cocktails-center">
        <Cocktail />
      </div>
    </section>
  );
};

export default CocktialList;

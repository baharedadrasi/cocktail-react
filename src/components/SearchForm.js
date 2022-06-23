import React from 'react';

const SearchForm = () => {
  return (
    <section className="section search-section">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input type="text" id="name" />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;

import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const searchValue = React.useRef();
  const { setSearchTerm } = useGlobalContext();

  const search = () => {
    setSearchTerm(searchValue.current.value);
  };

  React.useEffect(() => {
    searchValue.current.focus();
    setSearchTerm('a');
  }, []);

  return (
    <section className="section search-section">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input type="text" id="name" ref={searchValue} onChange={search} />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;

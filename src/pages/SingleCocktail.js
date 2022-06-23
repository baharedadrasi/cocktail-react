import React from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [cocktail, setCocktail] = React.useState(null);
  const fetchDrink = async () => {
    setLoading(true);
    try {
      const { data } = await axios(`${url}${id}`);
      const { drinks } = data;
      if (drinks) {
        setCocktail(drinks[0]);
      } else {
        setCocktail(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  React.useEffect(() => {
    fetchDrink();
  }, [url]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  }

  const {
    strDrink: name,
    strCategory: category,
    strAlcoholic: info,
    strGlass: glass,
    strInstructions: instructions,
    strDrinkThumb: image,
  } = cocktail;

  const ingredients = [
    cocktail.strIngredient1,
    cocktail.strIngredient2,
    cocktail.strIngredient3,
    cocktail.strIngredient4,
    cocktail.strIngredient5,
    cocktail.strIngredient6,
  ];

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn-primary btn">
        back home
      </Link>
      <h2 className="section-title">{name}</h2>
      <article className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info :</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions :</span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {ingredients.map((ingridient, index) => (
              <span key={index}>{ingridient}</span>
            ))}
          </p>
        </div>
      </article>
    </section>
  );
};

export default SingleCocktail;

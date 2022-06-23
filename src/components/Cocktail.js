import React from 'react';
import { Link } from 'react-router-dom';

const id = 1;

const Cocktail = () => {
  return (
    <>
      <article className="cocktail">
        <img
          src="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg"
          alt=""
        />
        <div className="cocktail-footer">
          <h3>name</h3>
          <h4>glass</h4>
          <p>info</p>
          <Link
            className="btn btn-primary btn-details"
            to={`/cocktails/:${id}`}
          >
            details
          </Link>
        </div>
      </article>
      <article className="cocktail">
        <img
          src="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg"
          alt=""
        />
        <div className="cocktail-footer">
          <h3>name</h3>
          <h4>glass</h4>
          <p>info</p>
          <Link
            className="btn btn-primary btn-details"
            to={`/cocktails/:${id}`}
          >
            details
          </Link>
        </div>
      </article>
      <article className="cocktail">
        <img
          src="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg"
          alt=""
        />
        <div className="cocktail-footer">
          <h3>name</h3>
          <h4>glass</h4>
          <p>info</p>
          <Link
            className="btn btn-primary btn-details"
            to={`/cocktails/:${id}`}
          >
            details
          </Link>
        </div>
      </article>
    </>
  );
};

export default Cocktail;

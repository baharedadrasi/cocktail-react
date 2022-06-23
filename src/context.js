import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

const AppContext = React.createContext();

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState('a');

  return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

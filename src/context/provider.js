//import liraries
import React, {useState} from 'react';
import StoreContext from '.';

// create a component
const Provider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLogin, setIslogin] = useState(false);
  const addCart = product => {
    setCart([...cart, product]);
  };
  const addToFavorites = product => {
    product.favorite = true;
    setFavorites([...favorites, product]);
  };
  return (
    <StoreContext.Provider
      value={{
        cart,
        addCart,
        isLogin,
        setIslogin,
        favorites,
        setFavorites,
        addToFavorites,
      }}>
      {children}
    </StoreContext.Provider>
  );
};
export default Provider;
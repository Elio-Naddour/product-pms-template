import About from '../pages/About';
import Home from '../pages/Home';
import Products from '../pages/Products';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routeNames from './routeNames';
import ProductDetails from 'src/pages/ProductDetails';

const Routers = () => {
  return (
    <Routes>
      <Route path={routeNames.home} element={<Home />} />
      <Route path={routeNames.about} element={<About />} />
      <Route path={routeNames.products} element={<Products />} />
      <Route path={routeNames.productDetails().href} element={<ProductDetails />} />
      {/* <Route path='*' element={<NotFount />} /> */}
    </Routes>
  );
};
export default Routers;

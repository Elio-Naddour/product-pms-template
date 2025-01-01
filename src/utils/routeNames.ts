const routeNames = {
  home: '/',
  products: '/products',
  productDetails: (id?) => ({
    as: `/productDetails/${id}`,
    href: '/productDetails/:id',
  }),
  about: '/about',
};
export default routeNames;

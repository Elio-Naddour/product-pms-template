import React, { lazy, Suspense } from 'react';
import { Button } from 'react-bootstrap';
// import ProductCard from 'src/components/molecules/ProductCard/ProductCard';
import './products.scss';
import { Products } from 'src/types/productsTypes';
import Spinner from 'react-bootstrap/Spinner';

const ProductCard = lazy(
  () => import('src/components/molecules/ProductCard/ProductCard')
);

interface ListProps {
  products: Products[];
  onDeleteClick: (id: string) => void;
  onEditClick: (id: string) => void;
  onAddClick: () => void;
}

const ProductsList: React.FC<ListProps> = ({
  products,
  onDeleteClick,
  onEditClick,
  onAddClick,
}) => {
  return (
    <div className='grid-container'>
      <Button onClick={onAddClick} className='add-button'>+ ADD </Button>

      {products?.map((item, index) => (
        <Suspense key={`${index}${item.id}`} fallback={<Spinner animation='border' variant='primary' />}>
          <ProductCard
            cardKey={`${index}${item.id}`}
            id={item.id}
            image={item.image}
            title={item.title}
            category={item.category}
            price={item.price}
            rating={item.rating.rate}
            onDeleteClick={() => {
              onDeleteClick(item.id.toString());
            }}
            onEditClick={() => {
              onEditClick(item.id.toString());
            }}
          />
        </Suspense>
      ))}
    </div>
  );
};

export default ProductsList;

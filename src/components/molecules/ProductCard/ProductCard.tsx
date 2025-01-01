import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './productCard.scss';
import { useNavigate } from 'react-router-dom';
import routeNames from 'src/utils/routeNames';
import editIcon from 'src/assets/edit-icon.png';
import deleteIcon from 'src/assets/delete-icon.png';

interface CardProps {
  cardKey: string;
  id: number;
  image: string;
  title: string;
  category: string;
  price: number;
  rating: number;
  onDeleteClick: () => void;
  onEditClick: () => void;
}

const ProductCard: React.FC<CardProps> = ({
  cardKey,
  id,
  image,
  title,
  category,
  price,
  rating,
  onDeleteClick,
  onEditClick,
}) => {
  const navigate = useNavigate();

  return (
    <Card key={cardKey} className='product-card shadow'>
      <a href={`${routeNames.productDetails(id).as}`}>
        <Card.Img className='product-image' src={image} alt='Card image' />
      </a>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{category}</Card.Text>
        <Card.Text className='text-success'>${price}</Card.Text>
        <Card.Text>{rating}/5</Card.Text>
      </Card.Body>
      <Card.Footer>
        <div className='button-container'>
          <Button className='button shadow' onClick={onEditClick}>
            <Card.Img
              className='button-image'
              src={editIcon}
              alt='edit image'
            />
          </Button>
          <Button className='button shadow' onClick={onDeleteClick}>
            <img className='button-image' src={deleteIcon} alt='delete image' />
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;

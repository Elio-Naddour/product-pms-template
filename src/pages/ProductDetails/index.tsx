import { useEffect, useRef } from 'react';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ErrorMessage from 'src/components/atoms/ErrorMessage/ErrorMessage';
import { fetchSingleProduct } from 'src/store/actions/productsActions';
import { RootState } from 'src/store/rootReducer';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { singleProduct, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return; // Prevent re-execution
    initialized.current = true;

    if (id) dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  return (
    <>
      {loading ? (
        <div>
          {' '}
          <Spinner animation='border' variant='primary' />
        </div>
      ) : (
        <>
          {error ? (
            <ErrorMessage message={error.message || error.data} />
          ) : (
            <Container fluid className='py-5'>
              <Row className='align-items-center'>
                <Col md={6} className='text-center'>
                  <img
                    src={singleProduct.image}
                    alt={singleProduct.title}
                    className='img-fluid rounded shadow'
                    style={{ maxHeight: '500px' }}
                  />
                </Col>

                <Col md={6}>
                  <h1>{singleProduct.title}</h1>
                  <p className='text-muted mb-4'>
                    Category: {singleProduct.category}
                  </p>
                  <h3 className='text-success mb-3'>${singleProduct.price}</h3>
                  <p className='mb-4'>{singleProduct.description}</p>
                  <p>
                    <strong>Rating:</strong> {singleProduct.rating.rate} / 5 (
                    {singleProduct.rating.count} reviews)
                  </p>
                </Col>
              </Row>
            </Container>
          )}
        </>
      )}
    </>
  );
};
export default ProductDetails;

import React, { useCallback, useState } from 'react';
import { Modal, Button, Spinner } from 'react-bootstrap';
import ProductForm from 'src/components/molecules/ProductForm/ProductForm';
import {
  addSingleProduct,
  updateSingleProduct,
} from 'src/store/actions/productsActions';
import { useDispatch } from 'react-redux';
import ErrorMessage from 'src/components/atoms/ErrorMessage/ErrorMessage';
import { errorResponse } from 'src/types/apiTypes';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/rootReducer';

interface ProductFormModalProps {
  show: boolean;
  onHide: () => void;
  handleRefreshProducts: () => void;
  loading: boolean;
  error: errorResponse | null;
  formType: 'add' | 'edit';
  id?: string;
}

interface ProductFormValues {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const ProductFormModal: React.FC<ProductFormModalProps> = ({
  show,
  onHide,
  handleRefreshProducts,
  loading,
  error,
  formType,
  id,
}) => {
  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useSelector((state: RootState) => state.categories);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState<any>({});

  const [formValues, setFormValues] = useState<ProductFormValues>({
    title: '',
    price: 0,
    description: '',
    image: '',
    category: '',
  });

  const onConfirm = useCallback(async () => {
    if (formType === 'add')
      await dispatch(
        addSingleProduct(
          formValues.title,
          formValues.price,
          formValues.description,
          formValues.image,
          formValues.category
        )
      );
    else if (id)
      await dispatch(
        updateSingleProduct(
          id,
          formValues.title,
          formValues.price,
          formValues.description,
          formValues.image,
          formValues.category
        )
      );
    handleRefreshProducts();
  }, [dispatch, formType, formValues, handleRefreshProducts, id]);

  const hideModalHandler = () => {
    onHide();
    setErrors({});
    setFormValues({
      title: '',
      price: 0,
      description: '',
      image: '',
      category: '',
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: any = {};

    if (!formValues.title) newErrors.title = 'Title is required';
    if (!formValues.price || formValues.price <= 0)
      newErrors.price = 'Price must be a positive number';
    if (!formValues.description)
      newErrors.description = 'Description is required';
    if (!formValues.image) newErrors.image = 'Image URL is required';
    else if (!/^https?:\/\/[^\s$.?#].[^\s]*$/.test(formValues.image))
      newErrors.image = 'Invalid URL format';
    if (!formValues.category) newErrors.category = 'Category is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onConfirm();
    hideModalHandler();
  };

  return (
    <Modal show={show} onHide={!loading ? hideModalHandler : () => {}} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {formType === 'add' ? 'Add Product' : 'Edit Product'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {categoriesLoading ? (
          <Spinner animation='border' variant='primary' />
        ) : (
          <ProductForm
            handleSubmit={handleSubmit}
            errors={errors}
            formValues={formValues}
            setFormValues={setFormValues}
            categories={categories}
          />
        )}
      </Modal.Body>
      {error ? <ErrorMessage message={error.message} /> : <></>}
      {categoriesError ? (
        <ErrorMessage message={categoriesError.message} />
      ) : (
        <></>
      )}
      <Modal.Footer>
        <Button
          variant='secondary'
          disabled={loading}
          onClick={hideModalHandler}
        >
          Cancel
        </Button>
        <Button
          type='submit'
          variant='primary'
          disabled={loading}
          onClick={handleSubmit}
        >
          {loading ? (
            <Spinner size='sm' animation='border' color='white' />
          ) : (
            'Submit'
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductFormModal;

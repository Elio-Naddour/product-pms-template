import React, { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  clearCrudError,
  clearProducts,
  deleteSingleProduct,
  fetchProducts,
} from '../../store/actions/productsActions';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import DeleteModal from 'src/components/molecules/DeleteModal/DeleteModal';
import ProductFormModal from 'src/components/organisms/ProductFormModal/ProductFormModal';
import ErrorMessage from 'src/components/atoms/ErrorMessage/ErrorMessage';
import { Spinner } from 'react-bootstrap';
import { fetchCategories } from 'src/store/actions/categorisActions';
const ProductsList = lazy(
  () => import('src/components/organisms/ProductsList/ProductsList')
);

const Products = () => {
  const [show, setShow] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string>('');

  const [showAdd, setShowAdd] = useState<boolean>(false);

  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [selectedIdEdit, setSelectedIdEdit] = useState<string>('');

  const { products, loading, error, crudLoading, crudError } = useSelector(
    (state: RootState) => state.products
  );

  const dispatch = useDispatch();
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return; // Prevent re-execution
    initialized.current = true;

    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleRefreshProducts = () => {
    dispatch(clearProducts());
    dispatch(fetchProducts());
  };

  const deleteProduct = useCallback(async () => {
    if (!selectedId) return;
    await dispatch(deleteSingleProduct(selectedId));
    handleRefreshProducts();
    setSelectedId('');
    setShow(false);
  }, [dispatch, selectedId]);

  const onDeleteClick = (id: string) => {
    setSelectedId(id);
    setShow(true);
  };
  const onEditClick = (id: string) => {
    setShowEdit(true);
    setSelectedIdEdit(id);
  };
  const onAddClick = () => {
    setShowAdd(true);
  };

  const onDeleteHide = () => {
    setShow(false);
    dispatch(clearCrudError());
  };
  const onAddHide = () => {
    setShowAdd(false);
    dispatch(clearCrudError());
  };

  const onEditHide = () => {
    setShowEdit(false);
    setSelectedIdEdit('');
    dispatch(clearCrudError());
  };

  return (
    <>
      {' '}
      {loading ? (
        <Spinner animation='border' variant='primary' />
      ) : (
        <>
          {error ? (
            <ErrorMessage message={error.message || error.data} />
          ) : (
            <Suspense fallback={<div>listing...</div>}>
              <ProductsList
                products={products}
                onDeleteClick={onDeleteClick}
                onEditClick={onEditClick}
                onAddClick={onAddClick}
              />
            </Suspense>
          )}

          <DeleteModal
            show={show}
            onHide={onDeleteHide}
            onConfirm={deleteProduct}
            loading={crudLoading}
            error={crudError}
          />
          <ProductFormModal
            show={showAdd}
            onHide={onAddHide}
            handleRefreshProducts={handleRefreshProducts}
            loading={crudLoading}
            error={crudError}
            formType='add'
          />
          <ProductFormModal
            show={showEdit}
            onHide={onEditHide}
            handleRefreshProducts={handleRefreshProducts}
            loading={crudLoading}
            error={crudError}
            formType='edit'
            id={selectedIdEdit}
          />
        </>
      )}
    </>
  );
};
export default Products;

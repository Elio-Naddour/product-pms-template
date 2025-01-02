import React from 'react';
import { Modal, Button, Spinner } from 'react-bootstrap';
import ErrorMessage from 'src/components/atoms/ErrorMessage/ErrorMessage';
import { errorResponse } from 'src/types/apiTypes';

interface DeleteProps {
  show: boolean;
  onHide: () => void;
  onConfirm: () => void;
  loading: boolean;
  error: errorResponse| null;
}

const DeleteModal: React.FC<DeleteProps> = ({
  show,
  onHide,
  onConfirm,
  loading,
  error,
}) => {
  return (
    <Modal show={show} onHide={!loading ? onHide : () => {}} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete this item? This action cannot be undone.
      </Modal.Body>
      {error ? <ErrorMessage message={error.message || error.data} /> : <></>}
      <Modal.Footer>
        <Button variant='secondary' disabled={loading} onClick={onHide}>
          Cancel
        </Button>
        <Button variant='danger' disabled={loading} onClick={onConfirm}>
          {loading ? <Spinner size='sm' animation='border' color='white' /> : 'Delete'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;

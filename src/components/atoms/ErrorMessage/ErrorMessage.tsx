import React from 'react';
import { Alert } from 'react-bootstrap';
import './ErrorMessage.scss';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className='error-message-container'>
      <Alert variant='danger'>
        <Alert.Heading>Error</Alert.Heading>
        <p>{message}</p>
      </Alert>
    </div>
  );
};

export default ErrorMessage;

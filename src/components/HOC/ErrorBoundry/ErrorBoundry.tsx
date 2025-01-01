import React, { Component, ErrorInfo } from 'react';
import ErrorMessage from 'src/components/atoms/ErrorMessage/ErrorMessage';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorMessage message='Something went wrong, please refresh and try again.'/>
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
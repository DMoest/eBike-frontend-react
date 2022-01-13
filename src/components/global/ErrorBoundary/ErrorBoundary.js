import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error: error, hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <>{this.error.toString()}</>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

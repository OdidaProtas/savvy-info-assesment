import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
  }

  render(): any {
    const { hasError } = this.state as any;
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <h1 style={{ color: "red", marginBottom: "20px", marginTop: "20px" }}>
          Something went wrong in this part of the page.
        </h1>
      );
    }

    return this.props.children;
  }
}

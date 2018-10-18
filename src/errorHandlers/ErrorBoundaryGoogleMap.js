import React, { Component } from 'react'

class ErrorBoundaryGoogleMap extends Component {
    constructor(props) {
      super(props);
      this.state = { mapError: false };
    }
  
    componentDidCatch(error) {
      this.setState({ mapError: true });
    }
  
    render() {
      if (this.state.mapError) {
        return (
            <h1 className="Error-boundary-google-map">
                Something went wrong.<br></br>This map is not available right now. 
            </h1>
        )
      }
      return this.props.children;
    }
  }

export default ErrorBoundaryGoogleMap
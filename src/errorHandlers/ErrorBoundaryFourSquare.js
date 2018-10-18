import React, { Component } from 'react'

class ErrorBoundaryFourSquare extends Component {
    constructor(props) {
      super(props);
      this.state = { foursquareError: false };
    }
  
    componentDidCatch(error) {
      this.setState({ foursquareError: true });
    }
  
    render() {
      if (this.state.mapError) {
        return (
            <p className="Error-boundary-foursquare">
                Something went wrong.<br></br>Some information may <br></br>not be available right now. 
            </p>
        )
      }
      return this.props.children;
    }
  }

export default ErrorBoundaryFourSquare
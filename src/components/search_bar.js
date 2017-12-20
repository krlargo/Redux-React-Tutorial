// "Pull off 'Component' as variable called 'Component'"
//  This way we don't need 'React.Component'
import React, { Component } from 'react';

// Doesn't need DOM because this will be anchored onto something else
//import ReactDOM from 'react-dom';

// Class-based component instead of functional component
// (i.e. not SearchBar = () => {})
class SearchBar extends Component {
  render() {
    return <input
      onChange={this.onInputChange} // Always wrap JS vars in {}
    />;
  }

  // All event handlers (onInputChange) have an event object (event)
  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar; // The outward end of an import statement

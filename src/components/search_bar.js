// "Pull off 'Component' as variable called 'Component'"
//  This way we don't need 'React.Component'
import React, { Component } from 'react';

// Doesn't need DOM because this will be anchored onto something else
//import ReactDOM from 'react-dom';

// Class-based component instead of functional component
// (i.e. not SearchBar = () => {})
class SearchBar extends Component {
  // Only class-based components have state (function-based ones don't)
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
      <input
        // Controlled component; value only changes when state changes
        value={this.state.term}
        onChange={event => this.setState({ term: event.target.value })}
        />
      </div>
    )
  }
}

export default SearchBar; // The outward end of an import statement

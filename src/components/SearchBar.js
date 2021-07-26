import React from 'react';

class SearchBar extends React.Component {
  // Initialize state to empty string
  state = { term: '' };

  // Make sure to use arrow function syntax for callbacks so as to avoid bugs around 'this'
  onFormSubmit = (e) => {
    e.preventDefault();
    // This is invoking the onSubmit prop passed in from the App.js component. Its value is the method onSearchSubmitS
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className='search-bar ui segment'>
        <form
          className='ui form'
          // Run the onFormSubmit method on submit
          onSubmit={this.onFormSubmit}
        >
          <div className='field'>
            <label>Image Search</label>
            <input
              type='text'
              // Set initial value to blank state
              value={this.state.term}
              // Set the state to user input
              onChange={(e) => {
                // The component will re-render when setState is used
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

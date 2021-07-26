import React from 'react';
// Convention is to put 3rd party import statements before files
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] };

  // Async/await syntax can be used on class methods
  onSearchSubmit = async (term) => {
    // Await for the results with the query term the print the results
    // Refer to the unsplash api call in separate file
    const response = await unsplash.get('/search/photos', {
      // API Options, params will update to the search term them make the search request
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '2rem' }}>
        <SearchBar
          // This is a method passed as a prop that is passed into the search bar component
          onSubmit={this.onSearchSubmit}
        />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

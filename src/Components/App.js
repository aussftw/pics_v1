import React from 'react';
import SearchBar from './SearchBar';
import axios from '../../node_modules/axios';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit =  async (term)  => {
    const response = await axios .get('https://api.unsplash.com/search/photos', {
      params: { query: term },  
      headers: {
        Authorization: 
          'Client-ID 71a3d05390572a4b903a34bec999e8278afcb2ecfa59b7390cc5cc00e4b3ab02'
      } 
    });  
    this.setState({ images: response.data.results });
  }

  render() {
      return (
        <div className="ui container" style={{marginTop: '10px'}}>
          <SearchBar onSubmit={this.onSearchSubmit} />
            Found: {this.state.images.length} images
        </div>
      );
  }
}

export default App;

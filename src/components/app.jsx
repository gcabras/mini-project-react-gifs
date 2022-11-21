import React, { Component } from 'react';
// import components
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const apiKey = 'rsLK9cV9q4zzlgEvFbeNfWRxNsOWNGC7';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGif: 'xT9IgDEI1iZyb2wqo8'
    };
  }

  // Giphy API
  search = (query) => {
    const giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=25&offset=0&rating=g&lang=en`;
    fetch(giphyUrl).then(response => response.json()).then((data) => {
      const gifsArray = data.data.map(giph => giph.id); // to map data to the ids!!!
      this.setState({
        gifs: gifsArray
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGif: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
};

export default App;

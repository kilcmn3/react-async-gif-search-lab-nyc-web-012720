import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';
export default class GifListContainer extends Component {
  state = {
    gifs: [],
    search: 'dolphin',
  };
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.search !== prevState.search) {
      this.fetchData();
    }
  }
  fetchData = () => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=UotADzOXjgcFdZ56j5Xi8adiavLAWf7q`
    )
      .then((response) => response.json())
      .then((datas) => {
        let gifs = [];
        for (let i = 0; i < 3; i++) {
          gifs.push(datas['data'][i]['images']['original']);
        }
        this.setState({ gifs }, () => console.log(this.state.gifs));
      });
  };
  renderGifs = () => {
    return this.state.gifs.map((gif, index) => {
      return <GifList key={index} image={gif.url} />;
    });
  };
  handleChange = (search) => {
    if (!search) {
      search = 'dolphin';
    }
    this.setState({ search }, () => console.log(this.state));
  };
  handleSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <div className='gifs container'>
        <ul>{this.renderGifs()}</ul>
        <GifSearch
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

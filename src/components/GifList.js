import React, { Component } from 'react';

export default class GifList extends Component {
  render() {
    return (
      <li className='gif card'>
        <img src={this.props.image} alt='' />
      </li>
    );
  }
}

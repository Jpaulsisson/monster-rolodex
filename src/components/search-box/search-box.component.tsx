import React, { Component } from 'react'
import './search-box.styles.css';

export class SearchBox extends Component {
  render() {

    const { onSearchChange, placeholder, className } = this.props;

    return (
      <div>
        <input 
        className={`search-box ${className}`}
        type='search' 
        placeholder={placeholder}
        onChange={onSearchChange}/>
      </div>
    )
  }
}

export default SearchBox

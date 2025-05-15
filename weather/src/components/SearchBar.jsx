import React, { useState } from 'react'
import '../styles/SearchBar.css'
const SearchBar = ({onSearch}) => {
    const [input ,setInput]=useState('')
    const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
    }
  };
  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={input}
          placeholder="Enter city"
          onChange={(e) => setInput(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    </div>
  )
}

export default SearchBar

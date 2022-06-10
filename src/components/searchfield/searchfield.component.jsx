import React from "react";
import './searchfield.style.scss';

export const SearchField = ({ placeholder , handleChange }) => (
      <input
            className="search" 
            type='search'
            placeholder={placeholder}
            onChange={handleChange}
      />
)

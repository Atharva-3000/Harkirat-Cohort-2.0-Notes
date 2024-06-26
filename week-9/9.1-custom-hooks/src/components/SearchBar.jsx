import React, { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';
const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <>
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
    <h1>
        Debounced Value: {debouncedValue}
    </h1>
    </>
    
  );
};

export default SearchBar;
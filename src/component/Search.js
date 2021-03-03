import React, { useState } from "react";
import "./Search.css";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = () => {
    onSearch(query);
  };

  return (
    <div className="search">
      <div className="search-c">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search username.."
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
    </div>
  );
};

export default Search;

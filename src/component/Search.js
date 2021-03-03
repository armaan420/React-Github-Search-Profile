import React, { useState } from "react";

const Search = ({ onClick }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = () => {
    onClick(query);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
};

export default Search;

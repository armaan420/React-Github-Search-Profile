import "./App.css";
import React, { useState } from "react";
import Search from "./component/Search";
import User from "./component/User";

function App() {
  const [user, setUser] = useState({});
  // const [query, setQuery] = useState("");

  const getUser = (query) => {
    fetch(`https://api.github.com/users/${query}`)
      .then((res) => res.json())
      .then(setUser);
  };

  return (
    <div className="App">
      <Search onSearch={getUser} />
      <User profile={user} />
      {user.location}
    </div>
  );
}

export default App;

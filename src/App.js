import "./App.css";
import React, { useState, useEffect } from "react";
import Search from "./component/Search";
import User from "./component/User";

function App() {
  const [user, setUser] = useState({});
  // const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/example`)
      .then((res) => res.json())
      .then(setUser)
      .then(() => console.log(user));
  }, []);

  const getUser = (query) => {
    fetch(`https://api.github.com/users/${query}`)
      .then((res) => res.json())
      .then(setUser);
  };

  return (
    <div className="App">
      <Search onSearch={getUser} />
      <User user={user} />
    </div>
  );
}

export default App;

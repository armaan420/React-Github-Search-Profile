import "./App.css";
import React, { useEffect, useState } from "react";
import Search from "./component/Search";

function App() {
  const [user, setUser] = useState({});
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users?name=${query}`)
      .then((res) => res.json())
      .then(setUser);
  }, [query]);

  return (
    <div className="App">
      <Search onClick={(q) => setQuery(q)} />
      {user.bio}
    </div>
  );
}

export default App;

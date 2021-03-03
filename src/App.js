import "./App.css";
import React, { useState, useEffect } from "react";
import Search from "./component/Search";
import User from "./component/User";
import Loader from "./component/Loader";

function App() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/example`)
      .then((res) => res.json())
      .then(setUser)
      .catch((e) => console.log(e));

    setLoading((loading) => !loading);
  }, []);

  const getUser = (query) => {
    setLoading((loading) => !loading);
    fetch(`https://api.github.com/users/${query}`)
      .then((res) => res.json())
      .then(setUser)
      .catch((e) => setUser("fail"));
    setLoading((loading) => !loading);
  };

  return (
    <div className="App">
      <Search onSearch={getUser} />
      {loading ? <Loader /> : <User user={user} />}
    </div>
  );
}

export default App;

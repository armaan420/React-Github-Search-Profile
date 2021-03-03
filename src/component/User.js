import React from "react";

const User = ({ user }) => {
  return (
    <div className="container">
      <div className="img">
        <img
          src={
            user
              ? user.avatar_url
              : "https://identicons.github.com/jasonlong.png"
          }
          alt={user ? user.name : "Pic"}
        />
      </div>
    </div>
  );
};

export default User;

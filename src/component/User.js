import React from "react";
import "./User.css";
import { RiSendPlaneFill } from "react-icons/ri";
import { BiGitRepoForked } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";

const User = ({ user }) => {
  return (
    <div className="container">
      {user.value === "null" ? (
        <h1>User does not exit!</h1>
      ) : (
        <>
          <div className="img">
            <img src={user.avatar_url} alt={user.name} />
            <h3>{user.name ? user.name : "John Doe"}</h3>
            <h4>{user.bio}</h4>
          </div>
          <div className="info">
            <div className="child">
              {user.location && (
                <div>
                  <h4>Location:</h4>
                  <p>{user.location}</p>
                </div>
              )}
            </div>
            <div className="child">
              {user.email && (
                <div>
                  <h4>Email:</h4>
                  <p>{user.email}</p>
                </div>
              )}
            </div>
            <div className="child">
              {user.company && (
                <div>
                  <h4>Company:</h4>
                  <p>{user.company}</p>
                </div>
              )}
            </div>
            <div className="child">
              {user.public_repos && (
                <div>
                  <h4>Public Repositories:</h4>
                  <p>{user.public_repos}</p>
                </div>
              )}
            </div>
            <div className="child">
              {user.followers && (
                <div>
                  <h4>Followers:</h4>
                  <p>{user.followers}</p>
                </div>
              )}
            </div>
            <div className="child">
              {user.twitter_username && (
                <h4>
                  Twitter: <FaTwitter />
                </h4>
              )}
              {user.twitter_username && <p>{user.twitter_username}</p>}
            </div>
            <div className="child">
              {user.repos_url && (
                <a target="blank" href={user.repos_url}>
                  Repositories <BiGitRepoForked />
                </a>
              )}
            </div>
            <div className="child">
              {user.repos_url && (
                <a target="blank" href={user.html_url}>
                  Check github <RiSendPlaneFill />
                </a>
              )}
            </div>
            <div className="child">
              {user.created_at && (
                <div>
                  <h4>Created acount on:</h4>

                  <p>{user.created_at.slice(0, 10)}</p>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default User;

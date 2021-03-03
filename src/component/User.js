import React from "react";
import "./User.css";
import { RiSendPlaneFill } from "react-icons/ri";
import { BiGitRepoForked } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";

const User = ({ user }) => {
  return (
    <div className="container">
      <div className="img">
        <img src={user.avatar_url} alt={user.name} />
        <h3>{user.name}</h3>
        <br />
        <h4>{user.bio}</h4>
      </div>
      <div className="info">
        <div className="child">
          {user.location && <h4>Location:</h4>}
          {user.location && <p>{user.location}</p>}
        </div>
        <div className="child">
          {user.email && <h4>Email:</h4>}
          {user.email && <p>{user.email}</p>}
        </div>
        <div className="child">
          {user.company && <h4>Company:</h4>}
          {user.company && <p>{user.company}</p>}
        </div>
        <div className="child">
          {user.public_repos && <h4>Public Repositories:</h4>}
          {user.public_repos && <p>{user.public_repos}</p>}
        </div>
        <div className="child">
          {user.followers && <h4>Followers:</h4>}
          {user.followers && <p>{user.followers}</p>}
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
          {user.created_at && <h4>Created acount on:</h4>}
          {user.created_at && <p>{user.created_at.slice(0, 10)}</p>}
        </div>
      </div>
    </div>
  );
};

export default User;

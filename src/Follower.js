import React from "react";

const Follower = ({ avatar_url, html_url, login }) => {
  return (
    <article className="card">
      <img src={avatar_url} alt={login}></img>
      <a href={html_url}>
        <h4>{login}</h4>
      </a>
    </article>
  );
};
export default Follower;

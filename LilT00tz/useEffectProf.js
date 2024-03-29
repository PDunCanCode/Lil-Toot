import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"

function Profile({ username }) {  const [profile, setProfile] = React.useState(null)

  React.useEffect(() => {
    getGithubProfile(username)
      .then(setProfile)
  }, [username])

  if (profile === null) {
    return <p>Loading...</p>
  }

  return (
    <React.Fragment>
      <h1>@{profile.login}</h1>
      <img
        src={profile.avatar_url}
        alt={`Avatar for ${profile.login}`}
      />
      <p>{profile.bio}</p>
    </React.Fragment>
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<Profile />, rootElement);

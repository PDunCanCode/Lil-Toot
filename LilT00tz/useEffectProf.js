import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"

function Profile (username) {
  const [profile, setProfile] = React.useState(null)

  React.useEffect(() => {
    getGitHubProfile('username').then(setProfile)
  }, [])
  
  fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
}

function Profile() {
  return (
    <div>
      <p>getGithubProfile will return an object full of properties 
        related to the profile of whatever username you pass in as the first argument</p>

      <p>Here's a sample response with the "username" of "tylermcginnis"</p>
      <pre>
        {JSON.stringify({
          login: 'tylermcginnis',
          avatar_url: 'https://avatars3.githubusercontent.com/u/2933430?v=4',
          bio: 'Educating at TylerMcGinnis.com. Google Developer Expert. Previous Director at DevMountain.'
        }, null, 2)}
      </pre>
    </div>
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<Profile />, rootElement);

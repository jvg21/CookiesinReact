import React from 'react';

type Props = {
    username: string
}
function WelcomePage(props:{ user:Props}) {
  return <h1>Welcome, {props.user.username}!</h1>;
}

export default WelcomePage;
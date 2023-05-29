import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';

function Home() {
  const { username } = useContext(AuthContext);

  return (
    <>
      <h1>Hello {username}</h1>
    </>
  );
}

export default Home;
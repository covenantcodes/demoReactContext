import React from 'react';
import { UserProvider } from './Context/UserContext.js';
import UserProfile from './UserProfile.js';
import UserInfo from './UserInfo.js';

const App = ()=> {
  return (
    <UserProvider>
      <UserProfile />
      <UserInfo />
    </UserProvider>
  );
}

export default App;

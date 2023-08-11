// UserProfile.js
import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { UserContext } from './Context/UserContext.js';

const UserProfile = ()=> {
  const { user, setUser } = useContext(UserContext);

  const handleLogin = () => {
    setUser({ username: 'exampleUser' });
  };

  return (
    <View>
      <Text>User Profile</Text>
      {user ? (
        <Text>Welcome, {user.username}!</Text>
      ) : (
        <Button title="Login" onPress={handleLogin} />
      )}
    </View>
  );
}

export default UserProfile;
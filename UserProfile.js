// UserProfile.js
import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { useUser } from './Context/UserContext.js';

const UserProfile = ()=> {
  const { user } = useUser();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {user ? (
        <Text>Welcome, {user.username}!</Text>
      ) : (
        <Text>Please log in to see user info.</Text>
      )}
    </View>
  );
}

export default UserProfile;
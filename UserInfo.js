// UserInfo.js
import { useContext } from 'react';
import { View, Text } from 'react-native';
import { UserContext } from './Context/UserContext.js';

const UserInfo = () =>{
  const { user } = useContext(UserContext);

  return (
    <View>
      <Text>User Info</Text>
      {user ? (
        <Text>Username: {user.username}</Text>
      ) : (
        <Text>Please log in to see user info.</Text>
      )}
    </View>
  );
}

export default UserInfo;
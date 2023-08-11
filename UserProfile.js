// UserProfile.js
import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useUser } from './Context/UserContext.js';

const UserProfileScreen = ()=> {
  const { user } = useUser();

  return (
    <View style={styles.container}>
      {user ? (
        <Text>Welcome, {user.username}!</Text>
      ) : (
        <Text>Please log in to see user info.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  }
})

export default UserProfileScreen;
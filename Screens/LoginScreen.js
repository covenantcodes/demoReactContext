import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { useUser } from '../Context/UserContext';

const LoginScreen = ({navigation}) => {
  const { setUser } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login validation logic here
    // For simplicity, let's assume successful login
    setUser({ username });
    navigation.navigate('UserProfile');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
          <Image
            source={require("../assets/icon.png")}
            style={styles.logo}
         /> 
      </View>
      <Text style={styles.loginText}>Login</Text>
      <TextInput
        placeholder="Username"
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, width: 200 }}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={{ marginBottom: 20, padding: 10, borderWidth: 1, width: 200 }}
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
       flex: 1, 
       justifyContent: 'center',
       alignItems: 'center' 
    },

    logoBox:{
        width: "30%",
        padding: 5,
        borderWidth: 1,
        alignItems: "center"
    },

    logo:{
        width: 60,
        height: 100
    }
})

export default LoginScreen;
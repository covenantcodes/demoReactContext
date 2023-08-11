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
        style={styles.textInput}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.textInput}
        value={password}
        onChangeText={setPassword}
      />

        <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

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
        alignItems: "center"
    },

    logo:{
        width: 60,
        height: 100
    },

    loginText:{
        marginBottom: 20, 
        fontSize:22,
        fontWeight:"bold",

    },

    textInput:{
        width: "80%",
        borderWidth: 1,
        borderColor: "gray",
        padding: 10,
        marginTop: 10,
        borderRadius: 15,
    }
})

export default LoginScreen;
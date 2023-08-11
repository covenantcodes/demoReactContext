import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
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

        <TouchableOpacity style={styles.buttonContainer}
            onPress={handleLogin}
        >
                    <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
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
        alignItems: "center",
        marginBottom: 12
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
        backgroundColor: "white",
        borderColor: "gray",
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 5
    },

    buttonContainer:{
        width: "80%",
        padding: 15,
        marginHorizontal: 20,
        marginTop: 15,
        backgroundColor: "orange",
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 10
    },

    buttonText: {
        textAlign: "center",
        color: "white",
        fontSize: 15
    },
})

export default LoginScreen;
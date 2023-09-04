import react,{useState} from "react";
import { View, Button, Text, TextInput, StyleSheet } from 'react-native';

const Login = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const mudarLogin = () => {
     console.log(`Logar com o email: ${email} e senha: ${senha}`);
    };

    return(
     <View style={styles.Container}>
        <Text style={styles.cabecalho}> Bem Vindo!!</Text>
        <TextInput
           style= {styles.input}
           placeholder="Digite seu Email@.com"
           value={email}
           onChangeText={(Text) => setEmail (Text)}
           />
      <Button title="Entrar" onPress={mudarLogin}/>
     </View>
    );
}


const styles = StyleSheet.create({
  Container : {
    flex : 1,
    justifyContent :'center',
    alignItems : 'center',
  },


  input:{
     width: '60%',
     padding: 20,
     marginBottom: 10,
     borderWidth: 2,
     borderColor: 'gray',
  },

  cabecalho: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  }

});

export default Login;
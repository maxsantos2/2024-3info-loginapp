import { View } from "react-native-web";
import { Button, Text, TextInput } from "react-native-paper";
import { useState } from "react"; 

export default function RegisterScreen({navigation}){
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const [repetirSenha,setRepetirSenha] = useState("");
    const [logradouro,setLograduro] = useState("");
    const [cep,setCep] = useState("");
    const [cidade,setCidade] = useState("");
    const [estado,setEstado] = useState("");

    //Nome, Email,Senha, Repetir Senha
    //Endereço: Logradouro, CEP, Cidade, Estado
    
    return (
        <View>
            <Text>Faça seu Registro</Text>
            <TextInput
            placeholder="Digite seu nome"
            value={nome}
            onChangeText={setNome}
            />
            <TextInput
            placeholder="Digite seu email"
            value={email}
            onChangeText={setEmail}
            />

            <Button
            onPress={()=> navigation.navigate("LoginScreen")}
            >Voltar ao Login </Button>
        </View>
    );
}

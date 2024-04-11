import { View } from "react-native";
import { Button, Text } from "react-native-paper";


export default function HomeScree({navigation}) {
return (
    <View>
        <Text>Bem vindo(o) ao nosso app</Text>
        <Button 
        onPress={() =>{navigation.navigate("LoginScreen");
        }}
        > 
        Logout
        </Button>
    </View>
);
}
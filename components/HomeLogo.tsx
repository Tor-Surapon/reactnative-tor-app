import { Image } from "expo-image";
import { Text, View } from "react-native";

export default function HomeLogo() {
  return (
    
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontSize: 30,fontWeight: 'bold', color: 'white'}}>React </Text>
        <Image 
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            style={{
                width: 40,
                height: 40
            }}
        />
        <Text style={{fontSize: 30,fontWeight: 'bold', color: 'white'}}> Native</Text>
    </View>
  )
}
import { useNavigation } from 'expo-router';
import { useEffect } from 'react'
import { View, Text } from 'react-native'

export default function AboutScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'เกี่ยวกับเรา',
      headerStyle: {
        backgroundColor: '#9dc31b'
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    });
  },[navigation]);

  return (
    <View>
      <Text>AboutScreen</Text>
    </View>
  )
}
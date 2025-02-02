import { Image, StyleSheet, View, Pressable, Button, Text } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import AppLogo from '@/components/AppLogo';
import { Link, router, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { DrawerActions } from '@react-navigation/native';
import HomeLogo from '@/components/HomeLogo';
import { Button as Button2 } from 'react-native-paper';

export default function HomeScreen() {
  const navigation = useNavigation();
  
  useEffect(() => {
      navigation.setOptions({
        // title: 'Home',
        headerTitle: () => <HomeLogo />,
        headerTitleAlign: 'center',
        headerShown: true,
        headerLeft: () => (
          <MaterialIcons.Button 
            name="menu"
            backgroundColor="#9dc31b"
            onPress={() => {
              navigation.dispatch(DrawerActions.openDrawer());
            }}
          />
        ),
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
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">
          Welcome3!
          <AppLogo title="my logo" />
          <AppLogo title="my logo 2" phone={100} />
        </ThemedText>
      </ThemedView>

      <View>
        <Link href="/about">About Us 1</Link>
      </View>

      <View>
        <Link href="/about" asChild>
          <Pressable style={{backgroundColor: 'green'}}>
            <Text>About Us 2</Text>
          </Pressable>
        </Link>
      </View>

      <View>
        <Button title="About us 3" onPress={() => {
            router.push('/about');
        }} />
        <Button2 icon="account-arrow-down" mode="contained" style={{ margin: 10}} onPress={() => {
          router.push('/about');
          }
        }>
          About us 3
        </Button2>
      </View>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 20,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 350,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

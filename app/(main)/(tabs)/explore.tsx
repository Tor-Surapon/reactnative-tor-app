import { Alert, Button, StyleSheet, Text, View, } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { HelloWave } from '@/components/HelloWave';
import { useEffect, useState } from 'react';

export default function TabTwoScreen() {
  const [title, setTitle] = useState("hello tpi");
  const isAuth = true;

  useEffect(() => {
     console.log('hello use effect'); 
  },[]);

  useEffect(() => {
    console.log('hello use effect 2'); 
  });

  useEffect(() => {
    console.log('hello use effect 3'); 
  },[title]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore { isAuth && <HelloWave /> }</ThemedText>
        <Text>row</Text>
        <Text>row</Text>
      </ThemedView>

      <View style={{ backgroundColor: 'yellow', padding: 10, borderWidth: 5, borderColor: 'red' }}>
        <Text style={styles.myText}>hello1</Text>
        <Text style={styles.myText}>hello2</Text>

        <Text style={{ color: 'green', fontSize: 18, marginBottom: 10, textAlign: 'center' }}>{title}</Text>
        <Button title="Press me" onPress={() => {
          // Alert.alert("สวัสดี react native");
          setTitle("hello react native");
        }} />
      </View>

    
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    backgroundColor: 'green',
    // height: '50%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  myText: {
    color: 'blue',
    fontWeight: 'bold'
  }
});

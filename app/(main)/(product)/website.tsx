import { View, Text, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';

export default function WebsiteScreen() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://www.youtube.com/watch?v=WWWxG4z3hLY' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
});
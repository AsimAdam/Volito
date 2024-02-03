import React from 'react';
import { WebView } from 'react-native-webview';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Score = ({ route }: any) => {
  const { url } = route.params;

  if (!url) {
    return (
      <View style={styles.centered}>
        <Text>No URL provided</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: url }}
        startInLoadingState
        renderLoading={() => (
          <ActivityIndicator
            color="#0000ff"
            size="large"
            style={StyleSheet.absoluteFillObject}
          />
        )}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Score;

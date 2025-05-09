import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export default function ItineraireScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Écran Itinéraire</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  text: {
    fontSize: 20,
    color: theme.colors.primary,
  },
});
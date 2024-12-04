import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function RosaryCounter() {
  // State to hold the count value
  const [count, setCount] = useState(0);

  // Function to reset the count
  const resetCount = () => setCount(0);

  // Function to increment the count
  const incrementCount = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.container}>
      {/* Counter Display */}
      <Text style={styles.counterText}>Tirada: {count}</Text>

      {/* Bird Icon */}
      <TouchableOpacity onPress={incrementCount}>
        <Image
          source={require('@/assets/images/bird.png')} // Replace with the correct image path
          style={styles.birdIcon}
        />
      </TouchableOpacity>

      {/* Reset Button */}
      <TouchableOpacity onPress={resetCount} style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Dib U Bilaaw</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  counterText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  birdIcon: {
    width: 100,
    height: 100,
    marginBottom: 32,
  },
  resetButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

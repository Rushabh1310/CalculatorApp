import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

// Get device width and height for responsive design
const { width } = Dimensions.get('window');

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Handle button press
  const handlePress = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch (e) {
        setResult('Error');
      }
    } else if (value === "C") {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  // Create button layout with different colors for different types of buttons
  const renderButton = (value, backgroundColor, textColor = '#fff') => (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={() => handlePress(value)}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.inputText}>{input}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          {['C', '%', '/'].map((item) => renderButton(item, '#ff9f00', '#fff'))}
        </View>
        <View style={styles.row}>
          {['7', '8', '9', '*'].map((item) => renderButton(item, '#f7f7f7', '#333'))}
        </View>
        <View style={styles.row}>
          {['4', '5', '6', '-'].map((item) => renderButton(item, '#f7f7f7', '#333'))}
        </View>
        <View style={styles.row}>
          {['1', '2', '3', '+'].map((item) => renderButton(item, '#f7f7f7', '#333'))}
        </View>
        <View style={styles.row}>
          {['0', '.', '=',].map((item) => renderButton(item, '#ff9f00', '#fff'))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
  },
  resultContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#333',
    borderRadius: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  inputText: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 10,
  },
  resultText: {
    fontSize: 60,
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10, // Add space between rows
  },
  button: {
    width: width * 0.18, // Each button width is 18% of screen width
    height: width * 0.18, // Button height is proportional to width
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    elevation: 8,
    margin: 6, // Add spacing between buttons
  },
  buttonText: {
    fontSize: 32,
    fontWeight: '600',
  },
});

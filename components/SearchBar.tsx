import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.area}>
      <TextInput 
        style={styles.input} 
        placeholder="Search for a scent..." 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  area: { paddingHorizontal: 20, marginBottom: 10 },
  input: { 
    backgroundColor: '#F3F3F3', 
    padding: 12, 
    borderRadius: 10, 
    borderWidth: 1, 
    borderColor: '#E0E0E0' 
  }
});

export default SearchBar;
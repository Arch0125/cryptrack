import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header} >
        <Text style={styles.headertext} >Market</Text>
      </View>
      <View style={styles.divider} />
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    
  },
  header:{
    flexDirection:"row",
    flex:1,
    marginTop:80,
    justifyContent:"space-between",
    paddingHorizontal:30
  },
  headertext:{
    fontSize:40,
    fontWeight:"bold"
  },
  divider:{
    height:1,
    backgroundColor:"grey",
    marginTop:16,
    
  }
});

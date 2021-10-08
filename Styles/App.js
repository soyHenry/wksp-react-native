import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ChildComponent = ({styleA, styleB}) => {
  return (
    <>
      <Text style={styleB}>Child red</Text>
      <Text style={styleA}>Child bigBlue</Text>
    </>
  )
}

const LotsOfStyles = () => {
    return (
      <View style={styles.container}>
        <Text style={{color: 'red'}}>just red</Text>
        <Text style={styles.red}>just red</Text>
        <Text style={{color: 'blue', fontWeight: 'bold', fontSize: 30}}>just bigBlue</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text style={{color: 'blue', fontWeight: 'bold', fontSize: 30, color: 'red'}}>bigBlue, then red</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        <Text style={{color: 'red', color: 'blue', fontWeight: 'bold', fontSize: 30}}>red, then bigBlue</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
        <ChildComponent styleA={styles.bigBlue} styleB={{color: 'red'}} />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default LotsOfStyles;
import React from 'react';
import { View } from 'react-native';

const PercentageDimensionsBasics = () => {
  return (
    <View style={{ height: '100%', width: '90%' }}>
      <View style={{
        height: '15%', backgroundColor: 'powderblue', width: '50%'
      }} />
      <View style={{
        width: '66%', height: '35%', backgroundColor: 'skyblue', width: '100%'
      }} />
      <View style={{
        width: '33%', height: '50%', backgroundColor: 'steelblue', width: '60%'
      }} />
    </View>
  );
};

export default PercentageDimensionsBasics;
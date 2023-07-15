import * as React from 'react';
import { Text, View } from 'react-native';
import CharacterCard from '../CharacterCard/CharacterCard';

export default function Home() {
  return (
    <View>
      <CharacterCard image={require('../../assets/icon.png')} name='Iron Man' />
      <CharacterCard image={require('../../assets/favicon.png')} name='Captain America' />
    </View>
  );
}
const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F8FA', // Color de fondo similar al de GitHub
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#24292E', // Color de texto similar al de GitHub
  },
};

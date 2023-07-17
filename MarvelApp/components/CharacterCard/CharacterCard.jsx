import React from 'react';
import { Text, View, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CharacterCard({image, name}) {
	const navigation = useNavigation();
  return (
    <TouchableOpacity 
			style={[styles.container, styles.containerNightMode]}
			onPress={() => navigation.navigate('Detail')}
	>
			<Image 
				style={styles.image}
				source={image}
			/>
      <Text style={[styles.name, styles.nameNightMode]}>{name}</Text>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F8FA', // Color de fondo similar al de GitHub (Modo diurno)
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  containerNightMode: {
    backgroundColor: '#24292E', // Color de fondo similar al de GitHub (Modo nocturno)
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#24292E', // Color de texto similar al de GitHub (Modo diurno)
  },
  nameNightMode: {
    color: '#F6F8FA', // Color de texto similar al de GitHub (Modo nocturno)
  },
});
import * as React from 'react';
import { Text, View, ActivityIndicator, FlatList } from 'react-native';
import CharacterCard from '../CharacterCard/CharacterCard';
import apiParams from '../../config';
import axios from 'axios';
import { useState,useEffect } from 'react';

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { ts, apikey, hash, baseURL } = apiParams;

  useEffect(() => {
    axios.get(`${baseURL}/v1/public/characters`, {
      params: {
        ts,
        apikey,
        hash
      }
    })
      .then(response => setData(response.data.data.results))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View>
      {isLoading 
        ? <ActivityIndicator size="large" color="#00ff00" /> 
        : (
          <FlatList
            data={data}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
              <CharacterCard 
                image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`} 
                name={item.name} />
            )}
          />
        )
      }
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

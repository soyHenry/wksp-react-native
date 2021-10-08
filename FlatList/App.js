import React from 'react';
import { FlatList, Text, View, Image } from 'react-native';

const FlatListBasics = () => {
  return (
      <FlatList
        data={[
          {key: 'Iron Man', img: require('./assets/IronMan.png')},
          {key: 'Thor', img: require('./assets/Thor.png')},
          {key: 'Captain America', img: require('./assets/Captain.png')},
          {key: 'Hulk', img: require('./assets/Hulk.png')},
          {key: 'Black Widow', img: require('./assets/BlackWidow.png')},
          {key: 'Hawkeye', img: require('./assets/Hawkeye.png')}
        ]}
        renderItem={({item}) => 
          <>
            <Text>{item.key}</Text>
            <Image source={item.img} />
          </>
        }
      />
  );
}

export default FlatListBasics;
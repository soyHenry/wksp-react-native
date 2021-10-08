import React from 'react';
import { SectionList, Text, Image } from 'react-native';

const SectionListBasics = () => {
    return (
        <SectionList
          sections={[
            {
              title: 'Avengers', 
              data: [
                {key: 'Iron Man', img: require('./assets/IronMan.png')},
                {key: 'Thor', img: require('./assets/Thor.png')},
                {key: 'Captain America', img: require('./assets/Captain.png')},
                {key: 'Hulk'},
                {key: 'Black Widow', img: require('./assets/BlackWidow.png')},
                {key: 'Hawkeye', img: require('./assets/Hawkeye.png')}
              ]
            },
            {
              title: 'Guardians of the Galaxy', 
              data: [
                {key: 'Groot', img: require('./assets/Groot.png')},
                {key: 'Star-Lord', img: require('./assets/StarLord.jpg')},
                {key: 'Rocket Racoon', img: require('./assets/RocketRacoon.jpg')}
              ]
            },
          ]}
          renderItem={({item}) => 
            <>
              <Text>{item.key}</Text>
              {/* <Image source={item.img || require('./assets/Unknown.jpg')} /> */}
              { item.img ? <Image source={item.img} /> : <Image source={require('./assets/Unknown.jpg')} /> }
            </>
          }
          renderSectionHeader={({section}) => <Text>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
    );
}

export default SectionListBasics;
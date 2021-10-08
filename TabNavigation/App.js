import * as React from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const WorldScreen = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is a {props.name}!</Text>
    </View>
  );
};

const FlatListBasics = () => {
  return (
      <FlatList style={{backgroundColor: 'white'}}
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

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Avengers"
        screenOptions={{
          "tabBarActiveTintColor": "darkred"
        }}
      >
        {/* <Tab.Screen 
          name="Asgard"
          component={() => <WorldScreen name="Asgard" />}
          options={{
            tabBarIcon: 
              ({ color, size }) => (
                <MaterialCommunityIcons 
                  name="home"
                  color={color}
                 size={size} />
             )
          }}
        /> */}
        <Tab.Screen 
          name="Asgard" 
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            )
          }}
        >
          {props => <WorldScreen {...props} name="Asgard" />}
        </Tab.Screen>
        <Tab.Screen 
          name="Nidavellir" 
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home-outline" color={color} size={size} />
            )
          }}
        >
          {props => <WorldScreen {...props} name="Nidavellir" />}
        </Tab.Screen>
        <Tab.Screen 
          name="Avengers" 
          component={FlatListBasics} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="people" color={color} size={size} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
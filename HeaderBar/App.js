import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title='Black Widow'
        onPress={() =>
          navigation.navigate('Profile', { name: 'Black Widow' })
        }
      />
      <Button
        title='Black Panther'
        onPress={() =>
          navigation.navigate('Profile', { name: 'Black Panther', phrase: 'Wakanda Forever!' })
        }
      />
	</View>
  );
};

const ProfileScreen = ({ route, navigation }) => {
  return (
    <>
      <Text>This is {route.params.name}'s profile</Text>
      <Button
        title='Update Title'
        onPress={() => navigation.setOptions({ title: route.params.phrase || 'Avengers'})}
      />
    </>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{
        //   headerStyle: {
        //     backgroundColor: '#f4511e',
        //   },
        //   headerTintColor: '#fff',
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
        //   }
        // }}
      >
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ 
            title: 'Welcome Avengers',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        />
        <Stack.Screen 
          name='Profile'
          component={ProfileScreen} 
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation, route }) => {
  return (
    <View>
      <Button
        title="Black Widow"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Black Widow' })
        }
      />
      <Button
        title="Black Panther"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Black Panther' })
        }
      />
      <Button
        title="Extra"
        onPress={() =>
          navigation.navigate('Extra')
        }
      />
      <Text>{route.params?.fromChild || "Param not provided yet"}</Text>
	</View>
  );
};

const ProfileScreen = ({ route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const ExtraScreen = ({ navigation }) => {
  return (
    <>
      <Button
        title="Extra Navigate"
        onPress={() => navigation.navigate('Extra')}
      />
      <Button
        title="Extra Push"
        onPress={() => navigation.push('Extra')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back to first screen" onPress={() => navigation.popToTop()} />
      <Button 
        title="Go Home passing parameter" 
        onPress={
          () => navigation.navigate('Home', {
            fromChild: "Hi, I am a param from ExtraScren"
          })
        } 
      />
    </>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{ fromChild: 'Initial' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Extra" component={ExtraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
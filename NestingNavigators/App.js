import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const About = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>About</Text>
      <Button
        title="Settings"
        onPress={() =>
          navigation.navigate('Settings')
        }
      />
    </View>
  );
};

const List = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>List</Text>
    </View>
  );
}

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Avengers" component={List} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
}

const Settings = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{
        //   headerShown: false
        // }}
      >
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
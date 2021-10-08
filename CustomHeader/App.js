import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Button, Text, Image, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  // const [clicks, setClicks] = React.useState(0);

  // React.useEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <Button
  //         title="JOIN"
  //         color="#000"
  //         onPress={() => {
  //           setClicks(prevClicks => prevClicks + 1);
  //           Alert.alert(
  //           'Impossible', 
  //           'Sorry but you don\'t have super powers',
  //           [
  //             {
  //               text: "Cancel"
  //             },
  //           ]
  //         )}}
  //       />
  //     ),
  //   });
  // }, [navigation]);

  return (
    <View>
      {/* <Text>Attempts to join: {clicks}</Text> */}
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

function LogoTitle() {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image
        style={{ width: 30, height: 30 }}
        source={require('./assets/avengers-logo.png')}
      />
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Avengers</Text>
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{
        //   headerTitle: () => <LogoTitle />
        // }}
      >
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ 
            headerTitle: () => <LogoTitle />,
            headerStyle: {
              backgroundColor: 'red'
            },
            // headerTintColor: 'white',
            // headerRight: () => (
            //   <Button
            //     title="JOIN"
            //     color="#000"
            //     onPress={() => {
            //       // setClicks(prevClicks => prevClicks + 1);
            //       Alert.alert(
            //       'Impossible', 
            //       'Sorry but you don\'t have super powers',
            //       [
            //         {
            //           text: "Cancel"
            //         },
            //       ]
            //     )}}
            //   />
            // )
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
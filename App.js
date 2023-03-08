import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Screens/LoginRegister/Login/Login';
import Signup_EnterEmail from './src/Screens/LoginRegister/Signup/Signup_EnterInformation'
import Signup_AccountCreated from './src/Screens/LoginRegister/Signup/Signup_AccountCreated'
import Mainpage from './src/Screens/Mainpage/Mainpage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        animation: 'slide_from_right'
      }}>
        <Stack.Screen name="Login" component={Login} />
        


        <Stack.Screen name="Signup_EnterInformation" component={Signup_EnterEmail} />

        <Stack.Screen name="Signup_AccountCreated" component={Signup_AccountCreated} />

        <Stack.Screen name="MainPage" component={Mainpage} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

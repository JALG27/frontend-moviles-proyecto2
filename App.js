import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Screens/LoginRegister/Login/Login';
import Signup_EnterEmail from './src/Screens/LoginRegister/Signup/Signup_EnterInformation'
import Signup_AccountCreated from './src/Screens/LoginRegister/Signup/Signup_AccountCreated'
import Mainpage from './src/Screens/Mainpage/Mainpage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import NewTweet from './src/Screens/NewTweet/NewTweet';
import LikesPage from './src/Screens/Mainpage/LikesPage';
import SearchUserPage from './src/Screens/Mainpage/SearchUserPage';
import My_UserProfile from './src/Screens/Profile/My_UserProfile';
import NotificationScreen from './src/Screens/NotificationScreen/NotificationScreen';
import Settings1 from './src/Screens/Settings/Settings1';


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
        <Stack.Screen name="NewTweet" component={NewTweet} 
        options={{
          animation: 'slide_from_bottom'
        }}
        />

        <Stack.Screen name="SearchUserPage" component={SearchUserPage} 
        options={{
          animation: 'slide_from_bottom'
        }}
        />

        <Stack.Screen name="LikesPage" component={LikesPage} 
        />

        <Stack.Screen name="My_UserProfile" component={My_UserProfile} 
        options={{
          animation: 'slide_from_left'
        }}
        />

        <Stack.Screen name="Settings_1" component={Settings1}/>
         
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

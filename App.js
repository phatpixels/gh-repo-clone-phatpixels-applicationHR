import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image,  } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import LoginScreen from './screens/LoginScreen';
import ContactScreen from './screens/ContactScreen';
import HomeScreen from './screens/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons'

const Stack = createNativeStackNavigator()


export default function App(){

return(

<NavigationContainer>
<Stack.Navigator initialRouteName="Login">


<Stack.Screen name="Login" component={LoginScreen} 
 options={{
    title: 'Login',
    headerStyle: {
    backgroundColor: '#941a1d',
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    headerTitleStyle: {
    fontWeight: 'bold',
    },
    headerTitle: (props) => <LogoTitle {...props} />,
    
  }}/>
<Stack.Screen name="Home" component={HomeScreen}
 options={{
    title: 'Login',
    headerStyle: {
    backgroundColor: '#941a1d',
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    headerTitleStyle: {
    fontWeight: 'bold',
    },
    headerTitle: (props) => <LogoTitle {...props} />
  }}/>
<Stack.Screen name="Contact" component={ContactScreen}/>

</Stack.Navigator>
</NavigationContainer>



)



}
function LogoTitle({navigation}) {
    return (
        <TouchableOpacity  onPress={() => navigation.navigate("Contact")}>
      <Image
        style={{  width: 60, height: 30, alignItems: "center", justifyContent: "center" }}
        source={require('./assets/roi_logo.png')}
       
      />
      </TouchableOpacity>
    );
  }


 
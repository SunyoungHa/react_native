import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from './Chat';
import snackIcon from './assets/snackIcon.png'

const Stack = createStackNavigator();

export default function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}   options={{ title: 'Chat App UI' 
        }}/>
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home({ navigation },props) {
 const[texts,setTexts]=useState([{id:1, name: 'Sun',  picture: snackIcon, chat:[{from: 'sender', texts:'Hi, how are you?'}, {from:'receiver', texts:'I\'m fine, and you?'},{from: 'sender', texts:'I\'m fine, thanks'}, {from:'receiver', texts:'ok'}]
}, {id:1, name: 'Shine', picture: snackIcon, chat:[{from: 'sender', texts:'Hi, how are you?'}, {from:'receiver', texts:'I\'m fine'}]
}, 
])

  useEffect(() => {
    console.log(texts);
  }, [texts]);

  return (
    <View >
      <FlatList
        data={texts}
         keyExtractor={(item, index) => index}
        renderItem={({ item },props) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Chat', { messages: item })}>
                <View  style ={{flexDirection:'row', padding: 20, margin: 20, backgroundColor:'green'}}>
                   <Image style={ {height: 30,
    width: 30, marginHorizontal: 10}} source={item.picture} />
  <Text>{item.name}</Text>     
         
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}













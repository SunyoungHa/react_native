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
import DetailsScreen from './DetailsScreen';
const Stack = createStackNavigator();

export default function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home({ navigation },props) {
  const [products, setProducts] = useState(data);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item },props) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Details', { product: item })}>
              <Card style={styles.card}>
                <View style={styles.textBox}>
                  <Text>{item.name}</Text>
                  <Text>$ {item.price.toString()}</Text>
                  <View style={{ flexDirection: 'row' }}></View>
                </View>
                <Image
                  style={styles.image}
                  source={{
                    uri: item.image,
                  }}
                keyExtractor={(item, index) => index}/>
              </Card>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginBottom: 5,
    height: 150,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    bottomMargin: 200,
    padding: 8,
  },

  image: {
    width: 110,
    height: 138,
    position: 'absolute',
    right: 10,
    top: 0,
  },
  textBox: {
    flexDirection: 'column',
    padding: 10,
    width: 300,
    flex: 1,
    justifyContent: 'space-between',
  },
});

const data = [
  {
    id: 1,
    name: 'Fruits',
    desc: [{
                "topicID": 1,
                "topicName": "Apple",
                "topicDescription": "Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. "
            },
            {
                "topicID": 2,
                                "topicName": "Cantaloupe",

                "topicDescription": "The cantaloupe, rockmelon, sweet melon, or spanspek is a melon that is a variety of the muskmelon species from the family Cucurbitaceae. ",
                
            }],
    image: 'http://dummyimage.com/110x138.png/dddddd/000000',
    price: 10,
  },
 
];

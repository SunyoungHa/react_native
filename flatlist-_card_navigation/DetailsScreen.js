import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import { Card } from 'react-native-paper';
import {data} from './App'

const DetailsScreen = ({ navigation, route }) => {
  const { product } = route.params;
  console.log(JSON.stringify(product));
  
  return (
    <View style={{alignItems: "center", flex: 1}}>
      {product.id && (
        <>
    
            
            <FlatList
        data={product.desc}

        renderItem={({ item }) => {
          return (
            <TouchableOpacity
             >
              <Card style={styles.card}>
                <View style={styles.textBox}>
                  <Text>{item.topicName}</Text>
                  <Text>{item.topicDescription}</Text>
                  <View style={{ flexDirection: 'row' }}></View>
                </View>
                <Image
                  style={styles.image}
                  source={{
                    uri: item.image,
                  }}
                />
              </Card>
            </TouchableOpacity>
          );
        }}
      />
        </>
      )}
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginBottom: 5,
    height: 150,
    flexDirection: 'row',
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

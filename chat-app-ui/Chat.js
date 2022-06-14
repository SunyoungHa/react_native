import React , {useEffect}from 'react'
import {Text, View, FlatList} from 'react-native'
import { Card } from 'react-native-paper';


const Chat = ({ navigation, route }) => {
  const {messages} = route.params
  useEffect(() => {
    console.log(route.params);
  }, [messages]);

return (
  <View>
  {messages.name && (

<FlatList 
data={messages.chat}
keyExtractor={(item,index) => index.toString()}
renderItem={({item}) => {return (
<Card style={{ backgroundColor:
                          item.from === 'sender' ? '#FFE6C7' : 'yellow',
                        marginLeft: item.from === 'sender' ? 180 : 0,
                        marginRight: item.from === 'sender' ? 0 : 180,
                        padding: 20}}>
                        <Text> {item.texts}</Text>
                        </Card>

)}}

/>

  )
  
  
  }
  
  </View>
  
  



)

}

export default Chat;

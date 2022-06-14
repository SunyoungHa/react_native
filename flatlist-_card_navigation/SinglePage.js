import React from 'react'
import {Text,View} from 'react-native'

const SinglePage=({route}) =>{
    const {fruit} = route.params;

  return(
    <View>
    {fruit.topicID && (
    <View>
<Text style={{padding:20, margin:20, backgroundColor:'pink'}}>
{fruit.topicDescription}
</Text>

    </View>)
    }
    </View>
  )
}

export default SinglePage
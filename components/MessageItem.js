import { View, Text } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function MessageItem({message, currentUser}) {
  if(currentUser?.uid == message?.userId){
    // my message
    return (
        <View className="flex-row justify-start mb-2 mr-2">
            <View style={{width: wp(80)}}>
                <View className="flex self-end p-2 rounded-2xl px-4 bg-white border border-neutral-200">
                    <Text style={{fontSize: hp(1.9)}}>
                        {message?.text}
                    </Text>
                </View>
            </View>
        </View>
    )
  }else{
    return (
        <View style={{width: wp(80)}} className="flex-row justify-start mb-2 mr-1">
            <View className="flex self-end p-3 px-4 rounded-2xl bg-indigo-100 border border-indigo-200">
                <Text style={{fontSize: hp(1.9)}}>
                    {message?.text}
                </Text>
            </View>
        </View>
    )
  }
}
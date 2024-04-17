import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import {Stack} from "expo-router"
import { Entypo } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Image } from 'expo-image';
export default function ChatRoomHeader({user, router}){
    return(
        <Stack.Screen
        options={{
            title:'',
            headerShadowVisible: false,
            headerLeft:()=>(
                <View className="flex-row items-center gap-2">
                    <TouchableOpacity onPress={()=>router.back()}>
                    <Entypo name="chevron-left" size={hp(4)} color="#737373" />
                    </TouchableOpacity>
                    <View className="flex-row items-center gap-3 ">
                        <Image 
                        source={user?.profileUrl}
                        style={{height: hp(5), width:hp(5), borderRadius:100}}
                        />
                        <Text style={{fontSize:hp(2.5)}} className="text-neutral-700 font-medium">
                            {user?.username}
                        </Text>

                        

                    </View>
                </View>
            ),
            headerRight: () => {
            //     <View className="flex-row items-center gap-1">
            //     <Ionicons name="call" size={hp(2.8)} color={'#737373'} />
            //     <Ionicons name="videocam" size={hp(2.8)} color={'#737373'} />
            // </View>
            }
        }}
        />
    )
}
import { View, Text, Pressable, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/authContext'
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ChatList from '../../components/ChatList';
import Loading from '../../components/Loading';
import { getDocs, query, where } from 'firebase/firestore';
import { userRef, usersRef } from '../../firebaseConfig';


export default function Home(){
    const {logout, user}= useAuth();
    const[users, setUsers] = useState([1,2,3]);
    console.log("user: ", JSON.stringify(user.uid,0,2));

    useEffect(()=>{
        if(user?.uid)

        getUsers();
    },[])

    const getUsers= async()=>{
        const q= query(userRef, where('userId', '!=', user?.uid));

        const querySnapshot = await getDocs(q);
        let data = [];
        querySnapshot.forEach((doc) => {
            data.push({...doc.data()});
        });
        //console.log('got users : ', data);

        setUsers(data);
    }

    return (
        <View className="flex-1 bg-white">
            <StatusBar style="light" />
            {
                users.length>0? (
                    <ChatList currentUser={user} users={users} />

                ):(
                    <View className="flex-1 items-center" style={{top: hp(30)}}>
                        {/* <ActivityIndicator size="large" /> */}
                        <Loading size={hp(20)} />

                    </View>
                )
            }
            
        </View>
    )
}


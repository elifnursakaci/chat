import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Pressable,Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import {useRouter} from "expo-router"
import Loading from '../components/Loading';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import CustomKeyboardView from '../components/CustomKeyboardView';
import { useAuth } from '../context/authContext';


export default function SignUp() {
    const router= useRouter();
    const {register}= useAuth();
    const [loading, setLoading]=useState(false);
    const emailRef= useRef("");
    const passwordRef= useRef("");
    const usernameRef= useRef("");
    const profileRef= useRef("");



    const navigation = useNavigation();



    const handleRegister = async () => {
        if(!emailRef.current || !passwordRef.current || !profileRef.current || !usernameRef.current){
            Alert.alert('Sign Up', 'Please fill all the fields');
            return;
        }
        setLoading(true);

        let response = await register(emailRef.current,passwordRef.current, usernameRef.current, profileRef.current);
        setLoading(false);

        console.log("got result:" ,response);
        if(response.success){
            Alert.alert('Sign Up', response.msg);
            router.replace("signIn");
        }

    }
    return (
        <CustomKeyboardView>
        <View style={styles.container}>
            <StatusBar style="dark" />
            <View style={styles.contentContainer}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logoImage} resizeMode='contain' source={require("../assets/images/sign.png")} />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Sign Up</Text>
                    <View style={styles.inputContainer}>
                        <Feather name="user" size={24} color="gray" />

                        <TextInput
                        onChangeText={value=>usernameRef.current=value}
                            style={styles.input}
                            placeholder="User Name"
                            placeholderTextColor="gray"
                        />
                    </View>

                    

                    <View style={styles.inputContainer}>
                        <Octicons name="mail" size={24} color="gray" />
                        <TextInput
                        onChangeText={value=>profileRef.current=value}
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor="gray"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                    <Octicons name="lock" size={24} color="gray" />
                        <TextInput
                        onChangeText={value=>passwordRef.current=value}
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry
                            placeholderTextColor="gray"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                    <Feather name="image" size={24} color="gray" />
                        <TextInput
                        onChangeText={value=>emailRef.current=value}
                            style={styles.input}
                            placeholder="Profile Url"
                            placeholderTextColor="gray"
                        />
                    </View>
                    
                </View>

                {/* {submit button} */}

                <View>
                    {
                        loading?(
                            <View style={{justifyContent:"center" , alignItems:"center"}}>
                                <Loading size={hp(10)}/>
                            </View>

                        ):(
                            <TouchableOpacity onPress={handleRegister}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>

                        )
                    }
                </View>



                

                {/* {sign up text} */}
                <View style={styles.signUpContainer}>
                    <Text style={styles.signUpText}>Already have an account?</Text>

                    <Pressable onPress={()=>router.push('signIn')}>
                    <Text style={styles.signUpLink}>Sign In</Text>
                    </Pressable>
                </View>



                
            </View>
        </View>
        </CustomKeyboardView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingTop: hp(9),
        paddingHorizontal: wp(5),
        gap:20,
    },
    logoContainer: {
        alignItems: "center",
    },
    logoImage: {
        height: hp(25),
    },
    formContainer: {
        marginTop: hp(3),
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "gray",
        textAlign: "center",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F2F2F2", 
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginTop: 10,
    },
    input: {
        fontSize: 20,
        flex: 1,
        fontWeight: "500",
        color: "gray", 
        marginLeft: 10,
    },
    forgot: {
        fontSize: 15,
        fontWeight: "500",
        color: "gray",
        textAlign: "right",
        marginTop: 10,
        marginRight: 10,
    },
    buttonText: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
        color: "white", 
        backgroundColor: "#2E94B5", 
        paddingHorizontal: 15,
        paddingVertical: 12,
        marginTop: 15,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    signUpContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    signUpText: {
        fontSize: 16,
        color: "gray",
        marginRight: 5,
    },
    signUpLink: {
        fontSize: 16,
        color: "#2E94B5", // Sign Up link rengi
        fontWeight: "bold",
        textDecorationLine: "underline",
    },
    
});


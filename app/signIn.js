import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Pressable,Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import {useRouter} from "expo-router"
import Loading from '../components/Loading';
import { useNavigation } from '@react-navigation/native';
import CustomKeyboardView from '../components/CustomKeyboardView';


export default function SignIn() {
    const router= useRouter();
    const [loading, setLoading]=useState(false);
    const emailRef= useRef("");
    const passwordRef= useRef("");
    const navigation = useNavigation();
    const handleLogin = async () => {
        if(!emailRef.current || !passwordRef.current){
            Alert.alert('Sign In', 'Please fill all the fields');
            return;
        }

        // login procces


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
                    <Text style={styles.title}>Sign In</Text>
                    <View style={styles.inputContainer}>
                        <Octicons name="mail" size={24} color="gray" />
                        <TextInput
                        onChangeText={value=>emailRef.current=value}
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
                    <Text style={styles.forgot}>Forgot Password ?</Text>
                </View>

                {/* {submit button} */}

                <View>
                    {
                        loading?(
                            <View style={{justifyContent:"center" , alignItems:"center"}}>
                                <Loading size={hp(10)}/>
                            </View>

                        ):(
                            <TouchableOpacity onPress={handleLogin}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>

                        )
                    }
                </View>


                

                {/* {sign up text} */}
                <View style={styles.signUpContainer}>
                    <Text style={styles.signUpText}>Don't have an account?</Text>

                    <Pressable onPress={()=>router.push('signUp')}>
                    <Text style={styles.signUpLink}>Sign Up</Text>
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


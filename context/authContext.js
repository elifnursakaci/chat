import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseConfig"; // firebaseConfig.js dosyanızdan doğru şekilde import edin

import {doc, getDoc, setDoc} from "firebase/firestore"
 
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(undefined);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => { 
            if (user) {
                setIsAuthenticated(true);
                setUser(user);
            } else {
                setIsAuthenticated(false);
                setUser(null);
            }
        });

        return unsub; // useEffect hook'u temizleme fonksiyonunu döndürün
    }, []);

    const login = async (email, password) => {
        try {
            const response = await signInWithEmailAndPassword(getAuth(), email, password);
            console.log(response?.user);


        } catch (error) {
            console.log(error);
        }
    };

    const logout = async () => {
        try {
            // Çıkış işlemleri burada gerçekleştirilebilir.
        } catch (error) {
            console.log(error);
        }
    };

    const register = async (email, password, username, profileUrl) => {
        try {
            const response = await createUserWithEmailAndPassword(getAuth(), email, password);
            console.log(response?.user);

            await setDoc(doc(db,"users", response?.user?.uid),{
                username,
                profileUrl,
                userId: response?.user?.uid

            });
            return{success: true, data: response?.user};

        } catch (e) {
            let msg = e.message;
            if(msg.includes("(auth/invalid-email)")) msg="invalid email"
            
            return{success: false, msg};
        }
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const value = useContext(AuthContext);

    if (!value) {
        throw new Error("useAuth must be used within an AuthContextProvider");
    }
    return value;
};

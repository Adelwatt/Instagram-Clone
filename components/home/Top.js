import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';

const Top = () => {
    return (
        <View style = {styles.container}>
            <TouchableOpacity>
                <Image style = {styles.logo} source={require('../../assets/instagram-logo-icon.png')} />
            </TouchableOpacity>
            <View style = {styles.icons}>
                <View style={styles.icon}>
                    <TouchableOpacity >
                        <Feather name="plus-square" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.icon}>
                    <TouchableOpacity>
                        <AntDesign name="hearto" size={24} color="white" />
                    </TouchableOpacity>
                    </View>
                <View style={styles.icon}>
                    <TouchableOpacity>
                        <View style={styles.unreadBadge}>
                            <Text style={[{color: "white"}, {alignSelf: 'center'}]}>11</Text>
                        </View>
                        <Fontisto name="messenger" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 150,
        height: 100,
        resizeMode: "contain"
    },
    container: {
        flexDirection: "row",
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "space-between"
    },
    icons: {
        flexDirection: "row",
        marginHorizontal: 5,
    },
    icon: {
        marginLeft: 10
    },
    unreadBadge: {
        backgroundColor: "red",
        position: "absolute",
        top: -10,
        right: -8,
        color: "white",
        width: 20,
        height: 18,
        borderRadius: 25,
        zIndex: 100
    }
});

export default Top;

/**
|--------------------------------------------------
| resizeMode: "contain" - we use it for image to get fit inside a container
|               for example image here is inside the View container.
|
|flexDirection: "row" - allow us to order items by row instead of  column (default behavior)
|
|zIndex: 100 - we use it if we want to make elements appear infront of another elements
|
|There are two ways to import a file to use in another file, for example we use Users.js inside Stories.js:
| 1. to define it in regular way and use export default "or" 2. to define it as export const .. and in the stories.js
| to use import {USERS} instead of import USERS
|
| SCROLLVIEW
|
| ANOTHER WAY TO ADD AN IMAGE:   <Image style = {styles.storie} source = {{uri: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}} />
|
| Divider tag from the package react-native-elements
|--------------------------------------------------
*/
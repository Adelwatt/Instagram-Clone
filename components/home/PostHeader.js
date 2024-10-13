import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";


const Post = (props) => {
    return (
        <View style = {styles.container}>
            <Image style = {styles.image} source={{uri: `${props.profilePicture}`}} />
            <Text style = {styles.userName}>{props.userName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 35,
        height: 35,
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 35
    },
    userName: {
        alignSelf: "center",
        marginLeft: 10
    },
    container: {
        flexDirection: "row",
        marginBottom: 10
    }
});

export default Post;
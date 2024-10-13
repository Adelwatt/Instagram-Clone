import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const PostImg = (props) => {
    return (
        <View style = {styles.container}>
            <Image style = {styles.image} source = {{url: `${props.imageUrl}`}}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: "100%"
    },
    container: {
        width: "100%",
        height: 450,
        marginBottom: 10
    }
});

export default PostImg;
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Divider } from "react-native-elements";

const Post = () => {
    return (
        <View style = {Styles.container}>
            <Divider style={Styles.divider} width={0.5} color="grey" orientation="vertical"></Divider>
            <Text style = {{color: "white"}}> POST </Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        marginVertical: 15
    },
    divider: {
        marginVertical: 10
    }
});

export default Post;
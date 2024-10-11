import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import Top from "../components/home/Top";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";


const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Top />
            <Stories />
            <Post />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1
    }
});

export default HomeScreen;
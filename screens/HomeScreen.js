import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import Top from "../components/home/Top";


const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Top />
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
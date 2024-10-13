import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import Top from "../components/home/Top";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import BottomTab from "../components/home/BottomTab";

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <ScrollView showsVerticalScrollIndicator = {false}>
                    <Top />
                    <Stories />
                    <Post />
                </ScrollView>
            </View>
            <View>
                <BottomTab />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    }
});

export default HomeScreen;
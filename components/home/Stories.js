import React from "react";
import {View, Text, StyleSheet, FlatList, ScrollView, Image, TouchableOpacity} from "react-native";
import USERS from "../../data/Users"

const Stories = () => {
    return (
        <View>
            <View style = {styles.container}>
                <ScrollView horizontal showsHorizontalScrollIndicator = {false}>
                    <View style = {{flexDirection: "column"}}>
                        <TouchableOpacity style = {{zIndex: 180}}>
                            <View style = {styles.yourStoryPlusButtonContainer}>
                                <Text style = {styles.yourStoryPlusButton}>+</Text>
                            </View>
                        </TouchableOpacity>
                        <Image style = {styles.storie} source = {{uri: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}} />
                        <Text style = {{color: "black", alignSelf: "center"}}>Your Story</Text>
                    </View>
                    {USERS.map((story, index) => (
                        <View key={index}>
                            <Image style = {styles.storie} source = {{uri: `${story.image}`}} />
                            <Text style = {{color: "black" , alignSelf: "center"}}> {
                                story.userName.length > 12 ? story.userName.slice(0, 10) + "..." : story.userName} 
                            </Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    storie: {
        color: "white",
        borderColor: "coral",
        borderWidth: 4,
        borderRadius: 50,
        width: 90,
        height: 90,
        marginLeft: 10,
        marginBottom: 10
    },
    container: {
        flexDirection: "row"
    },
    yourStoryPlusButton: {
        color: "white",
        
    },
    yourStoryPlusButtonContainer: {
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 50,
        alignItems: "center",
        width: 20,
        height: 20,
        backgroundColor: "dodgerblue",
        position: "absolute",
        top: 70,
        left: 75,
        zIndex: 180
    }
});


export default Stories;
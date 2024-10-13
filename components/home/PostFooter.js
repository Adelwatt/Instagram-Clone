import React from "react";
import { StyleSheet, View, Text } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const PostFooter = (props) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.iconsContainer}>
                <AntDesign style = {{marginRight: 15}} name="heart" size={20} color="black" />
                <EvilIcons style = {{marginRight: 15}} name="comment" size={28} color="black" />
                <Feather name="send" size={24} color="black" />
                <View style = {{alignItems: "flex-end", flex: 1, marginRight: 5}}>
                    <MaterialCommunityIcons name="archive-outline" size={24} color="black" />
                </View>
            </View>
            <View style = {styles.likesContainer}>
                <Text style = {styles.likes}>{props.likes}</Text>
                <Text style = {styles.likes}>Likes</Text>
            </View>
            <View style = {styles.captionContainer}>
                <Text>
                    <Text style = {{marginRight: 5}}>{props.userName} </Text>
                    <Text style = {{color: "lightslategrey"}}>{props.postCaption}</Text>
                </Text>
            </View>
            {props.comments.length 
                ? <Text style = {{color: "grey"}}>View {props.comments.length > 1 ? `all ${props.comments.length} comments` : "comment"}</Text>
                : null
            }
            <View>
                {props.comments.map((comment, index) => (
                    <View style = {styles.commentsContainer} key={index}>
                        <Text>
                            <Text style = {{ marginRight: 5}}>{comment.name} </Text>
                            <Text style = {{color: "lightslategrey"}}>{comment.comment}</Text>
                        </Text>
                    </View>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        marginLeft: 5
    },
    iconsContainer: {
        flexDirection: "row",
        marginBottom: 5
    },
    likes: {
        color: "black",
        marginRight: 5
    },
    likesContainer: {
        flexDirection: "row",
        marginBottom: 5
    },
    captionContainer: {
        marginBottom: 5
    },
    commentsContainer: {
        marginBottom: 8
    }
});

export default PostFooter;
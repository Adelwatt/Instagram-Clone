import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import POSTS from "../../data/posts";
import PostHeader from "../home/PostHeader";
import PostImg from "./PostImg";
import PostFooter from "./PostFooter";

const Post = () => {
    return (
        <View style = {Styles.container}>
            <Divider style={Styles.divider} width={0.5} color="grey" orientation="vertical"></Divider>
            <View>
                {POSTS.map((post, index) => (
                    <View key={index}>
                        <PostHeader userName = {post.user} profilePicture = {post.profilePicture}/>
                        <PostImg imageUrl = {post.imageUrl} />
                        <PostFooter likes = {post.likes} postCaption = {post.caption} comments = {post.comments}
                                    userName = {post.user}/>
                    </View>
                ))}
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        marginVertical: 5
    },
    divider: {
        marginVertical: 5
    }
});

export default Post;
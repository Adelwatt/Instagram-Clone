import React, { useState } from "react";
import { StyleSheet, View, Text, Image} from "react-native";
import BOTTOMTAPDATA from "../../data/bottomTapData";
import { Dimensions } from 'react-native';
import { TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';

const BottomTab = () => {
    const [homeIcon, setHomeIcon] = useState(true);
    const [searchIcon, setSearchIcon] = useState(false);
    const [reelIcon, setReelIcon] = useState(false);
    const [plusIcon, setPlusIcon] = useState(false);
    const [personIcon, setPersonIcon] = useState(false);

    const pressed = (iconName) => {
        switch(iconName){
            case "home":
                setHomeIcon(true);
                setSearchIcon(false);
                setPlusIcon(false);
                setReelIcon(false);
                setPersonIcon(false);
                return;
            case "search":
                setHomeIcon(false);
                setSearchIcon(true);
                setPlusIcon(false);
                setReelIcon(false);
                setPersonIcon(false);
                return;
            case "plus":
                setHomeIcon(false);
                setSearchIcon(false);
                setPlusIcon(true);
                setReelIcon(false);
                setPersonIcon(false);
                return;
            case "reel":
                setHomeIcon(false);
                setSearchIcon(false);
                setPlusIcon(false);
                setReelIcon(true);
                setPersonIcon(false);
                return;
            case "person":
                setHomeIcon(false);
                setSearchIcon(false);
                setPlusIcon(false);
                setReelIcon(false);
                setPersonIcon(true);
                return
            default:
                null;
        }
    }

    return (
            <View style = {styles.container}>
                <TouchableOpacity style = {styles.icon} onPress={() => pressed("home")}>
                    <AntDesign style = {styles.icon} name="home" size={30} color={homeIcon ? "dimgray" : "black"}/>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.icon} onPress={() => pressed("search")}>
                    <AntDesign style = {styles.icon} name="search1" size={30} color={searchIcon ? "dimgray" : "black"} />
                </TouchableOpacity>
                <TouchableOpacity style = {styles.icon} onPress={() => pressed("plus")}>
                    <AntDesign style = {styles.icon} name="plussquareo" size={30} color={plusIcon ? "dimgray" : "black"} />
                </TouchableOpacity>
                <TouchableOpacity style = {styles.icon} onPress={() => pressed("reel")}>
                    <MaterialCommunityIcons style = {styles.icon} name="play-box-outline" size={30} color={reelIcon ? "dimgray" : "black"} />
                </TouchableOpacity>
                <TouchableOpacity style = {styles.icon} onPress={() => pressed("person")}>
                    <Octicons style = {styles.icon} name="person" size={30} color={personIcon ? "dimgray" : "black"} />
                </TouchableOpacity>
            </View>
        )    
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        position: "absolute",
        bottom: 7,
        width: "100%",
        height: 60,
        backgroundColor: "white"
    },
    icon: {
        alignSelf: "center"
    }
});

export default BottomTab;
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import PostCard from "./PostCard";

import { FlatList } from "react-native-gesture-handler";

let posts = require("./temp_posts.json");

export default class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() { }

    renderItem = ({ item: post }) => {
        return <PostCard post={post} />;
    };

    keyExtractor = (item, index) => index.toString();

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      
    },
    droidSafeArea: {
      
    },
    appTitle: {
      
    },
    appIcon: {
      
    },
    iconImage: {
     
    },
    appTitleTextContainer: {
      
    },
    appTitleText: {
      
    },
    cardContainer: {
      
    }
});

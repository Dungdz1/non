import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
export default class SlashScreen extends Component {
    render() {
        return (
            <View style={StyleSheet.container}>
                <Text style={StyleSheet.title}>Viết vào màn này các chức năng</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 60,
        textAlign: 'center',
        margin: 10,
    }
})
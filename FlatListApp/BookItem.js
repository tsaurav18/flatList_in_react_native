import React, { Component } from 'react'
import {StyleSheet, View, Text, Image,ListView} from "react-native"

const styles = StyleSheet.create({
    BookItem:{
        flexDirection:"row",
        backgroundColor:"#FFFFFF",
        borderBottomColor:"#AAAAAA",
        borderBottomWidth:2,
        padding:15,
        height:175,
        marginTop:50
    },
    cover:{
        flex:1,
        height:150,
        resizeMode:"contain"
    },
    info:{
        flex:3, 
        alignItems:"flex-end",
        flexDirection:"column",
        alignSelf:"center",
        padding:20
    },
    author:{fontSize:18},
    title:{fontSize:18, fontWeight:"bold"}
})


export default class BookItem extends Component {
    render() {
        return (
            <View style={styles.BookItem}>
               
                <Image style={styles.cover} source={{uri:this.props.CoverURL}} />
                <View style={styles.info}>
                <Text style= {styles.author}>{this.props.author}</Text>
                <Text style= {styles.title}>{this.props.title}</Text>
                </View>
            </View>
        );
    }
}

import React,{Component} from "react";
import {StyleSheet, Text, View, Image, FlatList} from "react-native"
import BookItem from "./BookItem";
const mockBooks=[
    {
        rank:1,
        title:"Gathering",
        author: "john sandford",
        book_image:"https://images-na.ssl-images-amazon.com/images/I/51NmDnNma0L._SX326_BO1,204,203,200_.jpg"

    },
{
    rank:2,
    title:"Memory man",
    author: "David Baldacci",
    book_image:"https://images-na.ssl-images-amazon.com/images/I/51NmDnNma0L._SX326_BO1,204,203,200_.jpg"
},
{
    rank:3,
    title:"saurav tanwar",
    author: " Baldacci",
    book_image:"https://images-na.ssl-images-amazon.com/images/I/51NmDnNma0L._SX326_BO1,204,203,200_.jpg"
},
{
    rank:4,
    title:"peter",
    author: "setefen",
    book_image:"https://images-na.ssl-images-amazon.com/images/I/51NmDnNma0L._SX326_BO1,204,203,200_.jpg"
}

];
export default class BookList extends Component{
    constructor(props){
        super(props);
        this.state={
            data:this._addKeyToBooks(mockBooks)};
    }

    _renderItem = ({item})=>{
        return(
            <BookItem CoverURL={item.book_image}
            title={item.key}
            author={item.author}/>
        )
    }
_addKeyToBooks = books =>{
    return books.map(book=>{
        return Object.assign(book,{key:book.title})
    })
}
render(){
    return <View>
         <Text style={{textAlign:"center", fontSize:34,marginTop:50,backgroundColor:"skyblue", }}>BestSeller List</Text>
    
    <FlatList data={this.state.data} renderItem={this._renderItem}/>
    </View>
}

}

const styles = StyleSheet.create({
    container:{flex:1, paddingTop:22}
});

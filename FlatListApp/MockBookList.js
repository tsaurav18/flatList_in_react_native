import React,{Component} from "react";
import {StyleSheet, Text, View, SectionList,Image, FlatList} from "react-native"
import BookItem from "./BookItem";
import NYT from "./NYT"
// const mockBooks=[
//     {
//         rank:1,
//         title:"Gathering",
//         author: "john sandford",
//         book_image:"https://images-na.ssl-images-amazon.com/images/I/51NmDnNma0L._SX326_BO1,204,203,200_.jpg"

//     },
// {
//     rank:2,
//     title:"Memory man",
//     author: "David Baldacci",
//     book_image:"https://images-na.ssl-images-amazon.com/images/I/51NmDnNma0L._SX326_BO1,204,203,200_.jpg"
// },
// {
//     rank:3,
//     title:"saurav tanwar",
//     author: " Baldacci",
//     book_image:"https://images-na.ssl-images-amazon.com/images/I/51NmDnNma0L._SX326_BO1,204,203,200_.jpg"
// },
// {
//     rank:4,
//     title:"peter",
//     author: "setefen",
//     book_image:"https://images-na.ssl-images-amazon.com/images/I/51NmDnNma0L._SX326_BO1,204,203,200_.jpg"
// }

// ];
export default class BookList extends Component{
    constructor(props){
        super(props);
        this.state={
            // data:this._addKeyToBooks(mockBooks)};
            // data:[],
            section:[]
    }

   
    }
    componentDidMount(){
        this._refreshData;
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
// this is for FlatList
// _refreshData = ()=>{
//     NYT.fetchBooks().then(books =>{
//         console.log(books)
//         this.setState({data:this._addKeyToBooks(books)})
//     })
// }

_refreshData = ()=>{
    Promise.all([
        NYT.fetchBooks("hardcover-fiction"),
        NYT.fetchBooks("hardcover-nonfiction")
    ])
    .then(result=>{
        if(result.length!==2){
            console.error("Unexpected results")
        }
        this.setState({
            sections:[{title:"hardcover fiction",
        data:this._addKeyToBooks(result[0])},
        {title:"hardcore nonfiction",
        data:this._addKeyToBooks(result[1])}
    ]
        });
    });
};
renderItem = ({item})=>{
    return (<BookItem
    CoverURL={item.book_image}
    title={item.key}
    author={item.author}
/>
    )
}

_renderHeader = ({section})=>{
    return (
        <Text style={styles.headingText}>{section.title}</Text>
    )
}
// this is for flatlist
// render(){
//     return <View style = {styles.container}>
//          <Text style={{textAlign:"center", fontSize:34,backgroundColor:"skyblue"}}>BestSeller List</Text>
    
//     <FlatList data={this.state.data} renderItem={this._renderItem}/>
//     </View>
// }
render(){
    return <View style = {styles.container}>
        <SectionList 
        section={this.state.sections}
        renderItem={this._renderItem}
        renderSectionHeader={this._renderHeader}
       />
    
  
    </View>
}

}
// this is for flatlist
// const styles = StyleSheet.create({
//     container:{flex:1, paddingTop:22}
// });
const styles = StyleSheet.create({
    container:{flex:1, paddingTop:22},
    headingText:{
        fontSize:24,
        alignSelf:"center",
        backgroundColor:"#FFF",
        fontWeight:"bold",
        paddingLeft:20,
        paddingRight:20,
        paddingTop:2,
        paddingBottom:2
    
    }
})
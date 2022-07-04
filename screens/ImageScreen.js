import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TextInput,
  ActivityIndicator,
} from "react-native";
import ImageComponent from "../components/ImageComponent";
import HeaderComponent from "../components/HeaderComponent";
import { useSelector, useDispatch } from "react-redux";
const BASE_URL = `https://pixabay.com/api/`;
const KEY = '28442835-15d6dd851afc3b6f4679eaea9'; 
const ImageScreen = ({navigation,route}) => {
    // console.log(route)
    const dispatch = useDispatch()
    const SearchingItem = route.params?.searchItem
    const NumberOfGrid = route.params?.Grid ? route.params?.Grid : 2;
    const NumberOfKey = route.params?.key ? route.params?.key : 2;
    // const NumberOfGrid = route.params?.GridImage 
    // const NumberOfKey = route.params?.keyImage 
    
const [Image, setImage] = useState([])

const [currentPage,setCurrentPage] = useState(1)
   const [isloading, setLoading] = useState(false);
   
   const AllData = useSelector(state=>state.imageReducer)
    //  console.log(AllData)
useEffect(()=>{
    
    fetchImage()
},[SearchingItem,navigation,currentPage])

const fetchImage = ()=>{
    setLoading(true)
    let ImageUrl = `${BASE_URL}?key=${KEY}&format=json&q=${encodeURIComponent(SearchingItem)}&page=${currentPage}&per_page=30`;
    fetch(ImageUrl)
    .then((response)=>response.json())
    .then((responsejson)=>{
      const imageData = responsejson.hits.map((image)=>{
        const path = image.previewURL
          return path;
    })   
    
      
    setImage([...Image,...imageData])
    dispatch({type:"search",payload:[...Image,...imageData]})
    }).catch(error=>console.log(error))
  }
  


const renderLoader=()=>{
return(
        isloading?<View>
        <ActivityIndicator size="large" color="aaa" />
    </View>:null
)
}
const loadMoreItem = ()=>{
    
    setCurrentPage(currentPage +1)
    fetchImage()
}


    return (
        <View style={styles.screen} >
          
           <HeaderComponent 
           navigation={navigation.navigate}
           />
          <FlatList
            data={Image}
            numColumns={NumberOfGrid}
            key={NumberOfKey}
            keyExtractor={(item, index) => index}
            renderItem={({item})=>{
                return(
                    <ImageComponent 
                    image={item} 
                    grid={NumberOfGrid} 
                    navigation={navigation.navigate}
                    />
                )
            }}
            ListFooterComponent={renderLoader}
            onEndReached={loadMoreItem}
            onEndReachedThreshold={40}
            extraData={Image}
            />
       
        </View>
    )
}

export default ImageScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        
        
    },
    
})
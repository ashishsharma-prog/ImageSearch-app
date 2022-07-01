import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View,FlatList ,Image,TextInput,ActivityIndicator} from 'react-native'
import ImageComponent from '../components/ImageComponent'
import HeaderComponent from '../components/HeaderComponent'
const ImageScreen = ({navigation,route}) => {
   
    const SearchingItem = route.params?.searchItem
    const NumberOfGrid=route.params?.Grid?route.params?.Grid:2
    const NumberOfKey = route.params?.key?route.params?.key:2
    console.log(NumberOfGrid)
const [Image, setImage] = useState([])

const [currentPage,setCurrentPage] = useState(1)
   const [isloading, setLoading] = useState(false);

useEffect(()=>{
    fetchImage()
},[SearchingItem,currentPage])//whenver the page count change it will fetch new image
const fetchImage = ()=>{
    setLoading(true)
    
    const ImageUrl = `https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=712d124b3057ccb531a450d1a0324ff9&format=json&text=${SearchingItem}&nojsoncallback=true&page=${currentPage}&perpage=30&extras=url_s`

    fetch(ImageUrl)
    .then((response)=>response.json())
    .then((responsejson)=>{
       
        const imageData = responsejson?.photos?.photo?.map((image)=>{
            const path = 
            'https://live.staticflickr.com/' +
              image.server +
              '/' +
              image.id +
              '_' +
              image.secret +
              '.jpg';
              return path;
        })   
        
      
  setImage([...Image,...imageData])//add prev data and new data
        
      setLoading(false)
    }).catch(error=>console.log(error))
}
const renderLoader=()=>{
    return(
        //if we load it show the activity indicator
            isloading?<View>
            <ActivityIndicator size="large" color="aaa" />
        </View>:null
    )
    }
const loadMoreItem = ()=>{
    setCurrentPage(currentPage+1)//whenever we reach the end it will increase the currentpage count+1 then it will fetch new image

}


    return (
          <View style={styles.screen}>
           <HeaderComponent
           navigation={navigation.navigate}//sending this navigation as a props to the header component
           />
          <FlatList
            data={Image}
            numColumns={NumberOfGrid}
            key={NumberOfKey}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={({item})=>{
                return(
                    <ImageComponent 
                    image={item} 
                    grid={NumberOfGrid} //we pass this grid number to the image component we have to set width and height of the image acc to the grid
                    navigation={navigation.navigate}
                    />
                )
            }}
            ListFooterComponent={ renderLoader}
            onEndReached={loadMoreItem}
            onEndReachedThreshold={0.5}
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
    image:{
        width:200,
        height:200
    },
    search: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        fontSize: 15,
        marginBottom: 15
    },
})
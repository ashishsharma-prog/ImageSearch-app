import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View,FlatList ,Image,TextInput,ActivityIndicator} from 'react-native'

const ImageScreen = ({navigation,route}) => {
    console.log(route)

    const SearchingItem = route.params?.searchItem
    const [Image,setImage]=useState([])
    const [isloading, setLoading] = useState(false);
// here we fetch the image data
// const ImageUrl=`https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=6837cf241cfe54121c851291cc705fa7&format=json&text=${SearchingItem}&nojsoncallback=true&page=${currentPage}&perpage=100&extras=url_s`
useEffect(()=>{
    fetchImage()
},[SearchingItem])
    const fetchImage = ()=>{
        setLoading(true);
     const ImageUrl=`https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=6837cf241cfe54121c851291cc705fa7&format=json&text=${SearchingItem}&nojsoncallback=true&page=10&perpage=100&extras=url_s`
     console.log(ImageUrl)
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
        
      
  setImage([...Image,...imageData])//setImage from prev images and new image
        
      setLoading(false)
    }).catch(error=>console.log(error))
    }
  return (
    
    <View>
      <Text>ImageScreen</Text>
    </View>
  )
}

export default ImageScreen

const styles = StyleSheet.create({})
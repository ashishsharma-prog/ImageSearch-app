import React,{useState} from 'react'
import { StyleSheet, Text, View,TextInput,Button,Image } from 'react-native'


const HomeScreen = ({navigation,route}) => {
    const [textSearch,setTextSearch]=useState('')//to store the searching text
    return (
        <View style={styles.screen}>
            <Text style={styles.text}> Welcome to the Photo Searcher App</Text>
            <Image style={styles.logo} source={{uri:"https://vignette1.wikia.nocookie.net/battlefordreamislandfanfiction/images/7/7a/Indigo_Triangle_%282%29.png/revision/latest?cb=20150823183021"}}/>
            <TextInput  style={{
                    ...styles.Search,
                    backgroundColor: 'lightgrey',
                    color: 'black',
                    borderRadius: 10
                }}
                value={textSearch}
                onChangeText={(text) => setTextSearch(text)}
                placeholder='Search for news'
                placeholderTextColor='grey'
                
               
                />
                <View style={styles.btn}>
                <Button 
                color="#d26374"
                 title="Search Here"
                onPress={()=>{
                    //when we press search button then this button navigate to the image screen with the params
                    // of search text which while used to search the image in the api
                    navigation.navigate('ImageScreen',{
                        searchItem:textSearch
                    })
                }}
                />
                </View>
                
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
   
    Search: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        fontSize: 15,
    },
    btn:{
        padding: 20
    },
    
    text:{
        fontSize:18,
        marginHorizontal:10,
        color:"#d26374",
        fontWeight:'bold',
        marginVertical:20
    },
    logo:{
        width:200,
        height:200,
        marginHorizontal:70,
        padding: 20,
        marginVertical:20
    }
})

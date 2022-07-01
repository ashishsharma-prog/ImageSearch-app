import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const ImageComponent = (props) => {
    
  return (
    <View style={styles.container} >
        
    <Image style={styles.img} source={{uri:props.image}} />
    </View>
  )
}

export default ImageComponent

const styles = StyleSheet.create({
    img:{
        width:190,
        height:190
    },
    container:{
       
    }
})
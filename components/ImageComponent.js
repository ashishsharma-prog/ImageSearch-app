import React from 'react'
import { StyleSheet, Text, View,Dimensions,TouchableOpacity,Image } from 'react-native'




const ImageComponent = (props) => {
  
  var { width } = Dimensions.get('window');
  let widthImage = '48%';
let heightImage = width / 2;
let grid= props.grid;

if (grid === 3) {
  widthImage = '31%';
  heightImage = width / 3;
}
if (grid === 4) {
  widthImage = '23%';
  heightImage = width / 4;
}
   
    
    return (
        <TouchableOpacity
         style={{width:widthImage,height:heightImage,margin:3}}
         
         >
            <Image style={styles.img} source={{uri:props.image}} />
            
        </TouchableOpacity>
    )
}

export default ImageComponent

const styles = StyleSheet.create({
    img:{
        width: '100%',
    height: '100%',
    },
   
})
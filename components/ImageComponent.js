import React from 'react'
import { StyleSheet, Text, View,Dimensions,TouchableOpacity,Image } from 'react-native'


const {width} = Dimensions.get('window')
 

const ImageComponent = (props) => {
  
    const grid = props.grid//get the grid count as a props
  let widthImage = '100%';  //initial size of the width
    let heightImage = width ;
    if(grid===2){  //if grid is 2 the size is this
        widthImage="48%"
        heightImage=width/2
    }
    if (grid === 3) {   //if grid is 3 then width is 31% of the window
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
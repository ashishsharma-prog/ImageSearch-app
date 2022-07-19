import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
const HeaderComponent = ({navigation}) => {
    const [grid, setGrid] = useState(2)//to store the changing value of grid
    const[key,setKey] = useState(2)////to store the changing value of key
    const increaseCount=()=>{
       //if grid value is smaller than or equal to 3 that means we only have to increase the value of the grid
    if(grid <= 3 ){
      setGrid(grid+1)
      setKey(key+1)
    }
    //else if grid value is 4 and then we tap on the grid button it set the value of grid 2 by default
    else{
        setGrid(2)
        setKey(2)
    }
   //whenever we change the value of grid we pass this value to the Imagescreen to set the {NumberofGrid value }
    navigation('ImageScreen',{//send the grid and key count to image screen //then which further pass to image component
        Grid:grid,
        key:key
    })
    }
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.headerLeft}
            onPress={()=>{
                navigation('Home')
            }}
            
            >
            <SimpleLineIcons style={styles.icon2} name="arrow-left" size={26} color="black" />
            <Text style={styles.text}>Go back</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
             style={styles.icon}
             onPress={increaseCount}//on each tab we increase the count of grid
             
             >
            <Ionicons name="md-grid" size={24} color="black" />
            </TouchableOpacity>
           
        </View>
    )
}

export default HeaderComponent

const styles = StyleSheet.create({
    header:{
       
        height: 50,
        backgroundColor:'teal',
        marginTop:50,
        flexDirection:'row'
    },
    icon:{
     marginLeft:'70%',
     marginTop:10
    },
    icon2:{
        marginTop:10
    },
    headerLeft:{
        flexDirection:'row'
    },
    text:{
        marginTop:15
    }
})

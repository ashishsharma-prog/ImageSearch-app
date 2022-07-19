import { StyleSheet, Text, View,Image,Button,Share } from 'react-native'
import React from 'react'

const SingleImageScreen = ({navigation,route}) => {
    const img=route.params?.Image
    console.log(img)
    const onShare = async () => {
        try {
          const result = await Share.share({
            message: img,
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };
  return (
    <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri:img}}/>
            <View>
            <Button 
                color="#d26374"
                 title="Share"
                 onPress={onShare}
                />
            </View>
        </View>
  )
}

export default SingleImageScreen

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height: 300
   
       },
       imageContainer:{
           padding: 20,
           backgroundColor:'teal'
       }
})
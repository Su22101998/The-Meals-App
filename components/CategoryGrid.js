import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TouchableNativeFeedback,ImageBackground } from 'react-native';

const CategoryGrid = (props)=>{
    
    return(
    <View style={styles.mainContainer}>
    <View style={styles.gridItem}>
        <TouchableNativeFeedback 
            style={{flex:1}}
            onPress={props.onPress} 
            >
            <ImageBackground source={{uri:props.image}} style={{...styles.container,...{backgroundColor:props.color}}} >
                
            </ImageBackground>
        </TouchableNativeFeedback>
        
    </View>
    <Text style={styles.text} >{props.title}</Text>
    </View>
    
);};
const styles = StyleSheet.create({
    mainContainer:{
        marginVertical:10
    },
    text:{
        fontFamily:"Roboto-Bold",
        fontSize:20,
        color:"#555",
        textAlign:"center"
        
    },
    gridItem:{
        flex:1,
        marginHorizontal:15,
        marginVertical:5,
        height:150,
        borderRadius:20,
        overflow:'hidden',
        elevation:10,      
       
    },
    container:{
        flex:1,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        padding:10,
        
    }
})

export default CategoryGrid;

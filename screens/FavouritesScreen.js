import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import Colours from '../constants/Colours';


const FavouritesScreen = ({ props, navigation }) => {

    const favMeals = useSelector(state => state.meals.favouriteMeals)
    if(favMeals.length==0 || !favMeals){
        return(
        <View style={styles.screen}>
            <Text style={{...styles.text,color:"#555"}}>
                No Favourites Added.
            </Text>
            <Text style={styles.text}>
                Start adding your favourite recipes!!
            </Text>
        </View>)
    }
    return (
        <MealList data={favMeals} navigation={navigation} />
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:10
    },
    text:{
        fontFamily:'Roboto-Black',
        fontSize:20,
        color:Colours.tertiary
    }

})
export default FavouritesScreen;
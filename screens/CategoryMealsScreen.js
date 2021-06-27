import React from 'react';
import { View ,Text,StyleSheet } from 'react-native';
import { CATEGORY } from '../data/dummy-data';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import Colours from '../constants/Colours';



const CategoryMealsScreen = ({props,route,navigation})=>{

    const availableMeals = useSelector(state=>state.meals.filteredMeals)

    const {categoryId} = route.params;
    
    const selectedCategory = CATEGORY.find(cat=>cat.id==categoryId)

    const displayMenu = availableMeals.filter(food=>food.categoryIds.indexOf(categoryId)>=0)
    
    if(displayMenu.length==0){
        return(
        <View style={styles.screen}>
            <Text style={styles.text}>
                No meals found based on your filters.
            </Text>
        </View>
        )
    }
    return(
        <MealList data={displayMenu} navigation={navigation}/>
    
);}
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

export default CategoryMealsScreen;
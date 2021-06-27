import React from 'react';
import {View, StyleSheet ,FlatList} from 'react-native';
import MealItem from '../components/MealItem';
import Colours from '../constants/Colours';
import { useSelector } from 'react-redux';

const MealList = (props)=> {

    const favouriteMeal = useSelector(state => state.meals.favouriteMeals)
    const renderMenu = (itemData)=> {
        const favMeal = favouriteMeal.some(meal => meal.id == itemData.item.id)
        return(
            <MealItem 
            title={itemData.item.title}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            image={itemData.item.imageUrl}
            rating ={itemData.item.rating}
            onPress={()=>{props.navigation.navigate("MealDetail",
                                {mealId:itemData.item.id,
                                mealName:itemData.item.title,
                                isFav: favMeal})}
                    }
             />
            )
    }
    return(
        <View style={styles.screen}>
            <FlatList 
            data={props.data} 
            keyExtractor={(item,index)=>item.id} 
            renderItem={renderMenu} 
            style={{width:'90%'}}
            showsVerticalScrollIndicator={false}/>
        </View>
);}
const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colours.background,
        
    }
})
export default MealList;

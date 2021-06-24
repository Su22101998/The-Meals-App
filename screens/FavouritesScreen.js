import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const FavouritesScreen = ({ props, navigation }) => {
    const favMeals = MEALS.filter(meal => meal.id == 'm1' || meal.id == 'm3' || meal.id == 'm6' || meal.id == 'm7')
    return (
        <MealList data={favMeals} navigation={navigation} />
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default FavouritesScreen;
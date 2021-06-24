import React from 'react';
import { CATEGORY,MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';


const CategoryMealsScreen = ({props,route,navigation})=>{
    const {categoryId} = route.params;
    const selectedCategory = CATEGORY.find(cat=>cat.id==categoryId)

    const displayMenu = MEALS.filter(food=>food.categoryIds.indexOf(categoryId)>=0)
    
    return(
        <MealList data={displayMenu} navigation={navigation}/>
    
);}

export default CategoryMealsScreen;
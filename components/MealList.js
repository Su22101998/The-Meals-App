import React from 'react';
import {View, StyleSheet ,FlatList} from 'react-native';
import MealItem from '../components/MealItem';
import Colours from '../constants/Colours';

const MealList = (props)=> {
    const renderMenu = (itemData)=> {
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
                                mealName:itemData.item.title})}
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

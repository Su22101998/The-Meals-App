import React,{useEffect,useCallback} from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colours from '../constants/Colours';
import { useSelector , useDispatch } from 'react-redux';
import { toggleFavourite } from '../store/actions/meals';

const MealDetailScreen = ({ props, route, navigation:{setParams} }) => {

    const { mealId } = route.params;
    const availableMeals = useSelector(state => state.meals.meals)
    const isFavouriteMeal = useSelector(state =>state.meals.favouriteMeals.some(meal => meal.id === mealId))

    const dispatch = useDispatch()

    const toggleFavouriteHandler = useCallback(() => {
        dispatch(toggleFavourite(mealId))
    },[dispatch,mealId])

    useEffect (() =>{
        setParams({toggleFav:toggleFavouriteHandler})
    },[toggleFavouriteHandler])


    useEffect (() =>{
        setParams({isFav:isFavouriteMeal})
    },[isFavouriteMeal])


    
    const selectedMenu = availableMeals.find(meals => meals.id == mealId)
    const myIcon = <Icon name="star" size={20} color={Colours.background} />
    const myIcon2 = <Icon name="radio-button-on-outline" size={10} color={Colours.tertiary} />

    return (
        <ScrollView>
            <View style={styles.screen}>

                <Image source={{ uri: selectedMenu.imageUrl }} style={styles.image} />

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{selectedMenu.duration}mins</Text>
                    <Text style={styles.title}>{selectedMenu.complexity.toUpperCase()}</Text>
                    <Text style={styles.title}>{selectedMenu.affordability.toUpperCase()}</Text>
                    <Text style={styles.title}>{selectedMenu.rating} {myIcon} </Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.heading}>Ingredients</Text>
                    <View style={styles.interior}>
                        {selectedMenu.ingredients.map(ingredient =>
                            <View key={ingredient} >
                                <Text key={ingredient} style={styles.text} >
                                    {myIcon2}  {ingredient}
                                </Text>
                            </View>)
                        }
                    </View>
                </View>
                <View style={styles.card}>
                    <Text style={styles.heading}>Steps for preparation</Text>
                    <View style={styles.interior}>
                        {selectedMenu.steps.map(step =>
                            <View key={step} >
                                <Text key={step} style={styles.text} >
                                    {myIcon2} {step}
                                </Text>
                            </View>)
                        }
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30
    },
    image: {
        width: '95%',
        height: 300,
        borderRadius: 20,
    },
    titleContainer: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: "95%",
        backgroundColor: Colours.tertiary,
        margin: 30,
        borderRadius: 20,
        elevation: 10
    },
    title: {
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        color: "#fff"
    },
    heading: {
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        paddingBottom: 10,
    },
    text: {
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
        paddingBottom: 5
    },
    card: {
        alignItems: 'center',
        marginBottom: 30,
        backgroundColor: '#fff',
        width: '90%',
        borderRadius: 20,
        padding: 20,
        elevation: 10
    },
    interior: {
        alignItems: 'baseline',
    }
})
export default MealDetailScreen;
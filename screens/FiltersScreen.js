import React, { useState, useEffect,useCallback } from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';
import Colours from '../constants/Colours';
import { useDispatch } from 'react-redux';
import { setFilters } from '../store/actions/meals';


const FiltersScreen = ({navigation:{setParams}}) => {

    const [isGlutenFree, setIsGlutenFree] = useState(false)

    const [isVegan, setIsVegan] = useState(false)

    const [isVegetarian, setIsVegetarian] = useState(false)

    const [isLactoseFree, setIsLactoseFree] = useState(false)

    const dispatch = useDispatch()

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        }
        dispatch(setFilters(appliedFilters))
    },[isGlutenFree,isLactoseFree,isVegan,isVegetarian])

useEffect(() => {
        setParams({ save: saveFilters })
    },[saveFilters])

    const SwitchElement = (props) => {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{props.title}</Text>
                <Switch
                    value={props.stateVal}
                    onValueChange={props.setStateVal}
                    trackColor={{ true: Colours.primary, false: '#fff' }}
                    thumbColor={Colours.tertiary} />
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <Text style={{ ...styles.text, ...{ fontSize: 22, color: "#444" } }}>
                Available Filters
            </Text>
            <SwitchElement title='Gluten Free' stateVal={isGlutenFree} setStateVal={newVal => setIsGlutenFree(newVal)} />
            <SwitchElement title='Vegan' stateVal={isVegan} setStateVal={newVal => setIsVegan(newVal)} />
            <SwitchElement title='Vegetarian' stateVal={isVegetarian} setStateVal={newVal => setIsVegetarian(newVal)} />
            <SwitchElement title='Lactose Free' stateVal={isLactoseFree} setStateVal={newVal => setIsLactoseFree(newVal)} />
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        backgroundColor: Colours.background,
        flex: 1,
        alignItems: 'center',
        padding: 30
    },
    container: {
        flexDirection: 'row',
        width: "90%",
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20
    },
    text: {
        fontSize: 19,
        fontFamily: 'Roboto-Bold',
        color: '#555'
    }
})
export default FiltersScreen;
import React from 'react';
import { Text, View, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { CATEGORY } from '../data/dummy-data';
import CategoryGrid from '../components/CategoryGrid';
import Colours from '../constants/Colours';



const CategoriesScreen = ({ props, navigation }) => {

    const renderGridItem = (itemData) => {
        return (
            <View style={styles.screen}>
                <CategoryGrid
                    title={itemData.item.title}
                    onPress={() => {
                        navigation.navigate("CategoryMeals",
                            {
                                categoryId: itemData.item.id,
                                categoryName: itemData.item.title
                            })
                    }
                    }
                    color={itemData.item.color}
                    image={itemData.item.imageUrl}
                />

            </View>

        )
    }

    return (


        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORY}
            renderItem={renderGridItem}
            numColumns={2} />

    )
        ;
}



const styles = StyleSheet.create({
    screen: {
        backgroundColor: Colours.background,
        flex: 1,

    },

})
export default CategoriesScreen;

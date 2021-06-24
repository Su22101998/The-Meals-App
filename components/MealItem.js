import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, TouchableNativeFeedback } from 'react-native';
import Colours from '../constants/Colours'
import Icon from 'react-native-vector-icons/Ionicons';

const MealItem = (props) => {
    const myicon = <Icon name='star' size={15} color={Colours.background} />
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onPress}>
                <View >
                    <View style={styles.imageContainer}>
                        <ImageBackground source={{ uri: props.image }} style={styles.img}>
                            <View style={styles.titleTextContainer}>
                                <Text style={styles.title}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.info}>{props.duration}mins</Text>
                        <Text style={styles.info}>{props.complexity.toUpperCase()}</Text>
                        <Text style={styles.info}>{props.affordability.toUpperCase()}</Text>
                        <Text style={styles.info}>{props.rating}{myicon}</Text>

                    </View>
                </View>
            </TouchableOpacity>
        </View>

    )
};
const styles = StyleSheet.create({
    container: {
        height: 200,
        width: "100%",
        marginTop: 30,
        marginBottom: 20,
        borderRadius: 20,
        overflow: 'hidden'

    },
    imageContainer: {
        height: "80%",
        width: "100%",

    },
    infoRow: {
        backgroundColor: Colours.tertiary,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: "20%",
        alignItems: 'center',
        width: "100%"
    },
    img: {
        height: "100%",
        width: "100%"
    },
    titleTextContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    title: {
        fontSize: 22,
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: "100%",
        color: Colours.background,
        paddingVertical: 2,
        textAlign: 'center',
        fontFamily: 'Roboto-Bold',
        marginBottom: 10

    },
    info: {
        fontSize: 15,
        fontFamily: 'Roboto-Black',
        color: Colours.accent

    }
});
export default MealItem;
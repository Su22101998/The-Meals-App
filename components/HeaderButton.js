import React from'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Colours from '../constants/Colours';

const CustomHeaderButton = (props)=> {

    return(
        <HeaderButton {...props} 
        IconComponent={Icon} 
        iconSize={23}
        color={Colours.accent}/>
    )
}

export default CustomHeaderButton;

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens';

enableScreens();
const App = () => {

  return (
    <MealsNavigator />
  );
};

const styles = StyleSheet.create({
 screen:{
   flex:1,
 }
});

export default App;

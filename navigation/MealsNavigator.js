import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colours from '../constants/Colours';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavouritesScreen from '../screens/FavouritesScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import FiltersScreen from '../screens/FiltersScreen';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

//creating the three types of navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


//style for the header 
const NavigationHeaderStyles = {
    headerStyle: { backgroundColor: Colours.tertiary },
    headerTitleStyle: {
        fontFamily: "Roboto-Black",
        fontSize: 20,
        color: "#fff"
    }
}


//style for the bottom tab navigator
const TabBarStyles = {
    activeTintColor: Colours.tertiary,
    activeBackgroundColor: Colours.accent,
    inactiveBackgroundColor: Colours.background,
    inactiveTintColor: Colours.primary,
    style: {
        borderTopWidth: 0,
    }
}


// header left menu icon component
const HeaderLeftIcon = (props) => {
    return (<HeaderButtons HeaderButtonComponent={HeaderButton} >
        <Item
            title='Menu'
            iconName='menu'
            onPress={() => {
                props.navData.navigation.toggleDrawer();
            }}
        />
    </HeaderButtons>)
}


// header right favouritr icon component
const HeaderRightFavIcon = () => {
    return (
        <HeaderButtons
            HeaderButtonComponent={HeaderButton} >
            <Item
                title='Favourite'
                iconName='star-outline'
                onPress={() => { console.log('Mark as Favourite'); }}
            />
        </HeaderButtons>
    )
}



// stack navigator for the main stack of categories screen, categorymeals screen and meal detai screen
const MealsStackNavigator = (navData) => {
    return (

        <Stack.Navigator initialRouteName='Categories'
            screenOptions={NavigationHeaderStyles}>
            <Stack.Screen
                name='Categories'
                component={CategoriesScreen}
                options={{
                    title: 'Meal Categories',

                    headerLeft: () => (
                        <HeaderLeftIcon navData={navData} />)

                }}
            />

            <Stack.Screen
                name='CategoryMeals'
                component={CategoryMealsScreen}
                options={
                    ({ route }) => ({ title: route.params.categoryName })
                }
            />

            <Stack.Screen
                name='MealDetail'
                component={MealDetailScreen}
                options={
                    ({ route }) => ({
                        title: route.params.mealName,

                        headerRight: () => (
                            <HeaderButtons
                            HeaderButtonComponent={HeaderButton} >
                                <Item
                                title='Favourite'
                                iconName={route.params.isFav?'star':'star-outline'}
                                onPress={() => route.params.toggleFav() }
                                />
                            </HeaderButtons>)
                    })
                }
            />

        </Stack.Navigator>

    )
}



// stack navigator for the favourites and detail screen
const FavStackNavigator = (navData) => {
    return (
        <Stack.Navigator
            screenOptions={NavigationHeaderStyles}>
            <Stack.Screen
                name='Favourites'
                component={FavouritesScreen}
                options={{
                    title: 'Your Favourites',

                    headerLeft: () => (
                        <HeaderLeftIcon navData={navData} />)
                }}
            />
            <Stack.Screen
                name='MealDetail'
                component={MealDetailScreen}
                options={
                    ({ route }) => ({
                        title: route.params.mealName,

                        headerRight: () => (
                            <HeaderButtons
                            HeaderButtonComponent={HeaderButton} >
                                <Item
                                title='Favourite'
                                iconName={route.params.isFav?'star':'star-outline'}
                                onPress={() => route.params.toggleFav() }
                                />
                            </HeaderButtons>)
                    })
                }

            />
        </Stack.Navigator>
    )
}



// stack navigator for the filter screen
const FilterStackNavigator = (navData) => {
    return (
        <Stack.Navigator
            screenOptions={NavigationHeaderStyles}>
            <Stack.Screen
                name='Filters Screen'
                component={FiltersScreen}
                options={({route}) =>({
                    title: 'Filter Screen',

                    headerLeft: () => (
                        <HeaderLeftIcon navData={navData} />),
                    headerRight: () => {
                        return (
                            <HeaderButtons
                                HeaderButtonComponent={HeaderButton} >
                                <Item
                                    title='Save'
                                    iconName='save'
                                    onPress ={()=> route.params.save()}
                                />
                            </HeaderButtons>)

                    }
                })}

            />
        </Stack.Navigator>
    )
}



// tab navigator for the main stack and favourites stack
const TabNav = () => {
    return (
        <Tab.Navigator
            tabBarOptions={TabBarStyles}>

            <Tab.Screen
                name='home'
                component={MealsStackNavigator}
                options={{
                    tabBarLabel: 'Meals',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name='Favourites'
                component={FavStackNavigator}
                options={{
                    tabBarLabel: 'Favourites',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="bookmarks" color={color} size={size} />
                    ),

                }}
            />
        </Tab.Navigator>

    )
}



// Drawer navigation for entire app
const MainDrawerNav = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContentOptions={
                    {
                        activeTintColor: Colours.tertiary,
                        inactiveTintColor: Colours.primary,
                        labelStyle: {
                            fontFamily: 'Roboto-Black',
                            fontSize: 15
                        }
                    }

                }>
                <Drawer.Screen
                    name="Home"
                    component={TabNav}
                />

                <Drawer.Screen
                    name="Filters"
                    component={FilterStackNavigator}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}


export default MainDrawerNav;
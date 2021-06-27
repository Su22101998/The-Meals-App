import React from 'react';
import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens';
import {createStore,combineReducers} from 'redux';
import mealsReducer from './store/reducers/meals';
import { Provider } from 'react-redux';


const rootReducer = combineReducers({
  meals: mealsReducer
})
const store = createStore(rootReducer)
enableScreens();

const App = () => {

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
};


export default App;

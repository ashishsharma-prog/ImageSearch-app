import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ImageNavigator from './Navigator/ImageNavigator';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore} from 'redux'
import { combineReducers,applyMiddleware } from 'redux';
import { reducer } from './store/reducer';
import { LogBox } from 'react-native';
import {persistReducer,persistStore} from 'redux-persist'
import ReduxThunk from "redux-thunk"
import {PersistGate} from 'redux-persist/es/integration/react'
import AsyncStorageLib from '@react-native-async-storage/async-storage';

LogBox.ignoreAllLogs();
const rootReducer = combineReducers({
  imageReducer: reducer,
  
});
const persistConfig = {
  key:"root",
  storage:AsyncStorageLib
}
const persistedReducer = persistReducer(persistConfig,rootReducer)
const store = createStore(persistedReducer,applyMiddleware(ReduxThunk));
const persistor = persistStore(store)
export default function App() {
  return (
    <Provider store={store}>
<PersistGate persistor={persistor} loading={null}>


<ImageNavigator/>
</PersistGate>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});

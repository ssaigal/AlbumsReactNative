/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from 'react';
import {Text,AppRegistry, View} from 'react-native';
//import App from './App';
import Header from './src/components/header';
import {name as appName} from './app.json';
import AlbumList from './src/components/AlbumList'

const App = () => (
    <View style = {{flex:1}}>
        <Header headerText= {'Albums'}/>
        <AlbumList/>
    </View>

);



AppRegistry.registerComponent(appName, () => App);

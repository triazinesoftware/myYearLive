import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LoginView from './components/login/LoginView';
import RegisterScreen from './components/register/RegisterScreen';
import SelectTemplate from './components/selectTemplate/SelectTemplate';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import HomeView from './components/homeScreen/homeView';
import MathTemplate from './components/selectTemplate/MathTemplate';
import GradTemplate from './components/selectTemplate/GradTemplate';



import Emoji from './components/addEmoji/Emoji';

import Stickers from './components/addStickers/Stickers'

const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>


            <Stack.Screen
            name='LoginView'
            component={LoginView}
            options={{ 
              title: 'Login',
              headerStyle: {
                backgroundColor: '#009999',
              }, }}
          />
          <Stack.Screen
            name='homeView'
            component={HomeView}
            options={{ 
              title: 'Home',
              headerStyle: {
                backgroundColor: '#009999',
              }, }}
          />
         <Stack.Screen
          name='RegisterScreen'
            component={RegisterScreen}
            options={{ 
              title: 'Register',
              headerStyle: {
                backgroundColor: '#009999',
              }, 
            }}
        />
        <Stack.Screen
          name='SelectTemplate'
            component={SelectTemplate}
            options={{ 
              title: 'Select Template',
              headerStyle: {
                backgroundColor: '#009999',
              }, 
            }}
        /> 

        
        <Stack.Screen
        name='MathTemplate'
        component={MathTemplate}
        options={{ 
          title: 'Math Template',
          headerStyle: {
            backgroundColor: '#009999',
          }, 
        }}
        />
        
        <Stack.Screen
        name='GraduationTemplate'
        component={GradTemplate}
        options={{ 
          title: 'Grad Template',
          headerStyle: {
            backgroundColor: '#009999',
          }, 
        }} />

{ <Stack.Screen
        name='Emoji'
        component={Emoji}
        options={{ 
          title: 'Adding Emoji',
          headerStyle: {
            backgroundColor: '#009999',
          }, 
        }} /> }

  { <Stack.Screen
        name='Stickers'
        component={Stickers}
        options={{ 
          title: 'Stickers',
          headerStyle: {
            backgroundColor: '#009999',
          }, 
        }} /> }


      </Stack.Navigator>
    </NavigationContainer>
  );
}
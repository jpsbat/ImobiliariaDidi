import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, StatusBar, TouchableOpacity } from 'react-native'

import Aluguel from './src/pages/Aluguel'
import InfoCompra from './src/pages/InfoCompra'
import Compra from './src/pages/Compra'
import Contato from './src/pages/Contato'
import Inicio from './src/pages/Inicio'

import Seta from './assets/Seta.png'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Tabs(){
  return(
    <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
    <StatusBar
        barStyle = "dark-content"
        hidden = {false}
        backgroundColor = "#fff"
        translucent = {true}
        networkActivityIndicatorVisible = {true}
      />
      <Tab.Navigator
      screenOptions={{
              tabBarStyle: { backgroundColor: '#1C1C1C' },
              tabBarActiveTintColor: '#8C6D0B',
              tabBarInactiveTintColor: 'white',
              headerShown : false
            }}
      >
      <Tab.Screen name="Inicio" component={Inicio}
        options={{
                tabBarLabel: "Início",
                tabBarIcon: () => (
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={require('./assets/Inicio.png')} />
                )
              }}
        />
        <Tab.Screen name="Compra" component={Compra}
        options={{
                tabBarLabel: "Compra",
                tabBarIcon: () => (
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={require('./assets/Compra.png')} />
                )
              }}
        />
        <Tab.Screen name="Aluguel" component={Aluguel}
        options={{
                tabBarLabel: "Aluguel",
                tabBarIcon: () => (
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={require('./assets/Aluguel.png')} />
                )
              }}
        />
        <Tab.Screen name="Contato" component={Contato}
        options={{
                tabBarLabel: "Contato",
                tabBarIcon: () => (
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={require('./assets/Contato.png')} />
                )
              }}
        />
      </Tab.Navigator>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Compra" component={Tabs} />
        <Stack.Screen
          name="Informações"
          component={InfoCompra}
          options={({ navigation }) => ({
            headerShown: true,
            title: '',
            headerStyle: {
              backgroundColor: '#1C1C1C'
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={Seta} style={{ width: 30, height: 30, marginLeft: 10 }} />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
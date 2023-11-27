import { useState, useEffect } from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Inicio() {
  const [info, setInfo] = useState({ nome: '', email: '', telefone: '' });

  useEffect(() => {
    retrieveData();
  }, []);

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('info', JSON.stringify(info));
      alert('Informações Enviadas');
    } catch (error) {
      console.error(error);
    }
  };

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('info');
      if (value !== null) {
        const parsedValue = JSON.parse(value);
        setStoredInfo(parsedValue);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={estilos.fundo}>
        <View style={estilos.logoContainer}>
          <Image style={estilos.logo}
            source={require("../../../assets/Logo.png")}
          />

          <Text style={estilos.texto}>Credibilidade tem nome</Text>
          <Text style={estilos.titulo}>Entre em contato</Text>

          <View style={{ margin: 20 }}>
            <TextInput
            style={estilos.input}
            placeholder="Insira seu nome"
            placeholderTextColor="white"
            onChangeText={(text) => setInfo({ ...info, nome: text })}
            >
            </TextInput>
            <TextInput
            style={estilos.input}
            placeholder="Insira seu email"
            placeholderTextColor="white"
            onChangeText={(text) => setInfo({ ...info, email: text })}
            >
            </TextInput>
            <TextInput
            style={estilos.input}
            placeholder="Insira seu telefone"
            placeholderTextColor="white"
            onChangeText={(text) => setInfo({ ...info, telefone: text })}
            >
            </TextInput>
          </View>

          <TouchableOpacity
          style={estilos.botao}
          onPress={storeData}
          >
            <Text style={estilos.textoBotao}>Enviar</Text>
          </TouchableOpacity>

          <Text style={[estilos.informacoes, { fontWeight: 'bold', fontSize: 20 }]}>
          Didi Consultoria e Negócios Imobiliários
          </Text>
          <Text style={[estilos.informacoes, { fontSize: 14 }]}>
          CRECI/SP 39816-J
          </Text>
          <Text style={estilos.informacoes}>
          João Angelieri, 190 - Centro | Porto Feliz - SP
          </Text>
          <Text style={[estilos.informacoes, { fontWeight: 'bold', fontSize: 10, marginTop: 20 }]}>
          ©2022 por Didi Consultoria e Negócios Imobiliários
          </Text>

        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    flex: 1
  },
  logo: {
    width: 222,
    height: 97,
    marginTop: 70
  },
  fundo: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    backgroundColor: '#1C1C1C'
  },
  titulo: {
    fontSize: 25,
    color: '#8C6D0B',
    fontWeight: 'bold',
    marginTop: 10
  },
  texto: {
    fontSize: 20,
    lineHeight: 26,
    textAlign: 'center',
    color: 'white',
    marginTop: 10,
    paddingHorizontal: 20
  },
  informacoes: {
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
    color: 'white',
    marginTop: 10,
    paddingHorizontal: 20
  },
  textoBotao: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "bold",
    paddingHorizontal: 10
  },
  botao: {
    backgroundColor: '#8C6D0B',
    paddingVertical: 12,
    borderRadius: 6,
    marginBottom: 10
  },
  input: {
    padding: 3,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginBottom: 20,
    fontSize: 16,
    color: 'white'
  }
});
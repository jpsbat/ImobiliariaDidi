import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

import PagerView from 'react-native-pager-view';

export default function InfoCompra({ route }) {
  return(
    <View style={estilos.fundo}>
      <View style={estilos.logoContainer}>
        <Image style={estilos.logo} source={require("../../../assets/Logo.png")} />
      </View>
      <View style={{ flex: 1, marginTop: 20 }}>
          <Text style={estilos.codigo}>{route.params?.codigo}</Text>
          <Text style={estilos.descricao}>{route.params?.descricao}</Text>
          <Text style={estilos.preco}>{route.params?.preco}</Text>
          <PagerView loop={true} style={{ flex: 1, marginTop: 20 }} initialPage={0}>
            <View style={estilos.swiperContainer} key="1">
              <Image source={route.params?.foto1}/>
            </View>
            <View style={estilos.swiperContainer} key="2">
              <Image source={route.params?.foto2}/>
            </View>
            <View style={estilos.swiperContainer} key="3">
              <Image source={route.params?.foto3}/>
            </View>
            <View style={estilos.swiperContainer} key="4">
              <Image source={route.params?.foto4}/>
            </View>
          </PagerView>
            <View style={{ margin: 12 }}>
            <Text style={estilos.textoDescricao}>Descrição:</Text>
            <Text style={estilos.conteudo}>{route.params?.conteudo}</Text>
            <View style={{ margin: 12 }}>
              <TouchableOpacity style={estilos.botao}
                onPress={() => { Linking.openURL('https://wa.me/5515996822559'); }}>
                <Text style={estilos.textoBotao}>Quero conhecer este imóvel!</Text>
              </TouchableOpacity>
              </View>
          </View>
      </View>
    </View>
  )
}

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    backgroundColor: '#1C1C1C'
  },
  textoDescricao: {
    fontSize: 20,
    lineHeight: 34,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10
  },
  codigo: {
    fontSize: 30,
    lineHeight: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  descricao: {
    fontSize: 22,
    lineHeight: 25,
    textAlign: 'center',
    color: "white",
    padding: 6
  },
  preco: {
    fontSize: 20,
    lineHeight: 31,
    textAlign: 'center',
    color: "white",
  },
  conteudo: {
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'center',
    color: "white",
  },
  swiperContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao: {
    backgroundColor: '#8C6D0B',
    paddingVertical: 12,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "bold",
  },
  logoContainer: {
    alignItems: 'center'
},
  logo: {
    width: 222,
    height: 97,
    marginTop: 6
  }
});